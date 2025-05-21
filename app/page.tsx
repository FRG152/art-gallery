"use client";

import Link from "next/link";
import gsap from "gsap";
// import Image from "next/image";
import { useState } from "react";
import { IoReload } from "react-icons/io5";
// import illustration01 from "@/public/images/home_01.jpg";
// import illustration02 from "@/public/images/home_02.jpg";
// import illustration03 from "@/public/images/home_03.png";

export default function Home() {
  const [num, setNum] = useState(1);
  // const [image, setImage] = useState("home_01")

  const handleImageEnter = () => {
    gsap.fromTo(
      ".box-circle",
      {
        rotate: 0,
        duration: 1,
      },
      {
        rotate: 360,
        duration: 1,
      }
    );
    gsap.fromTo(
      ".circle_01",
      {
        rotate: 0,
        duration: 2,
      },
      {
        rotate: 360,
        duration: 2,
      }
    );
    gsap.fromTo(
      ".circle_02",
      {
        rotate: 0,
        duration: 3,
      },
      {
        rotate: 360,
        duration: 3,
      }
    );
    setNum(() => (num > 2 ? 1 : num + 1));
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <div
        className="box-circle"
        style={{
          backgroundImage: `url("/images/home_0${num}.jpg")`,
        }}
      >
        <div
          className="circle_01"
          style={{ backgroundImage: `url("/images/home_0${num}.jpg")` }}
        />
        <div
          className="circle_02"
          style={{ backgroundImage: `url("/images/home_0${num}.jpg")` }}
        />
      </div>

      {/* <div className="flex items-center justify-center gap-8">
        <div className="w-[200px] h-[400px] relative">
          <Image
            alt="home_01"
            src={illustration01}
            fill
            className="illustration-image_01"
            onClick={handleImageEnter}
          />
        </div>
        <div className="w-[200px] h-[400px] relative">
          <Image
            alt="home_02"
            src={illustration02}
            fill
            className="illustration-image_02"
            onClick={handleImageEnter}
          />
        </div>
        <div className="w-[200px] h-[400px] relative">
          <Image
            alt="home_03"
            src={illustration03}
            fill
            className="illustration-image_03"
            onClick={handleImageEnter}
            // onMouseLeave={handleImageLeave}
          />
        </div>
      </div> */}

      <h1 className="text-8xl text-center text-white text-shadow-lg my-2">
        IMAGES ART GALLERY
      </h1>

      <div className="w-full text-white text-center">
        <p>It`s a gallery which you can buy and use in your projects!</p>
        <p>
          Moreover, if you are an artist you can become an author and earn a
          great deal!
        </p>
      </div>

      <Link
        href={"/sign-in"}
        className="w-40 h-[50px] flex items-center justify-center rounded-full text-white bg-black mt-4"
      >
        More
      </Link>
      <button
        type="button"
        onClick={handleImageEnter}
        className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-black mt-2 absolute right-4 bottom-4"
      >
        <IoReload color="#fff" />
      </button>
    </section>
  );
}
