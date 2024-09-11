import React, { useState, useEffect } from "react";

const cities = ["Kaupaten Lubuk Linggau", "Kota Surabaya"];

const Card2 = () => {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
      }, 750);

      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex-col mx-auto py-36">
        <div className="container bg-slate-600 rounded-s-full mx-auto flex justify-items-center gap-4">
          <div className="xl:text-2xl font-bold place-content-center text-center">
            <span className="container justify-center">
              <main className="grid">
                <div className="container flex flex-col">
                  <div className="flex gap-10">
                    <div className="flex items-center bg-zinc-100 py-2 pl-12 pr-24 rounded-full">
                      <img
                        src="/img/icon/Shalat-Shubuh.svg"
                        className="lg:h-20 xs:h-20 md:h-14 sm:h-14"
                        alt="Prayer time icon"
                      />
                      <div className="grid grid-cols-1 md:ml-4 lg:mr-48 sm:ml-4 sm:mr-24 xs:mr-12 xs:ml-4">
                        <div className="relative w-10 text-nowrap">
                          <span
                            key={currentCityIndex}
                            className={`text-bold text-xl mx-auto transition-all duration-1000
                                        ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
                            aria-live="polite"
                          >
                            {" "}
                            {cities[currentCityIndex]}
                          </span>
                        </div>
                        <span id="Time" className="font-medium text-nowrap">
                          Dhuhr 04:47
                        </span>
                        <span id="Hijri" className="text-sm text-zinc-500 text-nowrap">
                          20 Safar, 1446
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </span>
          </div>
          <nav className="flex gap-10 text-white">
            <span className="lg:text-4xl md:text-md xs:text-sm font-bold text-center">
              <div className="flex gap-10">
                <div className="flex items-center py-2 pl-12 pr-8 rounded-full">
                  <svg className="lg:size-20 xs:size-20 md:size-14 sm:size-14 fill-current text-black dark:text-white" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3C12.5523 3 13 3.44772 13 4V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V4C11 3.44772 11.4477 3 12 3Z" />
                    <path d="M22 13C22 13.5523 21.5523 14 21 14H20C19.4477 14 19 13.5523 19 13C19 12.4477 19.4477 12 20 12H21C21.5523 12 22 12.4477 22 13Z" />
                    <path d="M4 14C4.55228 14 5 13.5523 5 13C5 12.4477 4.55228 12 4 12H3C2.44772 12 2 12.4477 2 13C2 13.5523 2.44772 14 3 14H4Z" />
                    <path d="M7.05025 8.05025C6.65973 8.44078 6.02656 8.44078 5.63604 8.05025L4.92893 7.34315C4.53841 6.95262 4.53841 6.31946 4.92893 5.92893C5.31946 5.53841 5.95262 5.53841 6.34315 5.92893L7.05025 6.63604C7.44078 7.02656 7.44078 7.65973 7.05025 8.05025Z" />
                    <path d="M17.6569 5.92893L16.9497 6.63604C16.5592 7.02656 16.5592 7.65973 16.9497 8.05025C17.3403 8.44078 17.9734 8.44078 18.364 8.05025L19.0711 7.34315C19.4616 6.95262 19.4616 6.31946 19.0711 5.92893C18.6805 5.53841 18.0474 5.53841 17.6569 5.92893Z" />
                    <path d="M20 19C20 19.5523 19.5523 20 19 20H5C4.44771 20 4 19.5523 4 19C4 18.4477 4.44771 18 5 18H19C19.5523 18 20 18.4477 20 19Z" />
                    <path d="M8.88853 14.6054C8.20788 13.2872 8.42186 11.6284 9.52513 10.5251C10.892 9.15829 13.108 9.15829 14.4749 10.5251C15.5781 11.6284 15.7921 13.2872 15.1115 14.6054C14.8581 15.0961 15.0505 15.6993 15.5412 15.9527C16.0319 16.2061 16.6352 16.0137 16.8885 15.523C17.9569 13.4539 17.6256 10.8474 15.8891 9.11091C13.7412 6.96303 10.2588 6.96303 8.11091 9.11091C6.37444 10.8474 6.04306 13.4539 7.11145 15.523C7.36484 16.0137 7.96807 16.2061 8.4588 15.9527C8.94952 15.6993 9.14192 15.0961 8.88853 14.6054Z" />
                  </svg>
                  <div className="grid grid-cols-1 md:ml-4 lg:mr-48 sm:ml-4 sm:mr-24 xs:mr-12 xs:ml-4">
                    <div className="relative w-10 text-nowrap">
                      <span
                        key={currentCityIndex}
                        className={`text-bold text-xl mx-auto transition-all duration-1000
                                        ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
                        aria-live="polite"
                      >
                        {" "}
                        {cities[currentCityIndex]}
                      </span>
                    </div>
                    <span id="Time" className="font-medium text-lg text-nowrap">
                      Dhuhr 04:47
                    </span>
                    <span id="Hijri" className="text-sm text-nowrap text-zinc-300 ">
                      20 Safar, 1446
                    </span>
                  </div>
                  {/* <a
                        href="#"
                        className="h-14 xs:h-2 xs:px-2 px-8 bg-zinc-800 text-white rounded-full grid place-items-center"
                      >
                        All Prayer times
                      </a> */}
                </div>
              </div>
            </span>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Card2;