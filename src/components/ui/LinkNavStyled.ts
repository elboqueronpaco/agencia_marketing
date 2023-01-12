import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../themes'

export const LinkNavStyled = styled(NavLink)`
    display: block;
    transition: hover .5 ease-in;
    padding-left: 2rem;
    :hover, .active{
        color: ${colors.primary}
    }
`