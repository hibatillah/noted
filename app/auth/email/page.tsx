"use client"

import { TextInput } from "@components/form";
import { HiOutlineKey, HiOutlineMail } from "react-icons/hi";

const AuthEmail = () => {
  const loginHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={loginHandle} className="block space-y-4">
      <TextInput
        type="email"
        id="auth-email"
        name="auth-emal"
        placeholder="Email"
        color="text-status-blue"
        icon={<HiOutlineMail size={22} />}
        inputMode="email"
        required
      />
      <TextInput
        type="password"
        id="auth-password"
        name="auth-emal"
        placeholder="Password"
        color="text-status-blue"
        icon={<HiOutlineKey size={22} />}
        required
      />
      <button
        type="submit"
        className="btn bg-status-blue text-white font-semibold tracking-wide active:ring-status-blue">
        Login
      </button>
    </form>
  );
};

export default AuthEmail;
