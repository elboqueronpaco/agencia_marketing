import styled from 'styled-components'
import { colors } from '../../themes'

export const LogoTitleStyled = styled.span`
    color: ${colors.primary};
    display: none;
    @media screen and (min-width: 831px) {
        display: inline-flex;
    }
`