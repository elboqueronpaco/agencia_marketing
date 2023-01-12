import React, { FC } from 'react'
import { LinkNavStyled } from './LinkNavStyled'
interface Props {
    to: string
    label: string
    onClick?: any
}
export const LinkNav: FC<Props> = ({to, label, onClick}) => {
  return (
    <LinkNavStyled to={to} onClick={onClick}>{label}</LinkNavStyled>
  )
}
