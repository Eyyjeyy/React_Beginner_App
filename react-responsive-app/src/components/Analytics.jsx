import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analytics() {
    return (
        <div className='bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center text-center md:text-left'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p className=''>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates vel deserunt reiciendis ad officiis. Corrupti, quo ab perspiciatis doloribus ipsum laboriosam, repudiandae dicta ad assumenda sint cum officia tempore dignissimos?
                    </p>
                    <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]'>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Analytics