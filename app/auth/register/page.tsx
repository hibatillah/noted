"use client";
import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Page() {

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const password = data.get('password');
    const confirmPassword = data.get('confirm-password');

    if (password === confirmPassword) {
      console.log('same password')
    } else {
      console.log('not same password')
    }
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
            Password
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Input your password"
              required
            />
          </Label>
          <Label htmlFor="confirm-password">
            Confirm Password
            <Input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Repeat your password"
              required
            />
          </Label>
          <Button type="submit" variant="default" className="w-full">
            Sign Up
          </Button>
        </form>
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
