import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import React, { useEffect } from "react";

const page = () => {
  const supabase = createClient();

  useEffect(() => {
    // const {data: {user}} = supabase.auth.getUser();
  }, []);

  return (
    <div>
      <Image alt="image" src={""} height={400} width={400} />
    </div>
  );
};

export default page;
