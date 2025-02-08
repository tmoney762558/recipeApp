import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Details, Favorites } from "./pages";

const App = () => {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path={`/recipe-details/`} element={<Details/>} />
      </Routes>
    </div>
  );
};

export default App;
