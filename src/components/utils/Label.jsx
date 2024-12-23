import React from 'react'

const Label = ({children,htmlFor}) => {
  return (
    <div>
      <label
          htmlFor={htmlFor}
          className="block text-lg uppercase font-semibold mb-2"
        >
          {children}
        </label>
    </div>
  )
}

export default Label
