import React from 'react';
import PantBackground from '../../images/pants/Denim6.jpg';
import Dress from '../../images/dress/RedDress.jpg';
import Dress1 from '../../images/dress/RedDress1.jpg';
import { BsCheckCircleFill, BsArrowRight } from 'react-icons/bs';
import { BiCheckbox } from 'react-icons/bi';
import Logo1 from '../../images/NewLogo-NoBg.png';







const SixthPage = () => {
    return (
        <div>
            <div
                className='mb-20 '
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${PantBackground})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden',
                    height: "105vh"
                }}>

                <h1 className='mt-8 text-center text-white font-extrabold text-[28px]'>অর্ডার করতে নিচের ফর্মটি পূরণ করে সাবমিট করুন !</h1>

                <div className='mx-56 flex justify-center gap-x-28'>
                    <div>
                        <h1 className='text-start mt-8 mb-3 text-xl font-bold text-white'>Billing details</h1>
                        <form>
                            <input type="text" placeholder="আপনার নাম লিখুন *" className="input  border-white bg-transparent input-bordered text-white rounded-sm w-full mb-8" />
                            <input type="text" placeholder="আপনার মোবাইল নাম্বার লিখুন *" className="input  border-white bg-transparent input-bordered text-white rounded-sm w-full mb-8" />
                            <input type="text" placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন *" className="input  border-white bg-transparent input-bordered text-white rounded-sm w-full" />
                        </form>

                        <div className=' mt-12 rounded-tl-[25px] bg-white w-[556px] h-[90px]'>
                            <p className='text-start px-6 text-xl font-bold text-black'>Payment</p>
                            <div className='px-6 mt-3 flex justify-start items-center gap-x-3'>
                                <BsCheckCircleFill className=' text-yellow-500 border-0 text-2xl'></BsCheckCircleFill>
                                <p className='font-semibold text-[15px] text-[#080422]'>ক্যাশ অন ডেলিভারি</p>
                            </div>
                        </div>
                        <div className=' w-[556px] '>
                            <p className='py-4 rounded-br-[32px] text-white text-start px-6 text-sm font-semibold bg-[#003B60]'>Pay with cash upon delivery.</p>
                        </div>
                    </div>


                    <div>
                        <h1 className='text-start mt-6 mb-3 text-xl font-bold text-white'>Your order</h1>
                        <div className='w-[500px] h-[390px] border-2 border-white rounded-sm'>
                            <div className='mt-3 flex justify-between px-10 items-center'>
                                <p className='text-white text-lg font-sans'>Product</p>
                                <p className='text-white text-lg font-sans'>Subtotal</p>
                            </div>
                            <hr className='mt-2' />

                            <div className='flex justify-around items-center'>
                                <div className='flex items-center gap-x-3'>
                                    <div className="mt-6 avatar">
                                        <div className="w-24 rounded">
                                            <img src={Dress1} alt='DressImage' />
                                        </div>
                                    </div>
                                    <div className='mt-4 w-[150px]'>
                                        <p className='text-start text-sm text-white '>Flower Of Story Men’s Perfume Set Boss</p>
                                    </div>
                                </div>

                                <div className='flex justify-between items-center gap-x-6'>
                                    <p className='text-lg text-white'>x1</p>
                                    <p className='text-lg text-white'>৳ 1,690.00</p>
                                </div>
                            </div>
                            <hr className='mt-5' />

                            <div className='mx-8 mt-3 flex justify-between items-center gap-x-6'>
                                <p className='text-white text-lg font-sans'>Subtotal</p>
                                <p className='text-lg text-white'>৳ 1,690.00</p>
                            </div>

                            <div className=' mt-3 flex justify-between items-center gap-x-6'>
                                <p className='mx-8 text-white text-lg font-sans'>Shipping</p>
                                <div>
                                    <div className='mr-2 px-6 flex justify-end items-center gap-x-3'>
                                        <BsCheckCircleFill className=' text-yellow-500 border-0 text-2xl'></BsCheckCircleFill>
                                        <p className='font-semibold text-[15px] text-white'>ঢাকার মধ্যে </p>
                                    </div>

                                    <div className=' mr-2 px-6 mt-2 flex justify-end items-center gap-x-3'>
                                        <BiCheckbox className=' text-yellow-500 border-0 rounded-full text-4xl'></BiCheckbox>
                                        <p className='font-semibold text-[15px] text-white'>ঢাকার বাহিরে</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-4' />

                            <div className='mx-8 mt-3 flex justify-between items-center gap-x-6'>
                                <p className='text-white text-xl font-sans font-semibold'>Total</p>
                                <p className='text-xl text-white font-semibold'>৳ 1,690.00</p>
                            </div>

                        </div>

                        <div className='flex justify-center items-center'>
                            <div className='mt-6 rounded-tl-[35px] rounded-br-[35px] w-[462px] h-[76px] bg-[#F0E615] flex items-center justify-center'>
                                <div className='flex justify-center items-center gap-x-2'>
                                    <p className=' text-[#092E67] font-extrabold text-[21px]'>অর্ডার করুন</p>
                                    <BsArrowRight className='text-[#092E67]  text-xl font-extrabold text-[21px]'></BsArrowRight>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className=' absolute ml-36 mx-auto mt-10 rounded-tl-[25px] rounded-br-[25px] w-[1238px] h-[185px] bg-[#003B60]'>

                    <div className='mt-6 flex justify-around items-center mx-10'>
                        <div>
                            <h1 className='mt-4 text-start text-white font-bold text-xl'>প্রয়োজনীয় লিংক</h1>
                            <div className='border-b-2 border-b-[#F0E615] w-[40px] mt-3 ' />
                            <h1 className='text-white text-start text-sm mt-4 mb-2'>প্রাইভেসী পলিসি</h1>
                            <h1 className='text-white text-start text-sm'>শর্তাবলী</h1>
                        </div>

                        <div>
                            <div className='mx-auto flex justify-center'>
                                <img className='w-32 h-24' src={Logo1} alt="Logo" />
                            </div>
                            <h1 className='text-center text-3xl font-bold text-white font-sans'>Jeans <span className=' text-center text-3xl  text-[#F0E615] font-serif'>Pants</span></h1>
                        </div>

                        <div>
                            <h1 className='text-start text-[#F0E615] font-bold text-xl'>অর্ডার পেতে কল করুন এই নাম্বারে</h1>
                            <h1 className='text-white text-start font-bold text-3xl'>+8801799733234</h1>
                        </div>

                    </div>

                </div>






            </div>
        </div>
    );
};

export default SixthPage;