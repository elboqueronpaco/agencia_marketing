import React, { FC } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { HeroTitleStyled } from './HeroTitleStyled'
interface Props {
    title: string
    words: string[]
    loop: number
    cursorStyle: string
    typeSpeed: number
    deleteSpeed: number
    delaySpeed : number
}
export const HeroTitle: FC <Props> = ({title, words, loop, cursorStyle, typeSpeed, delaySpeed, deleteSpeed}) => {
  return (
    <HeroTitleStyled>
        {title}{' '}
        <span>
            <Typewriter
             words={words}
             loop={loop}
             cursor
             cursorStyle={cursorStyle}
             typeSpeed={typeSpeed}
             deleteSpeed={deleteSpeed}
             delaySpeed={delaySpeed}
            />
        </span>
    </HeroTitleStyled>
  )
}
