import React from 'react';
import Pant3 from '../../images/pants/Pant3.png';
import Denim from '../../images/pants/Denim2.jpg';
import { BsCheckSquare } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs';





const SecondPage = () => {
    return (
        <div className='mt-28'>
            {/* <div className=' relative ml-[133px] mt-20 bg-gray-300 rounded-t-full w-[470px] rounded-md py-60'>

            </div> */}

            <div className=' relative ml-[133px] mt-20 bg-gray-300  w-[320px] rounded-full py-60'>

            </div>

            <div className=' mb-20 flex justify-evenly items-center gap-x-4'>
                <div className='relative -mt-[360px] w-[500px]'>
                    <img className='w-[350px] ml-2 ' src={Pant3} alt="PantImage" />
                </div>

                <div className=' w-[676px]'>
                    <div className='-mt-[420px] w-[400px]'>
                        <h1 className='text-start mb-6 text-[#003B60] font-extrabold text-[23px]'>
                            আমাদের ডেনিম জিন্স প্যান্ট প্রোডাক্টের বিবরণ
                        </h1>
                    </div>

                    <div>
                        <div className='mb-4 flex justify-start items-center gap-x-10'>
                            <div className='flex justify-start items-center gap-x-3'>
                                <BsCheckSquare className='text-xl'></BsCheckSquare>
                                <p className='font-semibold text-[15px] text-[#003B60]'>Men's Denim Pant</p>
                            </div>
                            <div className='flex justify-start items-center gap-x-3'>
                                <BsCheckSquare className='text-xl'></BsCheckSquare>
                                <p className='font-semibold text-[15px] text-[#003B60]'>Style- Narrow Slim Fit</p>
                            </div>
                        </div>

                        <div className='mb-4 flex justify-start items-center gap-x-10'>
                            <div className='flex justify-start items-center gap-x-3'>
                                <BsCheckSquare className='text-xl'></BsCheckSquare>
                                <p className='font-semibold text-[15px] text-[#003B60]'>Size- 30/32/34/36</p>
                            </div>
                            <div className='flex justify-start items-center gap-x-3'>
                                <BsCheckSquare className='text-xl'></BsCheckSquare>
                                <p className='font-semibold text-[15px] text-[#003B60]'>Very Comfortable to Wear.</p>
                            </div>
                        </div>

                        <div className='mb-4 flex justify-start items-center gap-x-10'>
                            <div className='flex justify-start items-center gap-x-3'>
                                <BsCheckSquare className='text-xl'></BsCheckSquare>
                                <p className='font-semibold text-[15px] text-[#003B60]'>Spandax- 2%</p>
                            </div>
                            <div className='ml-[33px] flex justify-start items-center gap-x-3'>
                                <BsCheckSquare className='text-xl'></BsCheckSquare>
                                <p className='font-semibold text-[15px] text-[#003B60]'>Nice Stylish Narrow Slim Fit.</p>
                            </div>
                        </div>
                        <div className='mb-4 flex justify-start items-center gap-x-3'>
                            <BsCheckSquare className='text-xl'></BsCheckSquare>
                            <p className='font-semibold text-[15px] text-[#003B60]'>Fabrics- Denim</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' -mt-56 '
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url(${Denim})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden',
                    height: "80vh"
                }}>
                <div>

                    <h1 className='mt-10 ml-72 text-[#F0E615] font-extrabold text-[23px]'>
                        ডেনিম ফেব্রিক জিন্স সাইজ
                    </h1>

                    <div className='ml-[750px] mt-6 flex justify-start items-center gap-x-6'>
                        <div className='border-2 border-[#F0E615] p-1 rounded-full'>
                            <div className='flex justify-center items-center text-center mx-auto text-xl font-bold bg-white rounded-full w-[50px] px-4 py-3'>
                                ৩০
                            </div>
                        </div>
                        <div className='border-2 border-[#F0E615] p-1 rounded-full'>
                            <div className='flex justify-center items-center text-center text-xl font-bold bg-white rounded-full w-[50px] px-4 py-3'>
                                ৩২
                            </div>
                        </div>
                        <div className='border-2 border-[#F0E615] p-1 rounded-full'>
                            <div className=' flex justify-center items-center text-xl font-bold bg-white rounded-full w-[50px] px-4 py-3'>
                                ৩৪
                            </div>
                        </div>
                        <div className='border-2 border-[#F0E615] p-1 rounded-full'>
                            <div className='flex justify-center items-center mx-auto text-center text-xl font-bold bg-white rounded-full w-[50px] px-4 py-3'>
                                ৩৬
                            </div>
                        </div>
                    </div>

                    <div className='mt-36 flex justify-center items-center'>
                        <h1 className='w-[480px] font-bold text-white text-[28px] text-center'>সবচেয়ে চেয়ে কম দামে আমাদের থেকে কিনুন</h1>
                    </div>

                    <div className='flex justify-center items-center'>
                        <div className='mt-6 rounded-tl-[35px] rounded-br-[35px] w-[270px] h-[70px] bg-[#F0E615] flex items-center justify-center'>
                            <div className='flex justify-center items-center gap-x-2'>
                                <p className=' text-[#092E67] font-extrabold text-[21px]'>অর্ডার করুন</p>
                                <BsArrowRight className='text-[#092E67]  text-xl font-extrabold text-[21px]'></BsArrowRight>
                            </div>
                        </div>
                    </div>

                </div>

            </div>




        </div>
    );
};

export default SecondPage;