import React from 'react'

function Container({children}) {
  return (
    <div className='container mx-auto my-10'>
        {children}
    </div>
  )
}

export default Container