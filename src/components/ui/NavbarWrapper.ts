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
    //left: ${measurement.navbar.left};
    
    right: ${props => props.open ? '0' : '-100%'};
    padding-left:${measurement.container.padding};
    background-color: white;
    

`