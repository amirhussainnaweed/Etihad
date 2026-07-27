import React, { useState } from "react";
import { Menu } from "lucide-react";

const Hero = ({ onMenuToggle }) => {
  const [show, setShow] = useState(false);
  const handleMenuToggle = () => {
    const newShow = !show;
    setShow(newShow);
    onMenuToggle(newShow);
  };
  return (
    <div dir="rtl" lang="fa" className="relative h-auto">
      <section className="relative z-10">
        <div
          className={`lg:hidden transition duration-300 fixed inset-0 bg-black/10 backdrop-blur-sm z-[999] transition-opacity duration-300 ${
            show
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        ></div>

        <div className="flex justify-between items-center mx-auto px-10 lg:px-4 pb-20 pt-10 max-w-7xl">
          <div className="justify-between items-center gap-20 hidden lg:flex">
            <ul className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] flex gap-6">
              <li>
                <a href="">خانه</a>
              </li>
              <li>
                <a href="">درباره ما</a>
              </li>
              <li>
                <a href="">شاگردان ما</a>
              </li>
              <li>
                <a href="">فعالیت ها</a>
              </li>
            </ul>
            <h1 className="font-bold text-[24px] leading-[32px] tracking-[0.1px]">
              لیسه عالی اتحاد
            </h1>
          </div>
          <div className="flex justify-between gap-8">
            <button className="cursor-pointer font-bold leading-5 tracking-[0.2px] text-[16px] text-[#FF6551]">
              ورود
            </button>
            <button className="cursor-pointer rounded-md w-[137px] h-[52px] bg-[#FF6551] font-bold leading-5 tracking-[0.2px] text-[16px] text-white">
              پیوستن با ما
            </button>
          </div>

          <div className="block lg:hidden">
            <Menu
              className={`cursor-pointer block lg:hidden h-8 w-8 text-gray-700 z-[1000] relative`}
              onClick={handleMenuToggle}
            />
          </div>
        </div>

        {/* ===============================================Hero main section=============================================== */}

        <section className="relative flex gap-5 flex-col lg:flex-row lg:justify-between items-center lg:items-start mx-auto px-10 lg:px-4 pb-20 max-w-7xl">
          <div className="flex flex-col gap-10 w-[360px] md:w-[460px] lg:w-[660] xl:w-[750px] mt-[50px] lg:mt-[100px]">
            <p className="text-[#FF6551] font-bold text-[18px] leading-[144%] tracking-[0.1px]">
              برای آینده بهتر
            </p>
            <h2 className="font-bold text-[58px] leading-[80px] tracking-[0.2px]">
              برنامه های با کیفیت
            </h2>
            <p className="font-normal text-[22px] leading-[30px] tracking-[0.2px]">
              اینجا هر روز فرصت ها جدید <br /> برای یادگیری بهتر فراهم میشود
            </p>
            <div className="flex gap-2">
              <button className="font-bold text-[16px] px-4 py-2 text-white bg-[#FF6551] rounded-[5px] w-[120px]">
                ثبت نام
              </button>
              <button className="font-bold text-[16px] px-4 py-2 text-[#FF6551] border border-[#FF6551] rounded-[5px] w-[120px]">
                بیشتر بدانید
              </button>
            </div>
          </div>
          <div>
            <img src="/pic.png" alt="" />
          </div>
        </section>

        <div
          className={`lg:hidden absolute opacity-0 -z-10 top-30 flex justify-center w-full ${
            show ? "opacity-100 z-[1000]" : ""
          } transition-all duration-100`}
        >
          <ul className="flex flex-col w-[400px] md:w-[600px] gap-5 bg-gray-200 rounded-3xl font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] flex gap-3 mt-5 p-2 shadow-lg shadow-gray-400">
            <li className="p-2 rounded-3xl bg-gray-300 text-center cursor-pointer">
              <a href="">خانه</a>
            </li>
            <li className="p-2 rounded-3xl bg-gray-300 text-center cursor-pointer">
              <a href="">درباره ما</a>
            </li>
            <li className="p-2 rounded-3xl bg-gray-300 text-center cursor-pointer">
              <a href="">شاگردان ما</a>
            </li>
            <li className="p-2 rounded-3xl bg-gray-300 text-center cursor-pointer">
              <a href="">فعالیت ها</a>
            </li>
          </ul>
        </div>
      </section>
      <div className="absolute top-0 left-0 hidden xl:block xl:w-[617px] 2xl:w-[817px] z-0">
        <img src="/bg-blue.png" alt="" />
      </div>
      <div className="absolute top-0 right-0 hidden xl:block xl:w-[60px] 2xl:w-[130px] z-0">
        <img src="/leftDesign.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
