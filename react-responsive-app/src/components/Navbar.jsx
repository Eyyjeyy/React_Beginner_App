import { useState } from 'react';
import {} from 'react-icons'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from 'motion/react';

function Navbar() {

    const [nav, setNav] = useState(true);
    function handleNav() {
        setNav(!nav);
    }

    return (
        // <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        //     <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        //     <ul className="hidden md:flex">
        //         <li className='p-4'>Home</li>
        //         <li className='p-4'>Company</li>
        //         <li className='p-4'>Resources</li>
        //         <li className='p-4'>About</li>
        //         <li className='p-4'>Contact</li>
        //     </ul>
        //     <div onClick={handleNav} className='block md:hidden'>
        //         {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        //     </div>
        //     <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-900' : 'fixed top-0 left-[-100%] w-[60%] h-full ease-in-out duration-500'}>
        //         <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>                
        //         <ul className='uppercase p-4'>
        //             <li className='p-4 border-b border-gray-600'>Home</li>
        //             <li className='p-4 border-b border-gray-600'>Company</li>
        //             <li className='p-4 border-b border-gray-600'>Resources</li>
        //             <li className='p-4 border-b border-gray-600'>About</li>
        //             <li className='p-4'>Contact</li>
        //         </ul>
        //     </div>
        // </div>

        <motion.div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white' initial={{ opacity: 0, y: -50 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} whileHover={{ scale: 1.01 }}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className="hidden md:flex">
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            {/* <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose className='z-100' size={20} /> : <AiOutlineMenu size={20} />}
            </div> */}
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? '' : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[100vw] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-900 z-100' : 'fixed top-0 left-[-100%] w-[60%] h-full ease-in-out duration-500'}>
                <div className='flex flex-row justify-between items-center'>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 mr-0'>REACT.</h1>
                    <div onClick={handleNav} className='block md:hidden pe-4'>
                        {/* {!nav ? <AiOutlineClose className='z-100' size={24} /> : ''} */}
                        <AiOutlineClose className='z-100' size={24} />
                    </div>
                </div>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </motion.div>
            
    )
}

export default Navbar