"use client";

import Divider from "@/components/Divider";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <Header back="/" />
      <div className="my-auto">
        <h2>Sign In</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          delectus.
        </p>
        <div className="mt-5 space-y-3">
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => router.push("/auth/login")}>
            <FcGoogle size={20} />
            <span className="ms-2">Sign in with Google</span>
          </Button>
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => router.push("/auth/login")}>
            <MdEmail size={20} />
            <span className="ms-2">Sign in with email</span>
          </Button>
          <Divider />
          <Button
            variant="default"
            className="w-full"
            onClick={() => router.push("/auth/register")}>
            <span className="ms-2">Sign Up</span>
          </Button>
        </div>
      </div>
    </>
  );
}
