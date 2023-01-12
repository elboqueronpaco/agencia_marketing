import React, {useState} from 'react'
import { MenuButton } from '../buttons/MenuButton'
import { Logo } from '../logo/Logo'
import { Navbar } from '../ui/Navbar'
import { HeaderContainer } from './HeaderContainer'
import { HeaderStyled } from './HeaderStyled'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const toogleMenu = () =>{
    setOpen(!open)
  }
  return (
    <HeaderStyled>
        <HeaderContainer>
            <Logo toogleMenu={toogleMenu} />
            <Navbar toogleMenu={toogleMenu} open={open}/>
            <MenuButton open={open} toogleMenu={toogleMenu}/>      
        </HeaderContainer>
    </HeaderStyled>
  )
}
