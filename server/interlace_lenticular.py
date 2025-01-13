#!/usr/bin/env python3

import argparse
import os
import sys
from PIL import Image

def parse_arguments():
    parser = argparse.ArgumentParser(description='Generate an interlaced image for 3D lenticular printing with phase adjustment and scaling.')
    parser.add_argument('-d', '--directory', required=True,
                        help='Directory containing input frame images. Images will be sorted alphabetically.')
    parser.add_argument('-o', '--output', required=True,
                        help='Output interlaced image file path.')
    parser.add_argument('--lpi', type=float, required=True,
                        help='Lines Per Inch (LPI) of the lenticular lens sheet.')
    parser.add_argument('--dpi', type=float, required=True,
                        help='Print resolution in Dots Per Inch (DPI).')
    parser.add_argument('--phase', type=float, default=0.0,
                        help='Phase shift as a fraction of lenticule width (0.0 to 1.0). Default is 0.0 (no shift).')
    parser.add_argument('--width', type=float,
                        help='Target width for scaling (proportional scaling).')
    parser.add_argument('--height', type=float,
                        help='Target height for scaling (proportional scaling).')
    parser.add_argument('--units', choices=['pixels', 'inches'], default='pixels',
                        help='Units for width and height. Default is pixels.')
    args = parser.parse_args()
    return args

def load_images_from_directory(directory):
    if not os.path.isdir(directory):
        print(f'Error: Directory not found: {directory}')
        sys.exit(1)
    image_files = sorted([
        os.path.join(directory, f)
        for f in os.listdir(directory)
        if f.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.tiff', '.gif'))
    ])
    if not image_files:
        print(f'Error: No image files found in directory: {directory}')
        sys.exit(1)
    images = [Image.open(path) for path in image_files]
    return images

def scale_images(images, width, height, units, dpi):
    # Determine the target width and height once, outside the loop
    if units == 'inches':
        # Convert dimensions from inches to pixels
        if width:
            width = width * dpi
        if height:
            height = height * dpi

    # If only one dimension is provided, calculate the other to maintain aspect ratio
    if width and not height:
        aspect_ratio = images[0].height / images[0].width
        height = width * aspect_ratio
    elif height and not width:
        aspect_ratio = images[0].width / images[0].height
        width = height * aspect_ratio

    # Ensure width and height are integers
    width = int(width) if width else None
    height = int(height) if height else None

    # Now scale each image to the target width and height
    scaled_images = []
    for img in images:
        scaled_img = img.resize((width, height), Image.Resampling.LANCZOS)
        scaled_images.append(scaled_img)

    print(f"Scaling completed. Target dimensions: {width}x{height} pixels.")
    return scaled_images

def ensure_same_size(images):
    base_size = images[0].size
    for img in images:
        if img.size != base_size:
            print('Error: All images must be the same size.')
            sys.exit(1)
    return base_size

def calculate_pixels_per_lenticular_lens(dpi, lpi):
    pixels_per_lenticular_lens = dpi / lpi
    return pixels_per_lenticular_lens

def interlace_images(images, pixels_per_lenticular_lens, output_path, phase_shift, dpi):
    num_images = len(images)
    width, height = images[0].size
    output_image = Image.new('RGB', (width, height))
    pixels_output = output_image.load()
    pixels_images = [img.load() for img in images]

    # Adjust phase_shift to be within [0, pixels_per_lenticular_lens)
    phase_shift_pixels = (phase_shift % 1.0) * pixels_per_lenticular_lens

    print(f"Starting interlacing process... Total width: {width} pixels")

    for x in range(width):
        lenticule = int(x // pixels_per_lenticular_lens)
        pos_in_lenticule = (x % pixels_per_lenticular_lens) + phase_shift_pixels

        # Wrap around if pos_in_lenticule exceeds the lenticule width
        if pos_in_lenticule >= pixels_per_lenticular_lens:
            pos_in_lenticule -= pixels_per_lenticular_lens

        image_index = int((pos_in_lenticule * num_images) / pixels_per_lenticular_lens)

        # Clamp image_index to valid range
        image_index = min(image_index, num_images - 1)

        for y in range(height):
            pixels_output[x, y] = pixels_images[image_index][x, y]

        # Print progress every 100 pixels
        if x % 100 == 0 or x == width - 1:
            percentage_completed = (x + 1) / width * 100
            print(f"Processing column {x + 1}/{width} ({percentage_completed:.2f}%)")

    print("Interlacing complete. Saving interlaced image...")

    # Save the image with progress updates
    save_image_with_progress(output_image, output_path, dpi)

def save_image_with_progress(image, output_path, dpi):
    width, height = image.size

    print(f"Saving image at {dpi} DPI...")

    # Simulated row-by-row progress for feedback
    for y in range(height):
        # Simulate the row saving process (no direct row-by-row saving in PIL)
        if y % (height // 10) == 0 or y == height - 1:
            percentage_completed = (y + 1) / height * 100
            print(f"Saving image: {percentage_completed:.2f}%")

    # Save the image with the specified DPI
    print(f"Writing to file system (Please wait)...")
    image.save(output_path, dpi=(dpi, dpi), compress_level=9)
    print(f"Interlaced image saved to {output_path}")



def main():
    args = parse_arguments()
    images = load_images_from_directory(args.directory)

    # Scale images if width or height is specified
    if args.width or args.height:
        print(f'Scaling input image frames...')
        images = scale_images(images, args.width, args.height, args.units, args.dpi)

    width, height = ensure_same_size(images)
    pixels_per_lenticular_lens = calculate_pixels_per_lenticular_lens(args.dpi, args.lpi)

    # Validate phase shift
    if not (0.0 <= args.phase < 1.0):
        print('Error: Phase shift must be between 0.0 (inclusive) and 1.0 (exclusive).')
        sys.exit(1)

    print(f'Number of frames: {len(images)}')
    print(f'Image dimensions: {width}x{height}')
    print(f'Pixels per lenticular lens: {pixels_per_lenticular_lens:.2f}')
    print(f'Phase shift (fraction of lenticule width): {args.phase}')

    interlace_images(images, pixels_per_lenticular_lens, args.output, args.phase, args.dpi)

if __name__ == '__main__':
    main()
