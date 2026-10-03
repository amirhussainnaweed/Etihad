import React, { useState } from "react";
import { BookOpen, Gamepad, Gamepad2 } from "lucide-react";

const Games = () => {
  const [activeSection, setActiveSection] = useState("educational");
  return (
    <div
      dir="rtl"
      className="gap-15 flex flex-col flex-wrap mx-auto px-10 lg:px-4 pb-20 pt-20 max-w-7xl"
    >
      <div className="flex flex-wrap justify-between items-center w-full">
        <div className="gap-6 flex flex-col flex-wrap">
          <p className="font-semibold text-orange-500"> - بازی و سرگرمی</p>
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl">
            بازی کنید، بیاموزید{" "}
            <span className="text-orange-500">و رشد کنید</span>
          </p>
          <p className="font-semibold text-sm md:text-base lg:text-lg max-w-xl leading-relaxed wrap-break-word whitespace-normal">
            مجموعه‌ای از بازی‌ها که برای سرگرمی و آموزش طراحی شده‌اند را تجربه
            کنید
          </p>
        </div>
        <div className="w-[150px] mt-8">
          <img src="/games/console_controller.png" alt="" />
        </div>
      </div>
      {/* buttons */}
      <div className="flex w-full justify-center">
        <div className="relative flex w-full max-w-[420px] items-center rounded-full bg-gray-100 p-1 shadow-inner">
          {/* Sliding orange background */}
          <div
            className={`absolute inset-y-1 left-1 w-[calc(50%_-_0.25rem)] rounded-full bg-orange-500 shadow-sm transition-transform duration-300 ease-in-out ${
              activeSection === "fun"
                ? "translate-x-[calc(100%_-_0.13rem)]"
                : "translate-x-0"
            }`}
          />

          {/* Educational */}
          <button
            type="button"
            aria-pressed={activeSection === "educational"}
            className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-3 text-xs font-medium transition-colors duration-300 ease-in-out sm:text-sm md:text-base cursor-pointer ${
              activeSection === "fun" ? "text-white" : "text-gray-600"
            }`}
            onClick={() => setActiveSection("fun")}
          >
            <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
            آموزشی
          </button>

          {/* Fun */}
          <button
            type="button"
            aria-pressed={activeSection === "fun"}
            className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-3 text-xs font-medium transition-colors duration-300 ease-in-out sm:text-sm md:text-base cursor-pointer ${
              activeSection === "educational" ? "text-white" : "text-gray-600"
            }`}
            onClick={() => setActiveSection("educational")}
          >
            <Gamepad2 className="h-4 w-4 sm:h-5 sm:w-5" />
            سرگرمی
          </button>
        </div>
      </div>
    </div>
  );
};

export default Games;
