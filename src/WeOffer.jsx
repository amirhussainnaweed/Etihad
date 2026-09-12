import { ChevronLeft } from "lucide-react";
import React from "react";

const cards = [
  {
    id: 1,
    src: "/pic.png",
    text: "به قله های موفقیت آموزشی برسند و از بهترین امکانات استفاده کنند",
  },
  {
    id: 2,
    src: "/leftd.png",
    text: "به قله های موفقیت آموزشی برسند و از بهترین امکانات استفاده کنند",
  },
  {
    id: 3,
    src: "/pic.png",
    text: "به قله های موفقیت آموزشی برسند و از بهترین امکانات استفاده کنند",
  },
];

const WeOffer = () => {
  return (
    <div className="w-full bg-[#26335D]">
      <div
        dir="rtl"
        className="gap-6 flex flex-col flex-wrap mx-auto px-10 lg:px-4 pb-20 pt-20 max-w-7xl"
      >
        <p className="text-[#FF6551] text-[14px] font-bold leading-[24px] tracking-[0.2px]">
          فرزندان شما
        </p>
        <h2 className="text-white text-[40px] font-bold leading-[50px] tracking-[0.2px]">
          با پیوستن به خانواده اتحاد میتوانند تا :
        </h2>
        <div className="flex justify-between flex-wrap">
          {cards.map((item) => {
            return (
              <div
                key={item.id}
                className="overflow-hidden w-[330px] flex flex-col justify-between  rounded-2xl bg-white transition duration-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.7)]"
              >
                <div className="gap-5 flex items-center flex-col justify-between p-4 w-full">
                  <img src={item.src} alt="" />
                </div>
                <div className="w-full h-[70px] bg-amber-200 p-1 px-7">
                  <h3 className="font-semibold text-[18px]">{item.text}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-center mt-10">
          <div className="w-[500px] h-[60px] flex justify-center items-center bg-white rounded-full cursor-pointer transition duration-200 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            <p className="flex gap-2 items-center">
              دیدن بیشتر <ChevronLeft />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
