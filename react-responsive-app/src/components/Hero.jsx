import React from 'react'
import { ReactTyped, Typed } from 'react-typed'
import { motion } from 'motion/react';

function Hero() {
    return (
        // <div className='text-white'>
        //     <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        //         <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        //         <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
        //         <div className='flex justify-center items-center flex-wrap'>
        //             <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for&nbsp;</p>
        //             <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold' strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop />
        //         </div>
        //         <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>
        //         <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        //     </div>
        // </div>

        // Overflow-x to prevent horizontal scrolling in mobile due to child growing bigger than parent and the viewport
        <div className='text-white overflow-x-hidden overflow-y-hidden'>
            <motion.div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center' initial={{ opacity: 0, y: 150, scale: 1.2 }} viewport={{ amount: 0.5, once: false }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ opacity: { duration: 1.2, type: 'tween' }, y: { duration: 0.5, type: 'tween' }, scale: { duration: 0.8, type: 'tween' }, }} whileHover={{ scale: 1.01 }}>
                <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
                <div className='flex justify-center items-center flex-wrap'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for&nbsp;</p>
                    <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold' strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            </motion.div>
        </div>
    );
}

export default Hero