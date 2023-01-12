import styled from 'styled-components';
import { measurement } from '../../themes';
interface Props {
    open: boolean
}
export const NavbarWrapper = styled.nav<Props>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    position: ${measurement.navbar.position};
    width: ${measurement.navbar.width};
    height: ${measurement.navbar.height};
    top: ${measurement.navbar.top};
    left: ${measurement.navbar.left};
    transform: ${props => props.open ? 'translate(0, 0)' : 'translate(-100%, 100%)'};
    //right: ${props => props.open ? '0' : '-100%'};
    padding-left:${measurement.container.padding};
    background-color: white;
    
    
`
export const NavbarWrapperFull = styled.nav`
    display: none;
    @media screen and (min-width: 831px){
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    
`