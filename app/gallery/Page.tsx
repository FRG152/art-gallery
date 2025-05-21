"use client";

import Navbar from "@/components/Navbar";
import ImageComponent from "@/components/ui/ImageComponent";
import SearchComponent from "@/components/ui/SearchComponent";
import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from "react";

interface User {
  id: string;
}

interface Data {
  created_at: string;
  id: string;
  last_accessed_at: string;
  metadata: {
    eTag: string;
    size: number;
    mimetype: string;
    cacheControl: string;
    lastModified: string;
  };
  name: string;
  updated_at: string;
}

const Page = () => {
  const supabase = createClient();

  const [user, setUser] = useState<User | null>(null);
  const [images, setImages] = useState<Data[] | null>(null);

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
    <div>
      <Navbar />
      <SearchComponent />
      <div className="grid grid-cols-4 gap-2 p-2">
        {images?.map((img, index) => {
          return (
            <ImageComponent
              key={index}
              url={`https://lxtgwphweupqrdrdxjoj.supabase.co/storage/v1/object/public/images/${user?.id}/${img?.name}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
