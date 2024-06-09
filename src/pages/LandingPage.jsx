import React, { useEffect, useState } from "react";
import Containerlayout from "../components/Containerlayout";
import Mainlayout from "../components/Mainlayout";
import Header from "../components/Header";
import Content from "../components/Content";
import ResponsiveMenu from "../components/ResponsiveMenu";
import { AnimatePresence } from "framer-motion";

const LandingPage = () => {
  const navigation = [
    {
      name: "Home",
    },
    {
      name: "Menu",
    },
    {
      name: "About Us",
    },
    {
      name: "Contact",
    },
  ];
  const settings = [
    {
      name: "Account",
      img: "Engineering.svg",
    },
    {
      name: "Cart",
      img: "ShoppingBag.svg",
    },
    {
      name: "Other",
    },
  ];
  const [menus, setMenuStates] = useState({
    navigation: false,
    settings: false,
  });
  useEffect(() => {
    console.table(menus);
  }, [menus]);
  const changeMenuState = (menuName) => {
    setMenuStates((prevStates) => ({
      ...prevStates,
      [menuName]: !prevStates[menuName],
    }));
  };
  return (
    <>
      <Containerlayout>
        <div className="w-full   min-h-screen h-full  flex items-center bg-black justify-center  ">
          <Mainlayout>
            <div className="w-full overflow-hidden   relative flex rounded-lg">
              <div className=" fixed left-0 w-[100%] md:w-[60%] bg-[#1E222D] h-full min-h-screen"></div>
              <div className=" fixed right-0 w-[40%] hidden md:flex bg-[#F2B12F]   min-h-screen"></div>
              <div className="z-20 w-full flex flex-col items-center gap-16  bg-transparent md:px-32 sm:px-10 px-5">
                <Header {...{ changeMenuState }} />
                <Content />
                <AnimatePresence>
                  {menus.navigation && (
                    <ResponsiveMenu
                      {...{
                        changeMenuState,
                        name: "navigation",
                        options: navigation,
                      }}
                    />
                  )}
                  {menus.settings && (
                    <ResponsiveMenu
                      {...{
                        changeMenuState,
                        name: "settings",
                        options: settings,
                      }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Mainlayout>
        </div>
      </Containerlayout>
    </>
  );
};

export default LandingPage;
