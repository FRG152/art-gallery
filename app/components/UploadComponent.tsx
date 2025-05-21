"use client";

import Image from "next/image";
import { GoUpload } from "react-icons/go";

interface Props {
  image: string | undefined;
  uploadFile: React.ChangeEventHandler<HTMLInputElement>;
}

const UploadComponent = ({ image, uploadFile }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="w-[400px] h-[500px] relative flex flex-col items-center justify-center rounded-xl shadow bg-white">
        <GoUpload size={30} color="#000" />
        {image ? (
          <Image
            alt="image"
            src={image}
            fill
            className="p-1 rounded-xl object-cover"
          />
        ) : (
          <>
            <input
              id="image"
              type="file"
              name="image"
              onChange={uploadFile}
              className="w-full h-full absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer "
            />
            <p className="mt-2">Elegi el archivo a subir o arrastralo aqui</p>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadComponent;
