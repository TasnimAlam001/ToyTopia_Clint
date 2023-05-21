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
import PrivateRoute from "./PrivateRoute";
import Update from "../components/Update/Update";
import SearchBar from "../Pages/Shared/NavBar/SearchBar";
import ToyDetail from "../components/ToyDetail/ToyDetail";
import NotFound from "../components/NotFound/NotFound";

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
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
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
            path:"/toys/:id",
            element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://assignment-11-server-seven-dusky.vercel.app/toys/${params.id}`)
        },
        {
            path:"/update/:id",
            element:<Update></Update>,
            loader:({params})=>fetch(`https://assignment-11-server-seven-dusky.vercel.app/toy/${params.id}`)

            
        },
        {
            path:'/search',
            element:<SearchBar></SearchBar>
        },
        {
            path:"/toy/:id",
            element:<PrivateRoute><ToyDetail></ToyDetail></PrivateRoute>,
            loader:({params})=>fetch(`https://assignment-11-server-seven-dusky.vercel.app/toy/${params.id}`)
        }
      ]
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
  ]);
  export default router;