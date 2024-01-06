import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>
                <Home></Home>
            </Outlet>
        </div>
    );
};

export default MainLayout;