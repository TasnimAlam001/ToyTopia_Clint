import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Alltoys from "../components/AllToys/Alltoys";
import MyToys from "../components/MyToys/MyToys";
import AddToy from "../components/AddToy/AddToy";
import Blog from "../components/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ToyDetails from "../components/ToyDetails/ToyDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: "allToys",
            element: <Alltoys></Alltoys>
        },
        {
            path: "myToys",
            element: <MyToys></MyToys>
        },
        {
            path: "addToy",
            element: <AddToy></AddToy>
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/toy/:id",
            element:<ToyDetails></ToyDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        }
      ]
    },
  ]);
  export default router;