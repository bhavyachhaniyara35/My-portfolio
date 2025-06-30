import src from "../assets/drank.jpeg";
import charusat from "../assets/charusat.jpeg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 drop-shadow-lg"
      >
        About Me
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12 place-items-center mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center border-2 border-indigo-100 hover:border-purple-300 transition-all"
        >
          <img
            src={src}
            alt="Bhavya Chhaniyara"
            className="rounded-2xl max-h-80 w-64 object-contain shadow-lg hover:scale-105 transition-transform duration-300 bg-white p-2 mb-4"
          />
          <p className="font-sans font-extrabold text-3xl md:text-4xl text-indigo-600 mb-2">Bhavya Chhaniyara</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6 bg-white rounded-3xl shadow-2xl p-8 border-2 border-purple-100 hover:border-indigo-300 transition-all"
        >
          <p className="text-xl leading-relaxed text-justify text-gray-700">
            I'm Bhavya Chhaniyara, a software developer with expertise in JavaScript and React.js. 
            I'm passionate about building engaging, user-friendly web applications.
            Currently, I'm working on API Rickshaw, a ride-booking platform inspired by Uber, 
            designed to simplify transportation through real-time booking, tracking, and a seamless user experience.
            With a strong focus on the MERN stack (MongoDB, Express.js, React.js, Node.js), 
            I aim to push the boundaries of modern web development through continuous learning, 
            hands-on innovation, and building solutions that make a real impact.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 drop-shadow-lg">
          Education Journey
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-purple-200 transition-shadow duration-300 border-2 border-purple-100 hover:border-indigo-300">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-20"></div>
            <div className="p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                <div className="w-28 h-28 -mt-20 relative hover:scale-105 transition-transform duration-300">
                  <img
                    src={charusat}
                    alt="CHARUSAT University"
                    className="absolute w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-2xl font-bold text-indigo-800 mb-2">
                    CHARUSAT University
                  </h3>
                  <p className="text-lg font-medium text-purple-600 mb-2">
                    B.Tech in Computer Engineering
                  </p>
                  <p className="text-gray-600">2023 - 2027</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
