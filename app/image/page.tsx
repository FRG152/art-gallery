"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useGlobalContext } from "@/context";

const Page = () => {
  const { url } = useGlobalContext();

  console.log(url);

  return (
    <div>
      <Navbar />
      {/* <Image alt="image" src={url} height={400} width={400} /> */}
    </div>
  );
};

export default Page;
