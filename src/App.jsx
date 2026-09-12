import { useState } from "react";
import "./App.css";
import Hero from "./Hero";
import Part from "./Part";
import Quality from "./Quality";
import Partners from "./Partners";
import WeOffer from "./WeOffer";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="relative">
      {/* <div
        className={`lg:hidden transition duration-1000 fixed inset-0 bg-black/30 backdrop-blur-sm z-[999] transition-opacity duration-300 ${
          showMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div> */}

      <div className="relative z-[30] lg:z-[10]">
        <Hero onMenuToggle={setShowMenu} />
      </div>
      <div className="-mt-10 lg:-mt-60 z-[20] relative">
        <Part />
      </div>
      <Quality />
      <Partners />
      <WeOffer />
    </div>
  );
}

export default App;
