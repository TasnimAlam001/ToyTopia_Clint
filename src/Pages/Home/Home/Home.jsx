
import Toys from "../Toys/Toys";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Gallery from "./Gallery";
import TopRated from "./TopRated";


const Home = () => {
    return (
        <div className="mt-10">

            <Banner></Banner>
            <div className="my-28">
                <p className="text-4xl text-center my-5 divider">Photo Gallery</p>
            </div>
            <Gallery></Gallery>
            <div className="mt-32">
                <p className="text-4xl text-center my-5 divider">Action Toy Figures</p>
            </div>
            <Toys></Toys>
            <div className="my-32">
                <p className="text-4xl text-center my-5 divider">Top Rated Figures</p>
            </div>
            <TopRated></TopRated>
            <AboutUs></AboutUs>
            
        </div>
    );
};

export default Home;