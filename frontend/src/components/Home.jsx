import React, { useEffect, useState } from "react";
import logo from "../../public/logo.webp";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../utils/utils.js";
function Home() {
  const [courses, setCourses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // token
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/course/courses`, {
          withCredentials: true,
        });
        console.log(response.data.courses);
        setCourses(response.data.courses);
      } catch (error) {
        console.log("error in fetchCourses ", error);
      } 
    };
    fetchCourses();
  }, []);

  // logout
  const handleLogout = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/user/logout`, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      localStorage.removeItem("user");
      setIsLoggedIn(false);
    } catch (error) {
      console.log("Error in logging out ", error);
      toast.error(error.response.data.errors || "Error in logging out");
    }
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-black bg-emerald-400 ">
      <div className="h-[1250px] md:h-[1050px] text-white container mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between p-6 ">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt=""
              className="w-7 h-7 md:w-10 md:h-10 rounded-full"
            />
            <h1 className="md:text-2xl text-orange-500 font-bold">
            Thinkverse 
            </h1>
          </div>
          <div className="space-x-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to={"/login"}
                  className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded"
                >
                  Login
                </Link>
                <Link
                  to={"/signup"}
                  className="bg-transparent text-white text-xs md:text-lg md:py-2 md:px-4 p-2 border border-white rounded"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </header>

        {/* Main section */}
        <section className="text-center py-20">
          <h1 className="text-4xl font-semibold text-orange-500">
          Thinkverse 
          </h1>

          <br />
          <p className="whitespace-normal">
          Level up your skills through courses built by professionals.
          </p>
          <div className="space-x-4 mt-8">
            <Link
              to={"/courses"}
              className="bg-emerald-400 text-white p-2 md:py-3 md:px-6 rounded font-semibold hover:bg-white duration-300 hover:text-black"
            >
              Explore courses
            </Link>
            <Link
              to={"/videos"}
              className="bg-white text-black  p-2 md:py-3 md:px-6 rounded font-semibold hover:bg-green-500 duration-300 hover:text-white"
            >
              Courses videos
            </Link>
          </div>
        </section>
        <section className="p-10">
          <Slider className="" {...settings}>
            {courses.map((course) => (
              <div key={course._id} className="p-4">
                <div className="relative flex-shrink-0 w-92 transition-transform duration-300 transform hover:scale-105">
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      className="h-32 w-full object-contain"
                      src={course.image?.url}
                      alt=""
                    />
                    <div className="p-6 text-center">
                      <h2 className="text-xl font-bold text-white">
                        {course.title}
                      </h2>
                      <Link to={`/buy/${course._id}`} className="mt-8 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-blue-500 duration-300">
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        <hr />
 <footer className="bg-gradient-to-r bg-emerald-400 to-cyan-500 text-white py-10 px-6 rounded-t-2xl">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* About */}
    <div>
      <h2 className="text-xl font-bold mb-2 text-white">About Thinkverse</h2>
      <p className="text-sm leading-relaxed text-gray-300">
        Sharpen your future with expert-led online learning. Join 50,000+ learners advancing their careers with real-world skills, guided by our passionate educators.
      </p>
    </div>

    {/* Contact / Socials */}
    <div>
      <h2 className="text-xl font-bold mb-2 text-white">Contact Us</h2>
      <p>Email: developerindie9@gmail.com</p>
      <p>Phone: +91 ********** </p>
      <div className="flex mt-4 space-x-4">
        <a href="https://www.instagram.com/md_aftab__703?igsh=MXFqZ3d3dDBoMG1pYw=="><FaInstagram className="text-2xl hover:text-pink-600" /></a>
        <a href="https://x.com/Aftabroy587?t=mc-epOQhc6pd82OHOSodMQ&s=09"><FaTwitter className="text-2xl hover:text-blue-400" /></a>
        <a href="https://www.linkedin.com/in/md-aftab-ansari-31a71a237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin  className="text-2xl hover:text-blue-500" /></a>
        
      </div>
    </div>

    {/* Newsletter */}
    <div>
      <h2 className="text-xl font-bold mb-2 text-white">Newsletter</h2>
      <p className="text-sm text-gray-300 mb-3">Stay updated with latest courses & news</p>
      <form className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-3 py-2 rounded-l bg-white text-black w-full"
        />
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r">
          Subscribe
        </button>
      </form>
    </div>
  </div>

  <div className="text-center text-sm text-gray-300 mt-10 border-t border-white/30 pt-4">
    © 2025 Thinkverse. All rights reserved.
  </div>
 </footer>


      </div>
    </div>
  );
}

export default Home;