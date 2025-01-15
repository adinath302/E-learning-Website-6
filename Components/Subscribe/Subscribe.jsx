import React from 'react'
import { motion } from 'framer-motion'
import BgImage from '../../assets/bg.png'

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroudSize: 'cover',
  backgroundPosition: 'center'
}

const Subscribe = () => {
  return (
    <section className='bg-[#f7f7f7]'>
      <div className='container py-24 md:py-28'>
        <div className='flex flex-col justify-center'>
          <div className='text-center space-y-4 lg:max-w-[430px] mx-auto'>
            <h1 className='text-4xl font-bold !leading-snug'>
              450k+ Students are learning from us
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
