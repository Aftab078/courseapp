import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.webp";
import toast from "react-hot-toast";
import axios from "axios";
import { BACKEND_URL } from "../utils/utils.js";

function Dashboard() {
  const handleLogout = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/admin/logout`, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      localStorage.removeItem("admin");
    } catch (error) {
      console.log("Error in logging out ", error);
      toast.error(error.response.data.errors || "Error in logging out");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar (unchanged) */}
      <div className="w-64 bg-gray-100 p-5">
        <div className="flex items-center flex-col mb-10">
          <img src={logo} alt="Profile" className="rounded-full h-20 w-20" />
          <h2 className="text-lg font-semibold mt-4">I'm Admin</h2>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link to="/admin/our-courses">
            <button className="w-full bg-green-700 hover:bg-green-600 text-white py-2 rounded">
              Our Courses
            </button>
          </Link>
          <Link to="/admin/create-course">
            <button className="w-full bg-orange-500 hover:bg-blue-600 text-white py-2 rounded">
              Create Course
            </button>
          </Link>
          <Link to="/">
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded">
              Home
            </button>
          </Link>
          <Link to="/admin/login">
            <button
              onClick={handleLogout}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded"
            >
              Logout
            </button>
          </Link>
        </nav>
      </div>

      {/* Enhanced Welcome Section */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="text-center animate__animated animate__fadeIn animate__slow">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 animate__animated animate__bounceIn">
            Welcome To Admin!
          </h1>
          
          <div className="inline-block relative">
            <p className="text-xl text-gray-600 mb-8 animate__animated animate__fadeInUp animate__delay-1s">
              Manage your platform with ease
            </p>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-10">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center shadow-lg animate__animated animate__zoomIn animate__delay-1s">
              <span className="text-2xl">📊</span>
            </div>
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center shadow-lg animate__animated animate__zoomIn animate__delay-1-5s">
              <span className="text-2xl">🎓</span>
            </div>
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center shadow-lg animate__animated animate__zoomIn animate__delay-2s">
              <span className="text-2xl">⚙️</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;