import styled from 'styled-components'

export const NavHeroHomeStyled = styled.nav`
    display: grid;
    grid-template-columns: repeat(1, 100%);
    width: 100%;
    gap: 1.5rem;
    margin-top: 2rem;
    @media screen  and (min-width: 831px){
        grid-template-columns: repeat(5, auto);
    }
`