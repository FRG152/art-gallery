"use server";

// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(email: string) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithOtp({ email });

  if (error) {
    return false;
  } else {
    return true;
  }

  // revalidatePath("/", "layout");
  // redirect("/account");
}

export async function logout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return false;
  } else {
    redirect("/login");
    // return true;
  }
}
