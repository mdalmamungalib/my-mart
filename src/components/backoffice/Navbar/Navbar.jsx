import { AlignJustify, Bell, Sun, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import Galib from "../../../app/galib.png"
import { Button } from "@/components/ui/button"




const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-[#122136]  h-16 z-50 px-8 py-8 fixed w-full text-[#04bd7f]">
      {/* icon */}
      <button>
        <AlignJustify />
      </button>
      {/* 3 icon */}
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>

        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent "
        >
          <Bell className="text-[#04bd7f]"/>
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 ">
            20
          </div>
        </button>

        <button>
          <Image src={Galib} alt="User Profile" width={200} height={200} className="w-8 h-8 rounded-full "/> 
        </button>
      </div>
      <Button variant="outline">Button</Button>

    </div>
  );
};

export default Navbar;
