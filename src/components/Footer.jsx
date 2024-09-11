import React from "react";

export default function Footer() {
  return (
    <footer className="bottoms bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0 lg:space-x-4">
          <div className="space-y-4 lg:flex-1"></div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Made with love by collaboration--
            <a
              href="https://www.linkedin.com/in/dhikiteguh/"
              className="text-green-600 font-bold"
            >
              Dhiki Teguh
            </a>{" "}
            x{" "}
            <a
              href="https://www.linkedin.com/in/kechenk/"
              className="text-green-600 font-bold"
            >
              Reza D. Pradipta
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
