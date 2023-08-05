import React from 'react';
import bgImage from '../../images/bg.jpg';
import Logo1 from '../../images/NewLogo-NoBg.png';
import Pant from '../../images/pants/Pant1-NoBg.png';
import { BsArrowRight } from 'react-icons/bs';
import { FaSquarePhone } from 'react-icons/fa6';


const LandingPage = () => {
    return (
        <div className=''>
            <div className='px-36'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${bgImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden',
                    height: "90vh"
                }}
            >
                <div className=''>
                    <div className='flex justify-start  items-center mt-10'>
                        <div className='flex items-center'>
                            <img className='w-24 h-10' src={Logo1} alt="Logo" />
                            <h1 className='text-2xl font-bold text-[#003B60] font-sans'>Jeans <span className=' text-2xl  text-[#F0E615] font-serif'>Pants</span></h1>
                        </div>
                        <div className='flex items-center gap-x-6 absolute right-0 pr-36'>
                            <div className='p-[6px] rounded-sm bg-yellow-400'></div>
                            <div className='p-[6px] rounded-sm bg-yellow-400'></div>
                            <div className='p-[6px] rounded-sm bg-[#003B60]'></div>
                            <div className='p-[6px] rounded-sm bg-[#003B60]'></div>
                        </div>
                    </div>
                </div>


                <div className='px-4 absolute top-[120px] flex justify-between items-center gap-x-4'>

                    <div className='mt-4'>
                        <div className='rounded-tl-[35px] rounded-br-[35px] w-[387px] h-[65px] bg-[#012A4A] flex items-center justify-center'>
                            <p className='text-white'>পুরুষ এবং মহিলাদের জন্য ডেনিম জিন্স</p>
                        </div>

                        <div className='-ml-3 w-[420px]'>
                            <h1 className='text-[31px] text-[#003B60] font-extrabold font-serif  mt-6'>স্টাইলিশ ন্যারো ফিটিং সেমি স্টিচড ডেনিম জিন্স প্যান্ট.</h1>
                        </div>
                        <div className='absolute top-44 right-[505px] w-[40px] p-5 rounded-full bg-blue-950'></div>
                        <div className='absolute -right-16 mt-8 w-[20px] p-3 rounded-full bg-blue-950'></div>

                        <div className='w-[470px] mt-[20px]'>
                            <h1 className=' text-[#012A4A] text-start'>সর্বমোট মূল্য:</h1>
                            <div className=' mt-1 flex items-center justify-start gap-x-3' >
                                <p className='line-through text-gray-700'>৳ 750.00</p>
                                <p className=' text-[#012A4A] font-extrabold text-[33px]'>৳ 550.00</p>
                            </div>
                        </div>

                        <div className='mt-6 rounded-tl-[35px] rounded-br-[35px] w-[200px] h-[50px] bg-[#F0E615] flex items-center justify-center'>
                            <div className='flex justify-center items-center gap-x-2'>
                                <p className='font-bold text-[#092E67]'>অর্ডার করুন</p>
                                <BsArrowRight className='text-xl font-bold'></BsArrowRight>
                            </div>
                        </div>

                        <div className='w-[450px]'>
                            <h1 className='text-[#012A4A]  mt-8 text-[20px] text-start font-mono'>ঢাকার বাহিরে থেকে অর্ডার করতে চাইলে ১৫০ টাকা অগ্রিম ডেলিভারি পরিশোধ করুন</h1>
                            <div></div>
                        </div>

                    </div>


                    <div className=' -ml-8 -mt-6 '>

                        <div className=' ml-60 border-2 border-b-0 border-blue-800 rounded-full px-4'>
                            <div className=' '>
                                <img className='w-full' src={Pant} alt="PantImage" />
                            </div>
                        </div>



                        <div className='ml-[400px] -mt-20'>
                            <div className='rounded-tl-[35px] rounded-br-[35px] w-[250px] h-[56px] bg-[#F0E615] flex items-center justify-center '>
                                <div className='flex justify-center items-center gap-x-2'>
                                    <FaSquarePhone className='text-4xl'></FaSquarePhone>
                                    <p className='text-[27px] font-bold text-[#092E67]'>01894844452</p>
                                </div>
                            </div>
                            <div className='-ml-12 rounded-tl-[35px] rounded-br-[35px] w-[240px] h-[43px] bg-[#012A4A] flex items-center justify-center'>
                                <p className='text-white'>সরাসরি কিনতে ফোন করুন</p>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

            <div className='mt-16 px-60 mb-20'>
                <p className='text-[#003B60] text-[18px] font-medium text-start'>
                    আমাদের এই ডেনিম ফেব্রিক ১০০% কটন টুইল বা স্টেচ টুইল দিয়ে তৈরি হয়। এই ফেব্রিক দিয়ে তৈরি হয় শার্ট, জিন্স, ব্যাগ, জ্যাকেটসহ আরও অনেক কিছু।  নিয়মিত ব্যবহারের জন্য জিন্স প্যান্টের কোনো তুলনা হয় না। জিন্স তৈরিতে ব্যবহার করা হয় ডেনিম কটন যা সম্পূর্ণ সুতি। ছেলেদের জিন্স প্যান্টের দাম ও ডিজাইন দেখে কিনুন বাংলাদেশের অন্যতম সেরা অনলাইন শপ অফুরন্ত থেকে।
                </p>
            </div>




        </div>
    );
};

export default LandingPage;