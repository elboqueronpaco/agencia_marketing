import React from 'react'
import { hero } from '../../data/hero'
import { HeroTitle } from '../ui/HeroTitle'

export const HeroHomeTitle = () => {
  return (
    <>
        <HeroTitle title={'For those who'} words={hero.home} loop={0} cursorStyle={'_'} typeSpeed={120} deleteSpeed={50} delaySpeed={1000} />
    </>
  )
}
