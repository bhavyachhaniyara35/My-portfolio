import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import img from "../assets/hand-wave-icon.svg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-[calc(90vh-64px)] container mx-auto px-4 flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="space-y-12 text-center w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text drop-shadow-lg mb-6">
            Hi, I'm Bhavya Chhaniyara
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-medium">
            Full Stack Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <img 
            src={img} 
            alt="Wave" 
            className="w-20 md:w-28 animate-wave cursor-pointer hover:scale-110 transition-transform bg-white rounded-full shadow-lg p-2" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="flex space-x-6">
            <a href="https://github.com/bhavyachhaniyara35" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Github className="w-8 h-8 text-gray-700 hover:text-indigo-600" />
            </a>
            <a href="https://www.linkedin.com/in/chhaniyara-bhavya-92261b317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Linkedin className="w-8 h-8 text-gray-700 hover:text-indigo-600" />
            </a>
            <a href="mailto:chhaniyarabhavya123@gmail.com" className="hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-gray-700 hover:text-indigo-600" />
            </a>
          </div>

          <Link to="/portfolio" className="inline-block mt-8">
            <button className="group flex items-center space-x-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-indigo-200 hover:scale-105 transition-all duration-300">
              <span>View My Work</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}