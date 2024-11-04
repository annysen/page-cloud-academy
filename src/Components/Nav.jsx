import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-around items-center ">
      <NavLink to="/">
        <h1 className="text-2xl md:text-5xl text-violet-900 font-bold">
          Page Cloud
        </h1>
      </NavLink>

      <div className=" hidden md:flex justify-between items-center">
        <NavLink className="mx-5 text-gray-600" to="/">
          Home
        </NavLink>
        <NavLink className="mx-5 text-gray-600" to="/training">
          <button className="btn-primary hidden md:flex"> Training</button>
        </NavLink>
        <NavLink className="mx-5 text-gray-600" to="/services ">
          Services
        </NavLink>
        <NavLink className="mx-5 text-gray-600" to="/faq">
          FAQ
        </NavLink>
        <NavLink className="mx-5 text-gray-600" to="/contact">
          Contact
        </NavLink>
      </div>

      {/* <button className="btn-primary hidden md:flex">Star Applying</button> */}

      {/* mobile nav  */}

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Bars3BottomRightIcon className="h-6 w-6 text-violet-500" />
        </button>

        {isOpen && (
          <div className="absolute top-0 left-0 w-full z-10">
            <div className="p-5 bg-violet-500 ">
              <div className=" flex items-center justify-between mb-4">
                <Link className="text-white font-bold text-2xl">
                  Page Cloud
                </Link>
                <button onClick={() => setIsOpen(!isOpen)}>
                  <XMarkIcon className="h-6 w-6 mr-9 text-white"></XMarkIcon>
                </button>
              </div>
              <nav className=" flex flex-col gap-5">
                <NavLink className=" text-white" to="/training">
                  Training
                </NavLink>

                <NavLink className=" text-white" to="/services ">
                  Services
                </NavLink>
                <NavLink className=" text-white" to="/faq">
                  FAQ
                </NavLink>
                <NavLink className=" text-white" to="/contact">
                  Contact
                </NavLink>
                {/* <div className=" justify-center">
                  <button className="  btn-primary">Star Applying</button>
                </div> */}
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
