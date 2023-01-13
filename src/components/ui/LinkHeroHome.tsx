import React, { FC } from 'react'
import { LinkHeroHomeStyled } from './LinkNavStyled'
interface Props {
    to: string
    label: string
}
export const LinkHeroHome: FC <Props> = ({to, label}) => {
  return (
    <LinkHeroHomeStyled to={to}>{label}</LinkHeroHomeStyled>
  )
}
