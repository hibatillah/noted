"use client";

import Divider from "@/components/Divider";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function Page() {
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    if (email === "habib@gmail.com") {
      if (password === "habib1") {
        toast({
          title: "Login Successful!",
        });
        router.push("/home");
      } else {
        toast({
          title: "Password does not match",
        });
      }
    } else {
      toast({
        title: "Email not registered!",
        description: "Register first or use another email",
        action: (
          <ToastAction
            altText="Register"
            onClick={() => router.push("/auth/register")}>
            Sign Up
          </ToastAction>
        ),
      });
    }
  };

  return (
    <>
      <Header back="/auth" />
      <div className="my-auto">
        <h2>Sign In</h2>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          delectus.
        </p>
        <form onSubmit={handleLogin} className="block space-y-5">
          <Label htmlFor="email">
            Email
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Input your email"
              required
            />
          </Label>
          <Label htmlFor="password">
            Password
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Input your password"
              minLength={6}
              required
            />
          </Label>
          <Button type="submit" variant="default" className="w-full">
            Login
          </Button>
        </form>
        <Divider className="my-3" />
        <Button
          variant="secondary"
          className="w-full"
          onClick={() => router.push("/home")}>
          <FcGoogle size={20} />
          <span className="ms-2">Sign in with Google</span>
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
