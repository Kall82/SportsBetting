import React, { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplay } from './EmblaCarouselAutoplay'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAutoplayProgress } from './EmblaCarouselAutoplayProgress'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import SportMatchCard from "../../components/cards/sportMatchCard";

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const progressNode = useRef(null)
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 })
  ])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi)

  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode)

  return (
    <div className="embla" style={{padding:"10px"}}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <SportMatchCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
