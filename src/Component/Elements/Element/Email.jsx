import React from "react";
import { Context } from "../../Context/Context";
import { useContext } from "react";
const Email = () => {
  const { color } = useContext(Context);
  return (
    <div className=" hidden md:flex fixed bottom-0 z-50 -right-10 ">
      <div className="flex  flex-col items-center">
        <div className="rotate-90">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtVbFlRBkNFtDTDbjpgnhwkjvZQdfMZdGfkxfnKkWMsqJgxzXPhHRzdHkwSMDTwwgXGxkFhq">
            <div
              className={`font-bold text-xs text-${color} mr-2 tracking-wider cursor-pointer  hover:scale-105 transition duration-200`}
            >
              {" "}
              Jonahjohnzon@gmail.com
            </div>
          </a>
        </div>
        <div
          className={`w-[2px] h-24  mt-24 transition duration-200 bg-brown z-50`} style={{backgroundColor:color}}
        ></div>
      </div>
    </div>
  );
};

export default Email;
