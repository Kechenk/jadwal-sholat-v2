import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="py-4 fixed top-0 inset-x-0 bg-slate-200">
        <div className="container flex justify-between items-center">
          <span className="ml-12 font-bold text-md">
            <img src="img/mesjid.webp" alt="" className="size-12" />
          </span>
          <nav className="flex items-center">
            {/* <a href="" className="border py-3 px-6 rounded-full border-black">yah
            </a> */}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
