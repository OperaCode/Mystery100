import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();
   const [headline, setHeadline] = useState("");
   const fullHeadline = "Mystery100";

// HeroText Animation- pause-2000ms,typespeed-100ms
  useEffect(() => {
    let index = 0;
    let interval;

    // start the typing animation
    const startAnimation = () => {
      interval = setInterval(() => {

        // Update the headline state to include one more character --iter.
        setHeadline(fullHeadline.slice(0, index + 1));
        index++;

        if (index === fullHeadline.length) {
          clearInterval(interval);

          setTimeout(() => {
            index = 0;
            setHeadline("");
            startAnimation();
          }, 2000);
        }
      }, 100); // Typing speed: 100ms
    };

    startAnimation(); 

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="min-h-screen bg-linear-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center p-4 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-lg w-full text-center"
      >
        {/* Logo Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-8 mx-auto w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center"
        >
          <span className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
            ?
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
        >
         {headline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed max-w-md mx-auto"
        >
          Crack the code. Guess the secret number between <strong>1 and 100</strong>. 
          Only <span className="text-yellow-300 font-bold">7 attempts</span>. Think you can do it?
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => navigate("/home")}
            className="group relative inline-flex items-center gap-3 bg-white text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 font-bold text-xl px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 text-black font-bold cursor-pointer">Start Game</span>
            <span className="relative z-10">▶</span>

            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-500 translate-x-\[-100%] group-hover:translate-x-full skew-x-12"></div>
          </button>
        </motion.div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 grid grid-cols-3 gap-4 text-sm text-gray-200"
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-3">
            <div className="font-bold text-2xl text-yellow-800">10</div>
            <div className="text-black font-bold">Attempts</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-3">
            <div className="font-bold text-2xl text-green-800">1–100</div>
            <div className="text-black font-bold">Range</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-3">
            <div className="font-bold text-2xl text-pink-800">∞</div>
            <div className="text-black font-bold">Fun</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;