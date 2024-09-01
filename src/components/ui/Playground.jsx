import React from "react";

const Playground = () => {
  return (
    <>
    <main className="min-h-dvh grid place-items-center py-32">
        <div className="container flex flex-col items-center">
          <div className="flex gap-10">
            <div className="flex items-center bg-zinc-100 py-2 pl-12 pr-14 rounded-full">
              <div className="grid ml-2 mr-36">
                <span className="font-medium">Fajr 04:47 AM</span>
                <span className="text-sm text-zinc-500">
                  20 Safar, 1446 Bogor
                </span>
              </div>
              <a
                href=""
                className="h-14 px-8 bg-zinc-800 text-white rounded-full grid place-items-center"
              >
                All Prayer times
              </a>
            </div>
          </div>
          <h1 className="text-8xl font-bold text-center mt-4">
            The world’s most loved New Religion
          </h1>
          <p className="text-xl text-center my-8">
            “Athan made me sooo productive😍“
          </p>
          <a
            href=""
            className="h-20 px-12 text-lg bg-zinc-800 text-white rounded-full grid place-items-center"
          >
            Download App
          </a>
          <img
            className="border rounded-3xl border-zinc-200 mt-8"
            src="https://www.islamicfinder.org/static/live188/themes/theme24/images/athan-card.webp"
            alt=""
          />
        </div>
      </main>
    </>
  );
};

export default Playground;
