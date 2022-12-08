import React from 'react';

const AllSkill = ({skill}) => {
    const {name,logo} = skill
    return (
        <div>
    <div className="card mx-auto bg-base-400 shadow-xl">
  <div className="card-body">
    <img alt='' className="w-20 h-20 mx-auto"src={logo}/>
    <p className='text-center font-bold text-2xl'>{name}</p>
  </div>
 </div>
</div>
    );
};

export default AllSkill;