"use client";

import { Button } from "@components/form";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

const Auth = () => {
  const router = useRouter();

  return (
    <div className="block space-y-4">
      <Button>
        <FcGoogle size={22} />
        Continue with Google
      </Button>
      <Button onClick={() => router.push("/auth/email")}>
        <MdEmail size={22} />
        Continue with Email
      </Button>
    </div>
  );
};

export default Auth;
