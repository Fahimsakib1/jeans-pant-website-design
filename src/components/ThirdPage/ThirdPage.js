import React from 'react';
import Pant3 from '../../images/pants/Pant3.png';
import Pant4 from '../../images/pants/Pant4.png';
import Denim from '../../images/pants/Denim3.jpg';
import { BsCheckSquare } from 'react-icons/bs';
import { FiPlay } from 'react-icons/fi';




const ThirdPage = () => {
    return (
        <div className=' relative  bg-sky-100 py-44 mb-20'>

            <div className='-mt-28'>
                <div className=' flex justify-center items-center gap-x-10 mx-56'>
                    <div className=' bg-white rounded-tl-[35px] rounded-br-[35px] w-[297px] h-[240px]'>
                        <div className='flex justify-center mx-auto items-center'>
                            <img className='w-56 mx-auto text-center' src={Pant3} alt="PantImage" />
                        </div>
                        <div className='mx-3 mt-4  rounded-tl-[35px] rounded-br-[35px] w-[240px] h-[60px] bg-[#012A4A] flex items-center justify-center'>
                            <p className=' text-center mx-auto text-[13px] text-white font-bold'>মেনস ডেনিম জিন্স প্যান্ট</p>
                        </div>
                    </div>

                    <div className=' bg-white rounded-tl-[35px] rounded-br-[35px] w-[297px] h-[240px]'>
                        <div className='flex justify-center mx-auto items-center'>
                            <img className='w-56 mx-auto text-center' src={Pant4} alt="PantImage" />
                        </div>
                        <div className='mt-4 mx-3 rounded-tl-[35px] rounded-br-[35px] w-[240px] h-[60px] bg-[#012A4A] flex items-center justify-center'>
                            <p className=' text-[13px] px-5 text-start text-white font-bold'>স্লিম ফিট স্ট্রেচেবল ডেনিম জিন্স ফর মেন</p>
                        </div>
                    </div>

                    <div className=' bg-white rounded-tl-[35px] rounded-br-[35px] w-[297px] h-[240px]'>
                        <div className='flex justify-center mx-auto items-center'>
                            <img className='w-56 mx-auto text-center' src={Pant3} alt="PantImage" />
                        </div>
                        <div className='mt-4 mx-3 rounded-tl-[35px] rounded-br-[35px] w-[240px] h-[60px] bg-[#012A4A] flex items-center justify-center'>
                            <p className=' px-4 text-start text-[13px] text-white font-bold'>সেমি ন্যারো ক্লাসিক ফিট বেসিক ডেনিম জিন্স...</p>
                        </div>
                    </div>

                    <div className=' bg-white rounded-tl-[35px] rounded-br-[35px] w-[297px] h-[240px]'>
                        <div className='flex justify-center mx-auto items-center'>
                            <img className='w-56 mx-auto text-center' src={Pant4} alt="PantImage" />
                        </div>
                        <div className='mt-4 mx-3 rounded-tl-[35px] rounded-br-[35px] w-[240px] h-[60px] bg-[#012A4A] flex items-center justify-center'>
                            <p className=' px-4 text-start text-[13px] text-white font-bold'>সেমি ন্যারো ক্লাসিক ফিট বেসিক ডেনিম জিন্স..</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-12'>
                <p className='text-[#003B60] text-xl font-semibold'>--------------------------------------------------------------------------------------------------------------------------------------</p>
            </div>
            <h1 className='mt-6 text-center text-[#003B60] font-extrabold text-[23px]'>আমাদের ডেনিম ও জিন্সের কিছু বৈশিষ্ট্য</h1>



            <div className='mx-56 mt-10'>
                <div className='mb-4 flex justify-start items-center gap-x-16'>
                    <div className='flex justify-start items-center gap-x-3'>
                        <BsCheckSquare className='text-xl'></BsCheckSquare>
                        <p className='font-semibold text-[15px] text-[#003B60]'>ডেনিম ফেব্রিক ১০০% কটন টুইল বা স্টেচ টুইল দিয়ে তৈরি হয়।</p>
                    </div>
                    <div className='flex justify-start items-center gap-x-3'>
                        <BsCheckSquare className='text-xl'></BsCheckSquare>
                        <p className='font-semibold text-[15px] text-[#003B60]'>সহজে ভাঁজ পড়ে না। ফলে আয়রনের ঝামেলা ছাড়াই পরা যায়।</p>
                    </div>
                </div>

                <div className='mb-4 flex justify-start items-center gap-x-16'>
                    <div className='flex justify-start items-center gap-x-3'>
                        <BsCheckSquare className='text-xl'></BsCheckSquare>
                        <p className='font-semibold text-[15px] text-[#003B60]'>ডেনিম ফেব্রিক দিয়ে তৈরি পোশাক অনেকদিন ব্যবহার করা যায়।</p>
                    </div>
                    <div className='-ml-[18px] flex justify-start items-center gap-x-3'>
                        <BsCheckSquare className='text-xl'></BsCheckSquare>
                        <p className='font-semibold text-[15px] text-[#003B60]'>জিন্স বারবার ধোয়ার প্রয়োজন হয় না।</p>
                    </div>
                </div>

                <div className='mb-4 flex justify-start items-center gap-x-3'>
                    <BsCheckSquare className='text-xl'></BsCheckSquare>
                    <p className='font-semibold text-[15px] text-[#003B60]'>দীর্ঘদিন ব্যবহার করা যায়।</p>
                </div>
            </div>

            


        </div>
    );
};

export default ThirdPage;