import Link from "next/link";
import Logo from "@/public/next.svg";
import Image from "next/image";
import { IoMdHome } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="h-full flex items-center gap-5">
        <Link href={"/upload"} className="nav-link">
          <FaCirclePlus size={25} color="#252525" />
        </Link>
        <Link href={"/"} className="nav-link">
          <IoMdHome size={30} color="#252525" />
        </Link>

        <Image alt="logo" src={Logo} className="logo" />

        <Link href={"/"} className="nav-link">
          <MdOutlineExplore size={30} color="#252525" />
        </Link>
        <Link href={"/"} className="nav-link">
          <IoIosSettings size={30} color="#252525" />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
