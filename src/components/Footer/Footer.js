import React from 'react';
import DenimPant from '../../images/pants/DenimFold1.jpg';
import facebook from '../../images/socialMedia/facebook.png';
import instagram from '../../images/socialMedia/instagram.png';
import youtube from '../../images/socialMedia/youtube.png';





const Footer = () => {
    return (
        <div>
            <div
                className='-mt-20 mb-20 '
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0.0, 0, 0.1), rgba(0, 0, 0, 0.95)), url(${DenimPant})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden',
                    height: "45vh"
                }}>

                <div className='flex justify-center my-auto items-center gap-x-6 mt-40'>

                    <div className=''>
                        <a href='https://www.facebook.com/fahim.sakib.5' target='blank' className='tooltip' data-tip='Facebook'>
                            <img className='w-[56px] rounded-md' src={facebook} alt="FacebookImage" />
                        </a>
                    </div>

                    <div className=''>
                        <a href='https://www.instagram.com/i_fahiim/' target='blank' className='tooltip' data-tip='Instagram'>
                            <img className='w-[56px] rounded-md' src={instagram} alt="InstagramImage" />
                        </a>
                    </div>

                    <div className=''>
                        <a href='https://www.youtube.com/' target='blank' className='tooltip' data-tip='Youtube'>
                            <img className='w-[56px] rounded-md' src={youtube} alt="YoutubeImage" />
                        </a>
                    </div>

                </div>

                <p className='text-center text-white  mt-10'>System Development by  <span className='underline text-xl text-[#FFE663]'><a href='https://fahim-faysal-portfolio.netlify.app/' className='tooltip' data-tip='Visit My Portfolio' target='blank'>Fahim Faysal</a></span></p>

            </div>
        </div>
    );
};

export default Footer;