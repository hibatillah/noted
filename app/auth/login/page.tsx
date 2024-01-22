import React from 'react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';

export default function Page() {
  return (
    <>
      <div className="my-auto">
        <h2>Sign Up</h2>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          delectus.
        </p>
        <form className="block space-y-4">
          <Label htmlFor="email">
            Email
            <Input type="email" id="email" name="email" placeholder="Input your email" />
          </Label>
          <Label htmlFor="password">
            Password
            <Input type="password" id="password" name="password" placeholder="Input your password" />
          </Label>
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
