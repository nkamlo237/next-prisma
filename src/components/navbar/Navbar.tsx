import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full  flex items-center justify-center '>
        <div className='w-full max-w-6xl fixed top-0 flex justify-between items-center p-4 bg-white text-black border border-gray-500 rounded-sm shadow-2xl'>
         <h3 className='text-xl font-bold text-gray-800'>Next Prisma</h3>
         <span className='text-Xl text-green-500 font-bold'>SignIn</span>
        </div>
    </div>
  )
}

export default Navbar