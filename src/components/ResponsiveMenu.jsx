import React from "react";
import { motion } from "framer-motion";
import xsign from "/Multiply.svg";
import { fadeAnimation, fadingAnimation } from "../utils/animations";
const ResponsiveMenu = ({ options, changeMenuState, name }) => {
  var host = window.location.host;

  return (
    <motion.div
      variants={fadingAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className=" w-full h-full absolute p-4 bg-black "
    >
      <div className="relative  w-full h-full flex items-center justify-center">
        <img
          src={xsign}
          onClick={() => {
            changeMenuState(name);
          }}
          className="absolute right-4 top-2 h-[50px] w-[50px] cursor-pointer text-4xl  "
        />

        <ul className="w-fit h-full flex flex-col gap-8 justify-center items-center">
          {options?.map(({ name, img }, key) => (
            <li
              className="text-white text-3xl flex gap-2 justify-start items-center w-full cursor-pointer "
              key={key}
            >
              {img && (
                <img
                  className="w-[50px] h-[50px]"
                  src={"http://" + host + "/" + img}
                  alt=""
                />
              )}
              {name}{" "}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ResponsiveMenu;
