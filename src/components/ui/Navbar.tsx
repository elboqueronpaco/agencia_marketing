import React, { FC } from 'react'
import { LinkNav } from './LinkNav'
import { NavbarWrapper } from './NavbarWrapper'
interface Props {
    toogleMenu: any
    open: boolean
}
export const Navbar: FC <Props> = ({toogleMenu, open}) => {
  return (
    <NavbarWrapper open={open}>
        <LinkNav to='/cases' label='Case' onClick={toogleMenu} />
        <LinkNav to='/services' label='Services' onClick={toogleMenu} />
        <LinkNav to='/about-us' label='About Us' onClick={toogleMenu} />
        <LinkNav to='/careers' label='Careers' onClick={toogleMenu} />
        <LinkNav to='/blog' label='Blog' onClick={toogleMenu} />
        <LinkNav to='/contact' label='Contact' onClick={toogleMenu} />
    </NavbarWrapper>
  )
}
