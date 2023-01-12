import styled from 'styled-components'
import { Container } from '../ui/Container'

export const HeaderContainerMobile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 831px){
        display: none;
    }
    
`
export const HeaderContainer = styled.div`
    display: none;
    @media screen and (min-width: 831px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
    }
`