import React from 'react';
import Denim from '../../images/pants/Denim3.jpg';
import Pocket from '../../images/pants/Pocket.jpg';
import { FiPlay } from 'react-icons/fi';
import { BsArrowRight  } from 'react-icons/bs';



const ForthPage = () => {
    return (
        <div className='relative'>
            <div
                className=' -mt-44 rounded-tl-[125px] rounded-br-[125px]  mx-36'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${Denim})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden',
                    height: "80vh"
                }}>
                <div className='py-60'>
                    <div className='mx-auto my-auto w-[60px] px-11 py-2 flex justify-center items-center bg-gray-400  rounded-full'>
                        <div className='flex justify-center items-center bg-[#F0E615] px-3 py-4 rounded-full'>
                            <FiPlay className='text-4xl ml-2 text-gray-500'></FiPlay>

                        </div>
                    </div>
                </div>
            </div>

            <h1 className='mx-56 text-center font-extrabold text-[#003B60] mt-20 mb-10 text-[28px]'>লেনদেনকালে কিভাবে নিরাপদ থাকবেন তার কিছু নির্দেশনাবলী</h1>

            <div className='mb-6 px-4 mx-auto flex justify-center items-center border-2 border-[#003B60]  w-[750px] h-[42px] text-center'>
                <p className='text-[#003B60] text-[17px]'>প্রোডাক্টটি ভালোভাবে যাচাই করে নিন এবং পুরোপুরি সন্তুষ্ট হলে তারপর দাম পরিশোধ করুন।</p>
            </div>

            <div className='mb-6 px-4 mx-auto flex justify-center items-center border-2 border-[#003B60]  w-[402px] h-[42px] text-center'>
                <p className='text-[#003B60] text-[17px]'>প্রোডাক্ট ও অর্থ দুটোই একই সময় লেনদেন করুন</p>
            </div>

            <div>
                <div className=' relative mt-16 rounded-tl-[125px] rounded-br-[125px]  mx-[470px]'
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url(${Pocket})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        overflow: 'hidden',
                        height: "60vh"
                    }}>
                    <div className='mt-40'>
                        <h1 className='flex justify-center items-center my-auto mx-auto text-center font-bold text-white text-[25px]'>মুল্য-550.00 টাকা</h1>
                        <h1 className='mx-auto text-center  text-white text-[19px]'>সারা দেশে ফ্রি হোম ডেলিভারি</h1>
                    </div>

                    <div className='mt-6 flex justify-center items-center'>
                        <div className=' rounded-tl-[35px] rounded-br-[35px] w-[270px] h-[70px] bg-[#F0E615] flex items-center justify-center'>
                            <div className='flex justify-center items-center gap-x-2'>
                                <p className=' text-[#092E67] text-[20px] font-extrabold'>অর্ডার করুন</p>
                                <BsArrowRight className='text-[#092E67]  text-[24px] font-extrabold'></BsArrowRight>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default ForthPage;