import React, { useEffect, useState } from 'react';
import AllSkill from './AllSkill';

const AllSkills = () => {
    const [skills,setSkills]= useState([])
    useEffect(()=>
    {
        fetch('skills.json')
        .then(res =>res.json())
        .then(data =>setSkills(data))
    },[])
    return (
    <div className='container mx-auto' id='skill'>
        <h1 className='text-5xl font-bold text-center my-10 text-[#6440FB]'>My <span className='text-[#00FF84]'>Skills</span></h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 '>
            {
                skills.map(skill=><AllSkill key={skill.id} skill={skill}></AllSkill>)
            }
        </div>
    </div>
    );
};

export default AllSkills;