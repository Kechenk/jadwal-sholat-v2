import React from "react";

const Card = () => {
  return (
    <>
      <div className="flex-col mx-auto items-center py-40">
        <div className="container bg-[#081dnc] border ml-12 mr-12 mx-auto flex rounded-xl justify-between gap-4">
          <div className="lg:text-4xl md:text-2xl xs:text-xl font-bold mx-auto text-center">
            <a href="">
              <img src="/img/logo.svg" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex-col mx-auto items-center py-4">
        <div className="container bg-slate-600 mx-auto flex rounded-xl justify-between gap-4">
          <div className="lg:text-4xl md:text-2xl xs:text-xl font-bold text-center">
            <span className="">
              <a href="">
                <img src="/img/logo.svg" className="ml-2 h-36" />
              </a>
            </span>
          </div>
          <nav className="flex items-center gap-10 bg-slate-200 border-black border-b-4 border-t-2 rounded-xl">
            <span className="lg:text-4xl md:text-2xl xs:text-xl font-bold text-center ">
              満月の光町の名前は
              <img
                // src="https://www.islamicfinder.org/static/live188/themes/theme24/images/athan-card.webp"
                className="mt-12"
              />
            </span>
          </nav>
        </div>
      </div>

      {/* <div className="flex-col mx-auto items-center py-4">
        <div className="container bg-slate-600 mx-auto flex rounded-xl justify-between gap-4">
          <span className="lg:text-4xl md:text-2xl xs:text-xl font-bold text-center">
            Cahaya Bebek Purnama
            <img
              src="https://www.islamicfinder.org/static/live188/themes/theme24/images/athan-card.webp"
              className=""
            />
          </span>
          <nav className="flex items-center gap-10 bg-slate-200">
            <span className="lg:text-4xl md:text-2xl xs:text-xl font-bold text-center">
              満月の光町の名前は
              <img
                src="https://www.islamicfinder.org/static/live188/themes/theme24/images/athan-card.webp"
                className=""
              />
            </span>
          </nav>
        </div>
      </div> */}
    </>
  );
};

export default Card;
