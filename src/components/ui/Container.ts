import styled from 'styled-components'
import { measurement } from '../../themes'

export const Container = styled.div`
    width: ${measurement.container.width};
    margin-left: ${measurement.container.margin};
    margin-right: ${measurement.container.margin};
    padding-left: ${measurement.container.padding};
    padding-right: ${measurement.container.padding};
    box-sizing: border-box;
   @media screen and (min-width: 831px) {
    max-width: 800px;
   }
   @media screen and (min-width: 1024px) {
    max-width: 1024px;
   }
   @media screen and (min-width: 1200px) {
    max-width: 1200px;
   }
    
`