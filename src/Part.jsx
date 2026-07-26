import React from "react";

const partArray = [
  {
    id: 1,
    icon: "/1.png.png",
    title: "استادان مجرب",
    des: "یادگیری برتر، حاصل تجربه و تخصص است. مکتب ما با بهره‌گیری از اساتید مجرب، دلسوز و باسابقه، محیطی پویا را برای شکوفاانش‌آموزان ماست.",
  },
  {
    id: 2,
    icon: "/2.png.png",
    title: "برنامه های ما",
    des: "یادبرنامه‌های هدفمند ما، با تلفیق آموزش علمی و فعالیت‌های فوق‌برنامه، پویایی را به محیط مکتب می‌آورند. این طرح‌های خلاقانه فراتر از",
  },
  {
    id: 3,
    icon: "/3.png.png",
    title: "دسترسی دایمی",
    des: "یادگیری بدون محدودیت زمان و مکان! شاگردان ما می‌توانند در هر ساعت از شبانه‌روز، به تمام ویدیوها، جزوات و مواد درسی در سایت مکتب .",
  }
]

const Part = () => {
  return (
    <div dir="rtl" className="flex justify-center items-center mx-auto px-10 lg:px-4 pb-20 pt-10 max-w-7xl">
      <div className="flex lg:justify-between justify-center w-full flex-wrap gap-6">
        {
        partArray.map((item) => (
          <div key={item.id} className="bg-[#fff] w-[328px] h-[300px] px-10 justify-center items-start gap-2 shadow-xl shadow-gray-300 flex flex-col">
            <img src={item.icon} alt="" className="w-[70px] h-[76px]" />
            <h1 className="font-bold text-[24px]">{item.title}</h1>
            <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
            <p className="">{item.des}</p>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Part;
