"use client";

import Image from "next/image";
import { LuDownload } from "react-icons/lu";
import { AiOutlineSave } from "react-icons/ai";
import { useState } from "react";
import { useGlobalContext } from "@/context";

interface Props {
  url: string;
}

const ImageComponent = ({ url }: Props) => {
  const { setUrl } = useGlobalContext();
  const [hover, setHover] = useState(false);

  const selectImage = () => {
    setUrl(url);
  };

  return (
    <div
      onClick={selectImage}
      className="relative cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        alt="image"
        src={url}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full rounded-xl"
      />
      {hover && (
        <>
          <button type="button" className="image-save">
            <LuDownload size={20} color="#000" className="z-10" />
          </button>
          <button type="button" className="image-download">
            <AiOutlineSave size={20} color="#000" className="z-10" />
          </button>
        </>
      )}
    </div>
  );
};

export default ImageComponent;
