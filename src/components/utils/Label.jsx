import React from 'react'

const Label = ({children,htmlFor,size,uppercase}) => {
  return (
    <div>
      <label
          htmlFor={htmlFor}
          className={`block ${uppercase === true ? "uppercase" : ""}  font-semibold mb-2 ${size}`}
        >
          {children}
        </label>
    </div>
  )
}

export default Label
