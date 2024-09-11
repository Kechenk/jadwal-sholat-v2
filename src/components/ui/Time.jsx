'use client'

import React, { useState, useEffect } from "react";

const cities = [
  "Jakarta", "Bandung", "Semarang", "Yogyakarta", "Surabaya", 
  "Medan", "Palembang", "Makassar", "Balikpapan", "Pontianak", 
  "Banjarmasin", "Samarinda", "Bukit Tinggi", "Lubuk Linggau",
];

export default function Time() {
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
    <main className="grid py-44">
      <div className="container flex flex-col items-center">
        <div className="flex gap-10">
          <div className="flex items-center mx-auto bg-zinc-100 py-2 pl-12 pr-8 rounded-full">
            <img
              src="/img/icon/Shalat-Shubuh.svg"
              className="lg:h-20 xs:h-20 md:h-14 sm:h-14"
              alt="Prayer time icon"
            />
            <div className="grid grid-cols-1 md:ml-4 lg:mr-48 sm:ml-4 sm:mr-24 xs:mr-12 xs:ml-4">
              <div className="relative h-8">
                <span 
                  key={currentCityIndex}
                  className={`text-bold text-xl absolute w-full transition-all duration-1000 ${
                    isAnimating 
                      ? 'opacity-0 scale-95' 
                      : 'opacity-100 scale-100'
                  }`}
                  aria-live="polite"
                >
                  {cities[currentCityIndex]}
                </span>
              </div>
              <span id="Time" className="font-medium">
                Dhuhr 04:47 GMT+7
              </span>
              <span id="Hijri" className="text-sm text-zinc-500">
                20 Safar, 1446
              </span>
            </div>
            <a
              href="#"
              className="h-14 xs:h-2 xs:px-2 px-8 bg-zinc-800 text-white rounded-full grid place-items-center"
            >
              All Prayer times
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
