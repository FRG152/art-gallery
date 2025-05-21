import Link from "next/link";
import Logo from "@/app/favicon.ico";
import React from "react";
import Image from "next/image";
import Button from "./ui/Button";
import { logout } from "../(auth)/sign-in/actions";
import { IoMdHome } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="nav">
      <Image alt="logo" src={Logo} className="logo" />

      <div className="flex items-center gap-2">
        <ul className="h-full flex items-center gap-2 p-2">
          <Link href={"/upload"} className="nav-link">
            <FaCirclePlus size={25} color="#000" />
          </Link>
          <Link href={"/"} className="nav-link">
            <IoMdHome size={30} color="#000" />
          </Link>
          <Link href={"/"} className="nav-link">
            <MdOutlineExplore size={30} color="#000" />
          </Link>
          <Link href={"/"} className="nav-link">
            <IoIosSettings size={30} color="#000" />
          </Link>
        </ul>
      </div>

      <div className="flex items-center gap-1">
        <div>
          <Button
            type="button"
            text="Sign Out"
            styles="border-none rounded-md px-5"
            func={logout}
          />
        </div>
        <Link href={"/profile"} className="avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
