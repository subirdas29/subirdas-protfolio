import React from 'react';
import { Link } from 'react-router-dom';

const AllProject = ({project,details}) => {
    const {name, description, image, live_link, github_client, github_server,id} = project;
    return (
        <div className="bg-gray-100 shadow-md border border-gray-200 rounded-lg mb-5">
        
            <img className="rounded p-3 h-64 w-full" src={image} alt=""/>
        
        <div className="p-5">
                <h5 className="text-gray-800 font-semibold text-2xl tracking-tight mb-2">{name}</h5>
            
            <p className="font-normal text-gray-700 mb-3">{description}</p>
        <div className='flex gap-6'>
            <a className="text-white bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href={live_link} target="_blanck">
                Live Website
            </a>
            <a className="text-white bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href={github_client} target="_blanck">
                Github Client
            </a>
            <a className="text-white bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href={github_server} target="_blanck">
                Github Server
            </a>
            
            </div>
            <div className='flex justify-center mt-6'>
            <Link to={`/projectdetails/${id}`}><button className='px-12 py-4 rounded-lg bg-[#FCC858] hover:bg-[#6440FB] text-black hover:text-white'>Details</button></Link>
            </div>
        </div>
    </div>
    );
};

export default AllProject;