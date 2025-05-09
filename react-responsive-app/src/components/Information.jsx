import React from 'react'
import PhpLogo from '../assets/php-logo.png'
import LaravelLogo from '../assets/laravel-logo.png'
import HtmlLogo from '../assets/html-logo.png'
import CssLogo from '../assets/css-logo.png'
import ReactLogo from '../assets/react.svg'
import TailwindLogo from '../assets/tailwind-logo.png'
import BootstrapLogo from '../assets/bootstrap-logo.png'
import JavascriptLogo from '../assets/javascript-logo.png'
import CodeigniterLogo from '../assets/codeigniter-logo.png'
import MySqlLogo from '../assets/mysql-logo.png'
import { BsClipboard2DataFill } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa6';
import { BiSolidWindowAlt } from 'react-icons/bi';

function Information() {
    return (
        <div className='bg-gray-200 text-gray-800 min-h-screen py-20 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-x-4 gap-y-24'>
                <div className='relative flex flex-col bg-neutral-100 border-2 rounded-[8px] border-gray-400 p-4'>
                    <div className='absolute w-full top-[-64px] left-0'>
                        <div className='flex justify-center z-10'>
                            <div className='relative w-50'>
                                <p className='text-4xl text-center font-bold'>Front-End</p>
                                <div className='absolute max-[376px]:hidden w-10 h-full top-0 left-[-40%] flex items-center justify-center'>
                                    <BiSolidWindowAlt className='text-gray-50 z-30' size={40} />
                                    <FaCircle className='absolute z-20' size={80} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-1 justify-items-center'>
                        <div className='max-w-full'>
                            <div className='h-20'>
                                <img className='w-50 md:w-full h-full object-contain' src={HtmlLogo} alt='' />
                            </div>
                            <p className='text-center lg:text-4xl md:text-4xl sm:text-2xl text-xl font-semibold py-2'>HTML</p>
                        </div>
                        <div className='max-w-full'>
                            <div className='h-20'>
                                <img className='w-50 md:w-full h-full object-contain' src={CssLogo} alt='' />
                            </div>
                            <p className='text-center lg:text-4xl md:text-4xl sm:text-2xl text-xl font-semibold py-2'>CSS</p>
                        </div>
                        <div className='max-w-full'>
                            <div className='h-20'>
                                <img className='w-50 md:w-full h-full object-contain' src={TailwindLogo} alt='' />
                            </div>
                            <p className='text-center lg:text-4xl md:text-4xl sm:text-2xl text-xl font-semibold py-2'>Tailwind</p>
                        </div>
                        <div className='max-w-full'>
                            <div className='h-20'>
                                <img className='w-50 md:w-full h-full object-contain' src={ReactLogo} alt='' />
                            </div>
                            <p className='text-center lg:text-4xl md:text-4xl sm:text-2xl text-xl font-semibold py-2'>React</p>
                        </div>
                        <div className='max-w-full'>
                            <div className='h-20'>
                                <img className='w-50 md:w-full h-full object-contain' src={BootstrapLogo} alt='' />
                            </div>
                            <p className='text-center lg:text-4xl md:text-4xl sm:text-2xl text-xl font-semibold py-2'>Bootstrap</p>
                        </div>
                        <div className='max-w-full'>
                            <div className='h-20'>
                                <img className='w-50 md:w-full h-full object-contain' src={JavascriptLogo} alt='' />
                            </div>
                            <p className='text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold py-2'>Javascript</p>
                        </div>
                    </div>
                </div>
                <div className='relative flex flex-col bg-neutral-100 border-2 rounded-[8px] border-gray-400 p-4'>
                    <div className='absolute w-full top-[-64px] left-0'>
                        <div className='flex justify-center z-10'>
                            <div className='relative w-50'>
                                <p className='text-4xl text-center font-bold'>Back-End</p>
                                <div className='absolute max-[376px]:hidden w-10 h-full top-0 left-[-40%] flex items-center justify-center'>
                                    <BsClipboard2DataFill className='text-gray-50 z-30' size={40} />
                                    <FaCircle className='absolute z-20' size={80} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-1 justify-items-center'>
                        <div className='max-w-full'>
                            <div className='h-20'>
                                <img className='w-50 md:w-full h-full object-contain' src={PhpLogo} alt='' />
                            </div>
                            <p className='text-center lg:text-4xl md:text-4xl sm:text-2xl text-xl font-semibold py-2'>PHP</p>
                        </div>
                        <div className='max-w-full'>
                            <div className='h-20'>
                                <img className='w-50 md:w-full h-full object-contain' src={CodeigniterLogo} alt='' />
                            </div>
                            <p className='text-center lg:text-4xl md:text-4xl sm:text-2xl text-xl font-semibold py-2'>Codeigniter</p>
                        </div>
                        <div className='max-w-full'>
                            <div className='h-20'>
                                <img className='w-50 md:w-full h-full object-contain' src={MySqlLogo} alt='' />
                            </div>
                            <p className='text-center lg:text-4xl md:text-4xl sm:text-2xl text-xl font-semibold py-2'>MySql</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information