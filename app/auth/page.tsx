"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Header from "@/components/Header";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <Header profile={false} back="/" />
      <div className="my-auto">
        <h2>Sign In</h2>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          delectus.
        </p>
        <Button
          variant={"secondary"}
          className="w-full mb-3"
          onClick={() => router.push("/auth/login")}>
          <FcGoogle size={20} />
          <span className="ms-2">Sign in with Google</span>
        </Button>
        <Button
          variant={"secondary"}
          className="w-full"
          onClick={() => router.push("/auth/login")}>
          <MdEmail size={20} />
          <span className="ms-2">Sign in with email</span>
        </Button>
      </div>
      <p className="text-center text-sm mb-3">
        {"Don't"} have an account?{" "}
        <Link
          href={"/auth/register"}
          className="text-sm text-title hover:underline underline-offset-2">
          Sign Up
        </Link>
      </p>
    </>
  );
}
