

const Gallery = () => {


    return (
        <div data-aos="fade-down" className="carousel w-2/3 mx-auto">
            <div id="slide1" className="carousel-item relative w-full mx-auto">
                <img src="https://cdn.shopify.com/s/files/1/1843/8169/products/thumb_1381a9ed-1d59-4a58-b06e-0183c615c924_1024x.jpg?v=1680785938" className="w-full lg:h-[700px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://www.shoppersbd.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/u/superman-man2.jpg" className="w-full lg:h-[700px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://static-01.daraz.com.bd/p/e0d32aa56c82c7fae5bae7ed6fc72ab1.jpg" className="w-full lg:h-[700px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://m.media-amazon.com/images/I/51gBw5g5QKS.jpg" className="w-full lg:h-[700px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src="https://m.media-amazon.com/images/I/6178qjhYHJL.jpg" className="w-full lg:h-[700px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Gallery;