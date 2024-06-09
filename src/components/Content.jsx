import React from "react";
import plate from "../assets/plate.svg";
import { delay, motion } from "framer-motion";
import { fadeAnimation } from "../utils/animations";
const Content = () => {
  return (
    <div className="w-full  py-4 flex flex-col gap-4 md:flex-row justify-center items-center ">
      <div className="w-full md:w-1/2 flex flex-col gap-8 justify-center    ">
        <motion.span
          variants={fadeAnimation}
          initial="fadeout"
          animate="fadein"
          transition={{ delay: 1.5 }}
          className="w-full flex flex-wrap gap-1"
        >
          <h1 className="text-6xl text-white font-bold">Have a Taste of </h1>
          <h1 className="text-6xl text-white font-bold"> Good</h1>
          <h1 className="text-6xl text-[#F2B12F] font-bold">Food</h1>
        </motion.span>
        <motion.p
          variants={fadeAnimation}
          initial="fadeout"
          animate="fadein"
          transition={{ delay: 1.6 }}
          className="text-xl text-white "
        >
          our job is to provide you with fresh and delicious food within minutes
          of request
        </motion.p>
        <motion.div
          variants={fadeAnimation}
          initial="fadeout"
          animate="fadein"
          transition={{ delay: 1.7 }}
          className=" self-start  flex items-center justify-center cursor-pointer "
        >
          <div className="bg-[#F2B12F] rounded-[100%_0%_0%_100%_/_100%_100%_0%_0%] w-[50px] h-[50px]"></div>
          <div className=" bg-[#F2B12F] text-lg text-white font-bold flex items-center justify-center w-[150px] h-[50px]">
            Order Now &#x1F872;
          </div>
          <div className="bg-[#F2B12F] rounded-[0%_100%_100%_0%_/_100%_0%_100%_0%] w-[50px] h-[50px]"></div>
        </motion.div>
      </div>
      <motion.div
        variants={fadeAnimation}
        initial="fadeout"
        animate="fadein"
        transition={{ delay: 1.7 }}
        className="w-full md:w-1/2 flex    "
      >
        <img className="w-full h-[200px] md:h-[90%] " src={plate} alt="" />
      </motion.div>
    </div>
  );
};

export default Content;
