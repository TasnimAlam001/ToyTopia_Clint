import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";



const AboutUs = () => {
    return (
        <div className="about-us my-28">
            <div className="my-8">
                <p className="text-4xl text-center my-5 divider">Contact Us</p>
            </div>
  
            <div>
                
                <div className="flex justify-between mb-14 w-1/2 mx-auto">
                    <p className="lg:text-6xl hover:text-red-700"><FaGoogle></FaGoogle></p>
                    <p className="lg:text-6xl hover:text-red-700"><FaYoutube></FaYoutube></p>
                    <p className="lg:text-6xl hover:text-red-700"><FaFacebook></FaFacebook></p>
                    <p className="lg:text-6xl hover:text-red-700"><FaTwitter></FaTwitter></p>
                    <p className="lg:text-6xl hover:text-red-700"><FaLinkedin></FaLinkedin></p>
                    <p className="lg:text-6xl hover:text-red-700"><FaGithub></FaGithub></p>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutUs;