import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold' href='/'
        whileHover={{scale:1.24}}>D</MotionLink>
    </div>
  )
}

export default Logo