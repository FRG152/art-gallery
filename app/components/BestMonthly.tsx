"use client";

// import Image from "next/image";
// import Profile from "./ui/Profile";
import ImageComponent from "./ui/ImageComponent";
// import Collection01 from "@/public/images/collection_01.jpg";
import Search from "./ui/Search";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const BestMonthly = () => {
  const supabase = createClient();

  const [user, setUser] = useState();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { data } = await supabase.storage
        .from("images")
        .list(user?.id + "/", {
          limit: 100,
          offset: 0,
          sortBy: { column: "name", order: "asc" },
        });

      setUser(user);
      setImages(data);
    };

    getImages();
  }, []);

  return (
    <>
      <Search />
      <div className="grid grid-cols-4 gap-2 p-2">
        {images.map((img, index) => {
          return (
            <ImageComponent
              key={index}
              url={`https://lxtgwphweupqrdrdxjoj.supabase.co/storage/v1/object/public/images/${user?.id}/${img?.name}`}
            />
          );
        })}
      </div>

      {/* <div className="items-center mt-3 gap-5 grid grid-cols-2 px-2">
        <div>
          <div className="relative">
            <ImageComponent />
          </div>
          <div>
            <Profile />
          </div>
        </div>
        <div className="h-full grid grid-cols-3 grid-row-2 gap-2">
          <div>
            <Image
              alt="pixel art"
              src={Collection01}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              alt="pixel art"
              src={Collection01}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              alt="pixel art"
              src={Collection01}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              alt="pixel art"
              src={Collection01}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              alt="pixel art"
              src={Collection01}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              alt="pixel art"
              src={Collection01}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default BestMonthly;
