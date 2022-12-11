import React, { useEffect, useState } from 'react';
import ProjectDetail from './ProjectDetail';

const ProjectDetails = () => {

    const [projectsDetails, setProjectsDetails] = useState([]);

    useEffect( () => {
        fetch('project.json')
        .then(res => res.json())
        .then(data => setProjectsDetails(data))
    }, [])
    return (
        <div>

                {
                    projectsDetails.map(project => <ProjectDetail key={project.id} project={project}></ProjectDetail>)
                }
       
  </div>
    );
};

export default ProjectDetails;