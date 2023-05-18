import logo from "../../../../banner/banner.webp"

const Banner = () => {
    return (
        <div className="carousel-item relative w-full ">
            <img src={logo} className="w-full rounded-lg h-5/6" />
            <div className="absolute  transform -translate-y-1/2 left-5 right-5 top-1/2 space-y-6 lg:ml-10">
                <h2 className="card-title font-mono lg:text-7xl font-bold"><span className="text-red-700"> Action </span> Toys </h2>
                <p className="lg:text-2xl font-mono font-bold">Let`s enjoy ToyTopia`s new Action  <br /> <span className="text-red-700">& Anime Toys  collection, a fresh</span> <br /> and fire collection. </p>
                <div className="card-actions">
                <button className="btn btn-outline lg:px-20 text-red-700">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;