
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";

import ProjectDetails from "../Components/MyProjects/ProjectDetails/ProjectDetails";

import Main from "../Layout/Main";



export const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[{
        path:'/',
        element:<Home></Home>
    },
    {
      path:'/projectdetails/:id',
      element:<ProjectDetails></ProjectDetails>,
      loader: async ({params})=>{
        return fetch('project.json')
        .then(res=>res.json())
        .then(data=>{
          const project = data.find(p=>p.id===params.id);
          return project;
        }
      )
    }
  },
]
},
])