import React from 'react';
import pdf from '../../assets/Subir Das(Web Developer Resume).pdf'

const Banner = () => {
    return (
        <div>
              <div className='  min-w-full bg-cover mb-10' style={{backgroundImage: "url('https://i.ibb.co/StBdP63/banner.jpg')" }}>
<div className='flex sm:flex-col md:flex-col lg:flex-row md:mx-auto p-20'>
<div className='w-1/2 sm:w-full md:w-full lg:text-left sm:text-center md:text-center my-auto mx-auto '>
<p className='text-[#2B3340] font-bold text-6xl my-6 '>Hi, I am <span className='text-[#00FF84] text-7xl '>Subir Das</span></p>
<p className='text-[#2B3340] text-3xl mt-10 mb-8'>Web Developer</p>
<div>

<a type='button' href={pdf} download className='px-5 py-4 bg-[#00FF84] hover:bg-[#6440FB] text-black hover:text-white rounded'>Download Resume</a>
</div>
</div>
<div className='w-1/2 mt-6 mx-auto'>
  <img className='w-full' src="https://i.ibb.co/S367WZw/Untitled-1.png" alt="" />
</div>
</div>
</div>
        </div>
    );
};

export default Banner;