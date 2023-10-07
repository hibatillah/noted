"use client";

import { Button, TextInput } from "@components/form";
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineKey, HiOutlineMail } from "react-icons/hi";

const AuthEmail = () => {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)
  const [status, setStatus] = React.useState("")

  const authForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const req = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    if (req.email && req.password) {
      setLoading(true);

      await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: req.email.split("@")[0],
          email: req.email,
          password: req.password,
        }),
      })
        .then((res) => {
          console.log(res)
          
          setStatus("")
          // router.push("/")
        })
        .catch((err) => {
          console.log(err)
          setStatus("failed")
        })
        .finally(() => setLoading(false));
    } else if (!req.email) {
      setStatus("email")
    } else {
      setStatus("password")
    }
  };

  return (
    <form onSubmit={authForm} className="block space-y-4">
      <TextInput
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        color="text-status-blue"
        inputMode="email"
        error={status === "email" ? "Email is required" : null}
        icon={<HiOutlineMail size={22} />}
      />
      <TextInput
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        color="text-status-blue"
        error={status === "password" ? "Password is required" : null}
        icon={<HiOutlineKey size={22} />}
      />
      {status === "failed" && (
        <span className="text-status-red">{}</span>
      )}
      <Button
        disabled={loading}
        type="submit"
        className="bg-status-blue text-white">
        {loading ? "Loading..." : "Sign in"}
      </Button>
    </form>
  );
};

export default AuthEmail;
