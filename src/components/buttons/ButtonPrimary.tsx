import React, {useState} from 'react'
import { ButtonPrimaryStyled } from './ButtonStyled'
import PulseLoader from 'react-spinners/PulseLoader'

export const ButtonPrimary = () => {
    const [loading, setLoading] = useState(true)
  return (
    <ButtonPrimaryStyled>Hire Us <PulseLoader loading={loading} size={3} color='#FFFF' /></ButtonPrimaryStyled>
  )
}
