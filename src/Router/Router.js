import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import AllProject from "../Components/MyProjects/AllProject";
import AllProjects from "../Components/MyProjects/AllProjects";
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
      element:<AllProjects></AllProjects>,
      loader:({params})=>fetch(`http://localhost:3000/projectdetails/${params.id}`)
  },
]
},
])