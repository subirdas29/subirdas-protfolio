import React from 'react';
import pdf from '../../assets/Subir Das (MainResume).pdf'

const Banner = () => {
    return (
        <div>
              <div className=' relative top-[-100px] min-w-full bg-cover mb-10' style={{backgroundImage: "url('https://i.ibb.co/8crzZn7/hero-bg.jpg')"}}>
<div className='flex sm:flex-col md:flex-col lg:flex-row md:mx-auto p-20'>
<div className='w-1/2 sm:w-full md:w-full lg:text-left sm:text-center md:text-center my-auto mx-auto '>
<p className='text-white font-bold text-6xl my-6 '>Hi, I am <span className='text-[#FCC858] text-7xl '>Subir Das</span></p>
<p className='text-white text-3xl mt-10 mb-8'>Web Developer</p>
<div>

<a type='button' href={pdf} download className='px-5 py-4 bg-[#FCC858] hover:bg-[#6440FB] text-black hover:text-white rounded'>Download Resume</a>
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