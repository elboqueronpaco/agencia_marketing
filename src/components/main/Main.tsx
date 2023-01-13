import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Deserializer } from 'v8'
import { AboutUs, Careers, Cases, Contact, Home, Services } from '../../pages'
import { Blog } from '../../pages/Blog'
import { BrandingService } from '../../pages/services/BrandingService'
import { DesignOutstaffingService } from '../../pages/services/DesignOutstaffingService'
import { DevelopmentService } from '../../pages/services/DevelopmentService'
import { MotionDesignService } from '../../pages/services/MotionDesignService'
import { ProductDesignService } from '../../pages/services/ProductDesignService'
import { MainStyled } from './MainStyled'

export const Main = () => {
  return (
    <MainStyled>
        <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/cases' element={<Cases />}/>
           <Route path='/services' element={<Services />} />
           <Route path='/services/development' element={<DevelopmentService />} />
           <Route path='/services/product-design' element={<ProductDesignService />} />
           <Route path='/services/branding' element={<BrandingService />} />
           <Route path='/services/motion-design' element={<MotionDesignService />} />
           <Route path='/services/design-outstaffing' element={<DesignOutstaffingService />} />
           <Route path='/about-us' element={<AboutUs />} />
           <Route path='/careers' element={<Careers />} />
           <Route path='/blog' element={<Blog />} />
           <Route path='/contact' element={<Contact />} />
        </Routes>
    </MainStyled>
  )
}
