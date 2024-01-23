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
  const [isPasswordSame, setIsPasswordSame] = React.useState(true);

  const registrasiUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPasswordSame(true);

    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");

    if (password === confirmPassword) {
      if (email !== "habib@gmail.com") {
        event.currentTarget.reset();

        toast({
          title: "Registration Successful!",
        });

        setTimeout(() => {
          router.push("/auth/login");
        }, 1000);
      } else {
        toast({
          title: "Email has been registered!",
          description: "Use another email or log in with this email",
          action: (
            <ToastAction
              altText="Login"
              onClick={() => router.push("/auth/login")}>
              Login
            </ToastAction>
          ),
        });
      }
    } else {
      setIsPasswordSame(false);
      toast({
        variant: "destructive",
        title: "Passwords are not the same!",
        description: "Make sure both passwords are the same",
      });
    }
  };

  return (
    <>
      <Header back="/auth" />
      <div className="my-auto">
        <h2>Sign Up</h2>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          delectus.
        </p>
        <form onSubmit={registrasiUser} className="block space-y-5">
          <Label htmlFor="username">
            Username
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Input your username"
              required
            />
          </Label>
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
            <div className="flex items-center gap-1.5">
              Password
              <span className="text-[10px] font-light text-foreground before:content-['*']">
                at least 6 characters!
              </span>
            </div>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Input your password"
              minLength={6}
              required
            />
          </Label>
          <Label htmlFor="confirmPassword">
            Confirm Password
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Repeat your password"
              minLength={6}
              required
            />
            {!isPasswordSame && (
              <span className="text-xs font-light mt-1 text-status-red">
                Password must be same!
              </span>
            )}
          </Label>
          <Button type="submit" variant="default" className="w-full">
            Sign Up
          </Button>
        </form>
        <Divider className="my-3" />
        <Button
          variant="secondary"
          className="w-full"
          onClick={() => router.push("/auth/login")}>
          <FcGoogle size={20} />
          <span className="ms-2">Sign up with Google</span>
        </Button>
      </div>
      <p className="text-center text-sm mb-3">
        Already have an account?{" "}
        <Link
          href={"/auth/login"}
          className="text-sm text-title hover:underline underline-offset-2">
          Login
        </Link>
      </p>
    </>
  );
}
