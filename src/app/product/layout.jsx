import React from 'react'

const layout = ({children}) => {
  return (
    <div className='pt-20'>
        
      <div className=" h-screen">
        {children}
      </div>
    </div>
  )
}

export default layout
