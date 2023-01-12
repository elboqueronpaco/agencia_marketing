import React, { FC } from 'react'
import LogoImage from './logo.svg'
import { LogoContainer } from './LogoContainer'
import { LogoImageStyled } from './LogoImageStyled'
import { LogoTitleStyled } from './LogoTitleStyled'
interface Props {
    toogleMenu?: ()=>void
}
export const Logo: FC <Props> = ({toogleMenu}) => {
  return (
    <LogoContainer to='/' onClick={toogleMenu}>
        <LogoImageStyled src={LogoImage} alt='alt' />
        <LogoTitleStyled>digitalPaco</LogoTitleStyled>
    </LogoContainer>
  )
}

export const LogoFull = () =>{
    return (
        <LogoContainer to='/'>
            <LogoImageStyled src={LogoImage} alt='alt' />
            <LogoTitleStyled>digitalPaco</LogoTitleStyled>
        </LogoContainer>
    )
}