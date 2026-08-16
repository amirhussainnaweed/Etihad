import React from "react";

const partners = [
  {
    id: 1,
    src: "partners/muslim.png",
    yellowSrc: "partners/muslim.yellow.png",
  },
  {
    id: 2,
    src: "partners/amazon.png",
    yellowSrc: "partners/amazon.yellow.png",
  },
  {
    id: 3,
    src: "partners/reddit.png",
    yellowSrc: "partners/reddit.yellow.png",
  },
  {
    id: 4,
    src: "partners/leaf.png",
    yellowSrc: "partners/leaf.yellow.png",
  },
  {
    id: 5,
    src: "partners/ly.png",
    yellowSrc: "partners/ly.yellow.png",
  },
];

const Partners = () => {
  return (
    <div className="flex flex-wrap justify-between items-center mx-auto px-10 lg:px-4 pb-20 pt-10 max-w-7xl">
      {partners.map((map) => (
        <div className="relative" key={map.id}>
          <div className="z-20 hover:opacity-0 transition duration-300 w-[150px] h-[142px] absolute">
            <img className="w-[150px]" src={map.src} alt="" />
          </div>
          <div className="z-0 w-[150px] h-[142px]">
            <img className="w-[150px]" src={map.yellowSrc} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Partners;
