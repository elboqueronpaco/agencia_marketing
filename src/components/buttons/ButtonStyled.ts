import styled from 'styled-components'
import { colors } from '../../themes'

export const ButtonPrimaryStyled = styled.button`
    padding: 1rem 2rem;
    background-color: ${colors.primary};
    border: 0;
    border-radius: 5px;
    color: white;
    :hover{
        background-color: black;
    }
`