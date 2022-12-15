import React from 'react';
import room from '../assets/room.png';
import { MdLocationPin } from "react-icons/md";

const ApartmentDetails = () => {
  return (
    <>
        <div className='flex items-center text-[#171611]'>
            <div className='w-[55%] mr-[20px]'>
                <img className='w-[100%] h-[250px]' src={room} alt="room" />
            </div>
            <div className='w-[45%]'>
                <h1 className='text-3xl font-bold'>$15,000 / Year</h1>
                <div className='flex items-center'>
                    <MdLocationPin color='#D38019' />
                    <p className='font-semibold text-base my-2'>C28 Podolski Ave Berlin, Germany</p>
                </div>
                <div className='flex justify-between font-bold text-sm my-3'>
                    <div>
                        <h4>Bedroom</h4>
                        <p className='font-medium'>3</p>
                    </div>
                    <div>
                        <h4>Dimension</h4>
                        <p className='font-medium'>10x10 </p>
                    </div>
                    <div>
                        <h4>Area</h4>
                        <p className='font-medium'>1000ft</p>
                    </div>
                </div>
                <div className='w-[100%]'>
                    <h3 className='font-bold text-base'>Description</h3>
                    <p className='text-sm text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ipsum facere molestias incidunt magni minima recusandae dolore earum repellat? Tempore?</p>
                </div>
            </div>
        </div>

        <div className='flex items-center justify-between text-[#171611]'>
            <div className='w-[55%] mr-[20px] my-5'>
                <div className='flex justify-between'>
                    <img className='w-[130px] h-[90px]' src={room} alt="room" />
                    <img className='w-[130px] h-[90px]' src={room} alt="room" />
                    <img className='w-[130px] h-[90px]' src={room} alt="room" />    
                </div>
            </div>
            <div className='w-[27.5%]'>
                <div className='w-[100%]'>
                    <h3 className='font-bold text-xl'>Other Views</h3>
                    <p className='text-base my-1'>
                        <span className='font-bold'>Availability:</span> Free
                    </p>
                    <p className='text-base'>
                        <span className='font-bold'>Duration:</span> Long
                    </p>
                </div>
            </div>
            <div className='mt-4 w-[17.5%] font-semibold text-2xl text-[#DEB37E] bg-[#171611] text-center p-4 cursor-pointer'>
                <button>Rent</button>
            </div>
        </div>
    </>
  )
}

export default ApartmentDetails