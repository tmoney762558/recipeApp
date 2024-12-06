import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Details, Favorites } from "./pages";

const App = () => {
  return (
    <div>
      <div className="min-h-screen bg-white text-gray-600">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
