import React from 'react'
import { navHeroHome } from '../../data/navbar.data'
import { LinkHeroHome } from './LinkHeroHome'
import { NavHeroHomeStyled } from './NavHeroHomeStyled'

export const NavHeroHeader = () => {
  return (
    <NavHeroHomeStyled>
        {
            navHeroHome.map(({to, label}) => (
                <LinkHeroHome key={to} to={to} label={label}/>
            ))
        }
    </NavHeroHomeStyled>
  )
}
