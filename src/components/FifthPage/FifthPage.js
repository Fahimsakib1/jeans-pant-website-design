import React from 'react';
import People1 from '../../images/people/people1.png';
import People2 from '../../images/people/people2.png';
import People3 from '../../images/people/people3.png';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';



const FifthPage = () => {
    return (
        <div>
            <div className=' bg-sky-100 py-20 -mt-72 '>

                <div>
                    <div className='mx-[270px] mt-80 flex justify-center items-center gap-x-12'>

                        <div className=" rounded-tl-[35px] rounded-br-[35px] rounded-md card card-compact  bg-white shadow-2xl lg:mx-0 md:mx-4 sm:mx-3 mx-4 transition hover:scale-105 hover:transition-y-1 hover:ease-in-out">
                            <div className="">
                                <div className="avatar mx-auto -mt-10 border-2 border-blue-600 rounded-full">
                                    <div className="lg:w-[65px] md:w-[56px] w-16 rounded-full">
                                        <img src={People2} alt="aaaa" />
                                    </div>
                                </div>
                                <h1 className='mt-4 text-center font-bold text-[#003B60] text-lg'>Jacob Jones</h1>
                                <p className='mt-1 text-[#003B60] text-center text-sm'>Buffalo, NJ</p>
                                <p className='text-[#003B60] text-xl font-semibold'>------------------------</p>
                                <p className='mb-8 text-[#003B60] mt-2 text-center text-sm mx-10'>Sociable on as carriage my position weddings raillery consider. Peculiar trifling absolute and wandered.</p>
                            </div>
                        </div>

                        <div className=" rounded-tl-[35px] rounded-br-[35px] rounded-md card card-compact  bg-[#003B60] shadow-2xl lg:mx-0 md:mx-4 sm:mx-3 mx-4 transition hover:scale-105 hover:transition-y-1 hover:ease-in-out">
                            <div className="">
                                <div className="avatar mx-auto -mt-10 border-2 border-blue-600 rounded-full">
                                    <div className="lg:w-[65px] md:w-[56px] w-16 rounded-full">
                                        <img src={People3} alt="aaaa" />
                                    </div>
                                </div>
                                <h1 className='mt-4 text-center font-bold text-white text-lg'>Arlene McCoy</h1>
                                <p className='mt-1 text-white text-center text-sm'>Buffalo, NJ</p>
                                <p className='text-[#F0E615] text-xl font-semibold'>------------------------</p>
                                <p className='mb-8 text-white mt-2 text-center text-sm mx-10'>Sociable on as carriage my position weddings raillery consider. Peculiar trifling absolute and wandered.</p>
                            </div>
                        </div>

                        <div className=" rounded-tl-[35px] rounded-br-[35px] rounded-md card card-compact  bg-white shadow-2xl lg:mx-0 md:mx-4 sm:mx-3 mx-4 transition hover:scale-105 hover:transition-y-1 hover:ease-in-out">
                            <div className="">
                                <div className="avatar mx-auto -mt-10 border-2 border-blue-600 rounded-full">
                                    <div className="lg:w-[65px] md:w-[56px] w-16 rounded-full">
                                        <img src={People1} alt="aaaa" />
                                    </div>
                                </div>
                                <h1 className='mt-4 text-center font-bold text-[#003B60] text-lg'>Devon Lane</h1>
                                <p className='mt-1 text-[#003B60] text-center text-sm'>Buffalo, NJ</p>
                                <p className='text-[#003B60] text-xl font-semibold'>------------------------</p>
                                <p className='mb-8 text-[#003B60] mt-2 text-center text-sm mx-10'>Sociable on as carriage my position weddings raillery consider. Peculiar trifling absolute and wandered.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center mt-16 gap-x-6'>
                    <div className=' rounded-full border-2 border-blue-950  px-[10px] py-[10px]'>
                        <BsArrowLeft className='font-bold text-2xl text-center flex justify-center items-center'></BsArrowLeft>
                    </div>
                    <div className=' rounded-full border-2 border-[#003B60]  bg-[#003B60]  px-[10px] py-[10px]'>
                        <BsArrowRight className='text-2xl font-bold text-white text-center flex justify-center items-center'></BsArrowRight>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FifthPage;