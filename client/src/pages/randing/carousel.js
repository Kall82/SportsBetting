import EmblaCarousel from 'embla-carousel'
// import Autoplay from 'embla-carousel-autoplay'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'
import {
  addPlayBtnListeners,
  addNavBtnListeners
} from './EmblaCarouselAutoplay'
import { addAutoplayProgressListeners } from './EmblaCarouselAutoplayProgress'

const OPTIONS = { loop: true }

const emblaNode = document.querySelector('.embla')
const viewportNode = emblaNode.querySelector('.embla__viewport')
const prevBtn = emblaNode.querySelector('.embla__button--prev')
const nextBtn = emblaNode.querySelector('.embla__button--next')
const playBtn = document.querySelector('.embla__play')
const progressNode = document.querySelector('.embla__progress')

const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [
  // Autoplay({ playOnInit: false, delay: 3000 })
])

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
  emblaApi,
  prevBtn,
  nextBtn
)

const removePlayBtnListeners = addPlayBtnListeners(emblaApi, playBtn)
const removeNavBtnListeners = addNavBtnListeners(emblaApi, prevBtn, nextBtn)

const removeProgressListeners = addAutoplayProgressListeners(
  emblaApi,
  progressNode
)

emblaApi
  .on('destroy', removePrevNextBtnsClickHandlers)
  .on('destroy', removePlayBtnListeners)
  .on('destroy', removeNavBtnListeners)
  .on('destroy', removeProgressListeners)