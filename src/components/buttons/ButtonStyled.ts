import styled from 'styled-components'
import { colors } from '../../themes'

export const ButtonPrimaryStyled = styled.button`
    padding: .75rem 1rem;
    background-color: ${colors.primary};
    border: 0;
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    :hover{
        background-color: black;
    }
`