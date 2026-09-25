import React, { useState } from "react";
import { BookOpen, Gamepad, Gamepad2 } from "lucide-react";

const Games = () => {
  const [activeSection, setActiveSection] = useState("educational");
  return (
    <div
      dir="rtl"
      className="gap-15 flex flex-col flex-wrap mx-auto px-10 lg:px-4 pb-20 pt-20 max-w-7xl"
    >
      <div className="flex justify-between items-center">
        <div className="gap-6 flex flex-col flex-wrap">
          <p className="font-semibold text-orange-500"> - بازی و سرگرمی</p>
          <p className="font-bold text-4xl">
            بازی کنید، بیاموزید{" "}
            <span className="text-orange-500">و رشد کنید</span>
          </p>
          <p className="font-semibold">
            مجموعه از بازی های که برای سرگرمی و آموزش طراحی شده اند را تجربه
            کنید
          </p>
        </div>
        <div className="w-[150px]">
          <img src="/games/console_controller.png" alt="" />
        </div>
      </div>
      {/* buttons */}
      <div className="flex justify-center">
        <div className="relative flex gap-6 bg-gray-100 rounded-full overflow-hidden">
          {/* Sliding orange background */}
          <div
            className={`absolute top-0 bottom-0 w-[calc(50%-12px)] rounded-full bg-orange-500 transition-transform duration-300 ease-in-out ${
              activeSection === "fun"
                ? "translate-x-[calc(100%-440px)]"
                : "translate-x-0"
            }`}
          />

          {/* Educational */}
          <button
            className={`relative z-10 rounded-full px-15 py-3 flex gap-3 items-center cursor-pointer transition-transform duration-300 ease-in-out ${
              activeSection === "educational" ? "text-white" : "text-gray-600"
            }`}
            onClick={() => setActiveSection("educational")}
          >
            <BookOpen />
            آموزشی
          </button>

          {/* Fun */}
          <button
            className={`relative z-10 rounded-full px-15 py-3 flex gap-3 items-center cursor-pointer transition-transform duration-300 ease-in-out ${
              activeSection === "fun" ? "text-white" : "text-gray-600"
            }`}
            onClick={() => setActiveSection("fun")}
          >
            <Gamepad2 />
            سرگرمی
          </button>
        </div>
      </div>
    </div>
  );
};

export default Games;
