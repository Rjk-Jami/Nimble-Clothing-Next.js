import React from 'react'

function Underline({height,width,css}) {
  return (
    <div className={`${width} ${height} ${css} bg-black dark:bg-white mt-1`} />
  )
}

export default Underline
