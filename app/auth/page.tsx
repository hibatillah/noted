"use client";

import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

const Auth = () => {
  const router = useRouter();

  return (
    <div className="block space-y-4">
      <button className="btn">
        <FcGoogle size={22} />
        Continue with Google
      </button>
      <button onClick={() => router.push("/auth/email")} className="btn">
        <MdEmail size={22} />
        Continue with Email
      </button>
    </div>
  );
};

export default Auth;
