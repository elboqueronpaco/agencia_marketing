import styled from 'styled-components'
import { fonts, measurement } from '../../themes'

export const HeaderStyled = styled.header`
    position: ${measurement.header.position};
    top: ${measurement.header.top};
    left: ${measurement.header.left};
    right: ${measurement.header.right};
    width: ${measurement.header.width};
    height: ${measurement.header.height};
    line-height: ${measurement.header.height};
    background-color: white;
    font-family: ${fonts.header.family};
    font-weight: ${fonts.header.weight};
    padding-left: 1rem;
    padding-right: 1rem;
                                                
`