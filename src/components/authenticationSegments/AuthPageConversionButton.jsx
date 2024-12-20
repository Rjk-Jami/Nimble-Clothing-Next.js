"use client"
import React, { useState } from 'react'

const AuthPageConversionButton = () => {
    const [isClick, setClick] = useState(false);

  return (
    <button
          onClick={() => setClick(!isClick)}
          className="btn btn-ghost btn-outline w-1/6 rounded-none uppercase"
        >
          {isClick ? "Register" : "login"}
        </button>
  )
}

export default AuthPageConversionButton
