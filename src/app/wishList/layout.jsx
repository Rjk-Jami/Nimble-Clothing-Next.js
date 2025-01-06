import Header from '@/utils/Header/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
    <Header>WishList</Header>
    {children}
    </div>
  )
}

export default layout
