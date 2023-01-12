import React, {useState} from 'react'
import { MenuButton } from '../buttons/MenuButton'
import { Logo, LogoFull } from '../logo/Logo'
import { Container } from '../ui/Container'
import { Navbar, NavbarFull } from '../ui/Navbar'
import { HeaderContainer, HeaderContainerMobile } from './HeaderContainer'
import { HeaderStyled } from './HeaderStyled'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const toogleMenu = () =>{
    setOpen(!open)
  }
  return (
    <HeaderStyled>
      <Container>
        <HeaderContainerMobile>
            <Logo toogleMenu={toogleMenu} />
            <Navbar toogleMenu={toogleMenu} open={open}/>
            <MenuButton open={open} toogleMenu={toogleMenu}/>      
        </HeaderContainerMobile>
        <HeaderContainer>
          <LogoFull />
          <NavbarFull />
        </HeaderContainer>
      </Container>
    </HeaderStyled>
  )
}
