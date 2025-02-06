import Footer from '@/components/Footer'
import Header from '@/utils/Header/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <Header>Privacy Policy</Header>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default layout
