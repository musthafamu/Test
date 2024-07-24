import React from 'react'

function Button({children,...props}) {
  return (
    <button className='bg-black text-white rounded-md px-4 py-2' {...props}>
        {children}

    </button>
  )
}

export default Button