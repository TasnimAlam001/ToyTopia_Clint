import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Alltoys from "../components/AllToys/Alltoys";
import MyToys from "../components/MyToys/MyToys";
import AddToy from "../components/AddToy/AddToy";
import Blog from "../components/Blog/Blog";

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
        }
      ]
    },
  ]);
  export default router;