import React from 'react'

function DashboardHeader({title, children}) {
  return (
    <div className="flex flex-col m-10 items-center justify-center h-full text-green-800">
      <h1 className="text-5xl font-bold m-5">{title}</h1>
      <p className="text-2xl">
        {children}
      </p>
    </div>
  )
}

export default DashboardHeader