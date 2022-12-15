
import { useLoaderData } from 'react-router-dom';


const ProjectDetails = () => {

  
    const details = useLoaderData();
    
    console.log(details)
    return (
        <div className='container mx-auto'>
<h2 className='text-3xl font-bold text-center'>{details.name}</h2>
            <h2>{details.details}</h2>
            
        <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
     
          
          <img className='w-full h-full' src={details.img1}/>
          <img className='w-full h-full'  src={details.img2}/>
          <img className='w-full h-full'  src={details.img3}/>
          
        </section>

  </div>
    );
};

export default ProjectDetails;