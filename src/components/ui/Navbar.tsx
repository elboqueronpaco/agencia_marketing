import React, { FC } from 'react'
import { navbarData } from '../../data/navbar.data'
import { ButtonPrimary } from '../buttons/ButtonPrimary'
import { LinkNav } from './LinkNav'
import { NavbarWrapper, NavbarWrapperFull } from './NavbarWrapper'
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
        <ButtonPrimary />
    </NavbarWrapper>
  )
}

export const NavbarFull = () => {
    return (
        <NavbarWrapperFull>
            {
                navbarData.map(({to, label}) => (
                    <LinkNav key={to} to={to} label={label} />
                ))
            }
            <ButtonPrimary />
        </NavbarWrapperFull>
    )
}
