import React from "react";

const Quality = () => {
  return (
    <div dir="rtl" className="h-[761px] w-full bg-white">
        <div className="flex justify-center lg:justify-between items-center h-full flex-wrap mx-auto px-10 lg:px-4 pb-20 pt-10 max-w-7xl">
            <div className="flex flex-col justify-between items-center lg:items-start h-[296px] w-[361px]">
                <div className="w-[94px] h-[7px] bg-[#E74040]"></div>
                <h1 className="font-bold text-[40px] leading-[150%] tracking-[0.2px]">آموزش باکیفیت</h1>
                <p className="font-normal text-center lg:text-start text-[14px] leading-[150%] tracking-[0.2px]">یادبرنامه‌های هدفمند ما، با تلفیق آموزش علمی و فعالیت‌های فوق‌برنامه، پویایی را به محیط مکتب می‌آورند. این طرح‌های خلاقانه فراتر از</p>
                <p className="flex gap-3 items-center text-[#FF6551] font-bold text-[14px]">بیشتر بدانید <img src="/arrowL.png" alt="" /></p>
            </div>
            <div>
                <img src="/leftd.png" alt="" />
            </div>
        </div>
    </div>
  );
};

export default Quality;