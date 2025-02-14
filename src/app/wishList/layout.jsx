import Footer from '@/components/Footer'
import Header from '@/utils/Header/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='min-h-screen flex flex-col'>
    <Header>WishList</Header>
    <div className="flex-1">
    {children}
    </div>
    <Footer></Footer>
    </div>
  )
}

export default layout
