import React from 'react'
import { NavHeroHeader } from '../ui/NavHeroHeader'
import { HeroHomeStyled } from './HeroHomeStyled'
import { HeroHomeTitle } from './HeroHomeTitle'

export const HeroHome = () => {
  return (
    <HeroHomeStyled>
        <HeroHomeTitle />
        <NavHeroHeader />
    </HeroHomeStyled>

  )
}
