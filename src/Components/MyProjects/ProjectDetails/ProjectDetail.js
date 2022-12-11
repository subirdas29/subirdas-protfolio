import React from 'react';

const ProjectDetail = ({project}) => {
    const {name,image,admin_image,buyer_img,seller_img,all_category,my_review,courses_img,course,details}= project
    return (
        <div>
            <h2>{name}</h2>
            <img/>{image}
            <p>home page</p>
            <img/>{admin_image}
            <img/>{buyer_img}
            <img/>{seller_img}
            <img/>{all_category}
            <img/>{my_review}
            <img/>{courses_img}
            <img/>{course}
            <p>{details}</p>

        </div>
    );
};

export default ProjectDetail;