import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import { motion, useInView } from 'motion/react';
// import { useInView   } from "react-intersection-observer";
import { useRef, useEffect, useState } from 'react';



function Cards() {

    const cardsImages = [Single, Double, Triple];

    const cardData = [
        {
            title: "Single User",
            price: "$149",
            features: ["500gb Storage", "1 User Allowed", "Send up to 2 GB"],
            featureClasses: "text-gray-600",
            customMarginTop: "mt-8"
        },
        {
            title: "Partnership",
            price: "$249",
            features: ["1TB Storage", "3 Users Allowed", "Send up to 10 GB"],
            featureClasses: "text-gray-600",
            customMarginTop: "mt-8",
            buttonClasses: "bg-black"
        },
        {
            title: "Group Account",
            price: "$399",
            features: ["500gb Storage", "1 Granted User", "Send up to 2 GB"],
            featureClasses: "text-gray-600",
            customMarginTop: "mt-8"
        }
    ];


    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });

    return (
        <div className='w-full md:py-[10rem] py-[2rem] text-black px-4 bg-white dark:bg-white overflow-x-hidden overflow-y-hidden'>
            {/* <div className='relative max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8' ref={myRef}>
                {cardData.map((card, index) => (
                    <motion.div className='relative w-full max-w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg' key={`${card}-${index}`} viewport={{ amount: 0.5, once: false }} animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 150, scale: 1.2 } } transition={{ duration: 1.1, type: "keyframes", bounce: 0.5, delay: index * 0.3 }} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} onAnimationStart={() => (isAnimating.current = true)} onAnimationComplete={() => (isAnimating.current = false, console.log('complete'))}>
                            <img className='w-20 mx-auto mt-[-3rem] bg-white relative z-[1000]' src={cardsImages[card-1]} alt='' />
                            <h2 className='text-2xl font-bold text-center py-8'>{card.title}</h2>
                            <p className='text-center text-4xl font-bold'>{card.price}</p>
                            <div className='text-center font-medium'>
                                {card.features.map((feature, i) => (
                                    <p key={i} className={`py-2 border-b mx-8 ${i === 0 ? card.customMarginTop : ''}`}>{feature}</p>
                                ))}
                            </div>
                            <button className={`bg-[#00df9a] ${card.buttonClasses ? card.buttonClasses + ' text-[#00df9a]' : 'bg-[#00df9a]' } w-[200px] rounded-md font-medium my-6 px-6 py-3`}>Start Trial</button>
                    </motion.div>
                    
                ))}
            </div> */}


            <div className='relative max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8' ref={ref}>
                {cardData.map((card, index) => (
                    <motion.div className='relative w-full max-w-full bg-white dark:bg-white shadow-xl flex flex-col items-center p-4 my-4 rounded-lg' key={`${card}-${index}`} initial={{ opacity: 0, y: 150, scale: 1.2 }} animate={ isInView ? {opacity: 1, y: 0, scale: 1} : {opacity: 0, y: 150, scale: 1.2} } transition={{ duration: 1.1, type: "keyframes", bounce: 0.5, delay: index * 0.3 }} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white relative z-[1000]' src={cardsImages[index]} alt='' />
                        <h2 className='text-2xl font-bold text-center py-8'>{card.title}</h2>
                        <p className='text-center text-4xl font-bold'>{card.price}</p>
                        <div className='text-center font-medium'>
                            {card.features.map((feature, i) => (
                                <p key={i} className={`py-2 border-b mx-8 ${i === 0 ? card.customMarginTop : ''}`}>{feature}</p>
                            ))}
                        </div>
                        <button className={`bg-[#00df9a] ${card.buttonClasses ? card.buttonClasses + ' text-[#00df9a]' : 'bg-[#00df9a]' } w-[200px] rounded-md font-medium my-6 px-6 py-3`}>Start Trial</button>
                    </motion.div>
                    
                ))}
            </div>
        </div>
    )
}

export default Cards