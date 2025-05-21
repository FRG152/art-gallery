"use client";

import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import UploadComponent from "../components/UploadComponent";
import { v4 as uuidv4 } from "uuid";
import { createClient } from "@/utils/supabase/client";
import { MdCleaningServices } from "react-icons/md";

const Page = () => {
  const supabase = createClient();
  const [image, setImage] = useState<string>("");

  const clearImage = () => setImage("");

  const uploadFile: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const confirmFile = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    try {
      await supabase.storage
        .from("images")
        .upload(user?.id + "/" + uuidv4(), image);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-2">
        <UploadComponent image={image} uploadFile={uploadFile} />
        {image && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={clearImage}
              className="w-[50px] h-[50px] flex items-center justify-center rounded-full shadow bg-white p-3"
            >
              <MdCleaningServices size={20} color="#000" />
            </button>
            <button
              type="button"
              onClick={confirmFile}
              className="w-[50px] h-[50px] flex items-center justify-center rounded-full shadow bg-white p-3"
            >
              <FaCheck size={20} color="#000" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
