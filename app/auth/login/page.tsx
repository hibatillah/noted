"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

export default function Page() {
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Header profile={false} back='/auth' />
      <div className="my-auto">
        <h2>Sign Up</h2>
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
