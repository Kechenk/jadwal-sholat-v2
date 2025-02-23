import React from "react";

fetch(`https://api.aladhan.com/v1/calendarByCity/2024/9?city=Surabaya&country=Indonesia&method=20`)
.then(response => response.json())
.then(data => console.log(data))

const SearchBar = () => {
  return (
    <>
      <div className="flex flex-col gap-10 py-8 fixed container mx-auto px-4">
        <div className="items-center bg-slate-200 border-black rounded-2xl ml-56 mr-56 border-b-2">
          <div className="grid mt-4 mb-4">
            <span className="font-bold text-black mx-auto lg:ml-4"><img src="img/mesjid.webp" className="size-12" />
            </span>
          </div>
          </div>
        </div>
    </>
  );
};

export default SearchBar;
