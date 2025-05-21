"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { redirect } from "next/navigation";
import ModalComponent from "@/components/ui/ModalComponent";
import InputComponent from "@/components/ui/InputComponent";
import { FormEvent, useState } from "react";
import { login } from "./actions";

const Page = () => {
  const [email, setEmail] = useState("");
  const [confirmModal, setConfirmModal] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>, email: string) => {
    e.preventDefault();
    const result = await login(email);
    console.log(result);
    // setConfirmModal(true);
    redirect("/");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <form
        className="max-w-[500px] bg-white p-10 rounded-lg"
        onSubmit={(e) => handleLogin(e, email)}
      >
        <h1 className="text-6xl text-center text-shadow-lg text-black">
          LOGIN
        </h1>
        <InputComponent
          type="email"
          name="email"
          label="Email:"
          value={email || ""}
          placeholder="example@email.com"
          func={(e) => setEmail(e.target.value)}
        />
        <div className="flex flex-col justify-center gap-3">
          <Button type="submit" text="SEND" styles="mt-2" primary />
          <Link href={"/"} className="w-full text-center text-black">
            Go back
          </Link>
        </div>
      </form>
      {confirmModal && (
        <ModalComponent closeFunction={() => setConfirmModal(false)}>
          <h1 className="text-2xl text-center">Check Your Email</h1>
          <Button
            type="button"
            text="Check"
            styles="mt-2"
            func={() => (window.location.href = "https://www.gmail.com")}
          />
        </ModalComponent>
      )}
    </div>
  );
};

export default Page;
