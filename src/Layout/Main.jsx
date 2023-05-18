import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div className="w-5/6 mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;