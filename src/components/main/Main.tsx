import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutUs, Careers, Cases, Contact, Home, Services } from '../../pages'
import { Blog } from '../../pages/Blog'
import { MainStyled } from './MainStyled'

export const Main = () => {
  return (
    <MainStyled>
        <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/cases' element={<Cases />}/>
           <Route path='/services' element={<Services />} />
           <Route path='/about-us' element={<AboutUs />} />
           <Route path='/careers' element={<Careers />} />
           <Route path='/blog' element={<Blog />} />
           <Route path='/contact' element={<Contact />} />
        </Routes>
    </MainStyled>
  )
}
