import React from "react";
import accounticon from "../assets/MaleUser.svg";
import shopingbag from "../assets/ShoppingBag.svg";
import gear from "../assets/Engineering.svg";
import {  motion } from "framer-motion";
import { fadeAnimation, parentfadein } from "../utils/animations";

const Header = ({ changeMenuState }) => {
  return (
    <div className="w-full h-[80px] flex justify-between py-2 items-end">
      <motion.div
        variants={fadeAnimation}
        initial="fadeout"
        animate="fadein"
        transition={{ delay: 1 }}
        onClick={() => {
          changeMenuState("settings");
        }}
        className="h-[50px] w-[50px] bg-transparent flex flex-col gap-1 justify-center items-center cursor-pointer md:hidden"
      >
        <div className="w-[70%] h-1 bg-white  "></div>
        <div className="w-[70%] h-1 bg-white  "></div>
        <div className="w-[70%] h-1 bg-white  "></div>
      </motion.div>
      <motion.span
        variants={fadeAnimation}
        initial="fadeout"
        animate="fadein"
        transition={{ delay: 0.1 }}
        className="lg:mr-36 flex mr-0 "
      >
        <h1 className="text-white text-4xl font-bold ">Food</h1>
        <h1 className="text-[#F2B12F] text-4xl font-bold">ie</h1>
      </motion.span>
      <motion.ul
        variants={parentfadein}
        initial="fadeout"
        animate="fadein"
        className="md:flex justify-center gap-4 items-center lg:gap-16 h-full hidden"
      >
        <motion.li
          variants={fadeAnimation}
          initial="fadeout"
          animate="fadein"
          transition={{ delay: 0.2 }}
          className="text-white hover:text-[#F2B12F] text-lg font-medium mt-5 cursor-pointer "
        >
          Home
        </motion.li>
        <motion.li
          initial={fadeAnimation.fadeout}
          animate={fadeAnimation.fadein}
          transition={{ delay: 0.4 }}
          className="text-white text-lg hover:text-[#F2B12F] font-medium mt-5 cursor-pointer "
        >
          Menu
        </motion.li>
        <motion.li
          variants={fadeAnimation}
          initial="fadeout"
          animate="fadein"
          transition={{ delay: 0.6 }}
          className="text-white text-lg font-medium mt-5 cursor-pointer flex gap-1 items-center group"
        >
          <h1 className="group-hover:text-[#F2B12F]">About</h1>{" "}
          <h1 className="group-hover:text-[#1E222D]">Us</h1>
        </motion.li>
        <motion.li
          variants={fadeAnimation}
          initial="fadeout"
          animate="fadein"
          transition={{ delay: 0.8 }}
          className="text-white hover:text-[#1E222D] text-lg font-medium mt-5 cursor-pointer "
        >
          Contact
        </motion.li>
      </motion.ul>
      <motion.ul className="lg:flex justify-center items-center  hidden">
        <motion.img
          variants={fadeAnimation}
          initial="fadeout"
          animate="fadein"
          transition={{ delay: 1 }}
          className="h-[35px] contrast-[0.8]  hover:contrast-100 cursor-pointer object-contain mr-[10px]"
          src={accounticon}
          alt=""
        />
        <motion.img
          variants={fadeAnimation}
          initial="fadeout"
          animate="fadein"
          transition={{ delay: 1.2 }}
          className="h-[35px] contrast-[0.8]  hover:contrast-100 cursor-pointer object-contain "
          src={shopingbag}
          alt=""
        />
        <motion.div
          variants={fadeAnimation}
          initial="fadeout"
          animate="fadein"
          transition={{ delay: 1.4 }}
          className="h-[50px] w-[50px] flex   px-0 contrast-[0.8]  hover:contrast-100  cursor-pointer"
        >
          <div className="flex flex-col justify-center h-full gap-[6px] items-end w-[80%]">
            <div className="bg-white w-[80%] h-1"></div>
            <div className="bg-white w-[60%] h-1"></div>
            <div className="bg-white w-[40%] h-1"></div>
          </div>
        </motion.div>
      </motion.ul>

      <motion.img
        variants={fadeAnimation}
        initial="fadeout"
        animate="fadein"
        transition={{ delay: 1 }}
        onClick={() => {
          changeMenuState("navigation");
        }}
        className="z-5 h-[50px] w-[50px] text-5xl bg-transparent flex flex-col gap-1 justify-center items-center cursor-pointer lg:hidden contrast-[0.8]  hover:contrast-100"
        src={gear}
        alt=""
      />
    </div>
  );
};

export default Header;
