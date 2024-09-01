import React from "react";
// import SearchBar from "./components/ui/SearchBar";
import { Outlet } from "react-router-dom";
import { PageIndicator } from "./components/ui/PageIndicator";
import Navbar from "./components/Navbar";
import Card from "./components/ui/Card";
import Playground from "./components/ui/Playground";
import Footer from "./components/Footer";
import '@fontsource-variable/plus-jakarta-sans';

function App() {

  return (
    <div>
        {/* <Navbar /> */}
        <Playground />
        {/* <Card /> */}
        {/* <Outlet /> */}
        <PageIndicator />
        <Footer />
    </div>
  );
}

export default App;
