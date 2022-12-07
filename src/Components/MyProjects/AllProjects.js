import React, { useEffect, useState } from 'react';
import AllProject from './AllProject';

const AllProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect( () => {
        fetch('project.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])

    console.log(projects);

    return (
        <div className='container mx-auto my-20'>
            <h1 className='text-5xl font-bold text-center my-10 text-[#6440FB]'>My <span className='text-[#00FF84]'>Projects</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    projects.map(project => <AllProject key={project.id} project={project}></AllProject>)
                }
            </div>
        </div>
    );
};

export default AllProjects;