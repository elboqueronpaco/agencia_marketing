import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../themes'

export const LinkNavStyled = styled(NavLink)`
    display: block;
    transition: all .5 ease-in;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    :hover{
        color: ${colors.primary};
    }
    @media screen and (min-width: 831px) {
        font-size: 13px;
        :hover, &.active{
            color: ${colors.primary};
            border-bottom: 1px solid ${colors.primary};
        }
    }
    @media screen and (min-width: 1024px) {
        font-size: 15px;
   }
`