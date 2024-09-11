import React from "react";
// import SearchBar from "./components/ui/SearchBar";
import { Outlet } from "react-router-dom";
import { PageIndicator } from "./components/ui/PageIndicator";
import Navbar from "./components/Navbar";
import Card from "./components/ui/Card";
import Footer from "./components/Footer";
import '@fontsource-variable/plus-jakarta-sans';
import Card2 from "./components/ui/Card2";
import AdBanner from "./components/ui/AdBanner";
import PrayTime from "./components/ui/PrayTime";

function App() {

  return (
    <div>
        <Navbar />
        {/* <Time /> */}
        <Card />
        {/* <Card2 /> */}
        {/* <AdBanner /> */}
        <PrayTime />
        {/* <Outlet /> */}
        <PageIndicator />
        <Footer />
    </div>
  );
}

export default App;
