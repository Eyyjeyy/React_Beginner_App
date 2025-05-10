import React from 'react'
import { motion, stagger } from "motion/react"

function FramerMotionTesting() {
    const isVisible = true;

    return(
        <>
            <div className='h-screen bg-gray-100'>
                <motion.div initial={{ opacity: 0, y: 50 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} whileHover={{ scale: 1.01 }}>
                    <p className='text-4xl text-[#00df9a]'>Horus Lupercal</p>
                </motion.div>
                <motion.div className='relative h-1/2 bg-gray-700' initial={{ opacity: 0, scale: 0.2 }} viewport={{ once: true }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
                    <p className='absolute top-1/2 left-1/2 text-9xl -translate-x-1/2 -translate-y-1/2'>AJ</p>
                </motion.div>
            </div>  

        </>
    );
}

export default FramerMotionTesting