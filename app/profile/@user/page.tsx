"use client";

import DialogClear from "@/components/DialogClear";
import DialogLogout from "@/components/DialogLogout";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { getInitials } from "@/lib/utils";
import { useState } from "react";
import { MdOutlineKey, MdOutlineModeEdit } from "react-icons/md";

export default function Page() {
  const googleLogin = true;

  const [userData, setUserData] = useState({
    userId: "1313",
    username: "M. Hibatillah Hasanin",
    email: "hibatillahhabib@gmail.com",
    bio: "Student",
  });

  const initials = getInitials(userData.username);

  const updateProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (true) {
      console.log({ userData });
      toast({
        title: "Profile Updated Successfully!",
      });
    }
  };

  return (
    <div className="space-y-5">
      <Header back="/home" />
      <div className="flex flex-col gap-5">
        <div>
          <h2>Profile</h2>
          <div className="relative size-28 mx-auto rounded-full bg-primary grid place-items-center">
            <div className="text-3xl text-white">{initials}</div>
            <Button
              size="icon"
              variant="secondary"
              className="absolute right-0 bottom-0 size-8 rounded-full border border-background focus-within:border-foreground">
              <MdOutlineModeEdit />
            </Button>
          </div>
        </div>
        <form onSubmit={updateProfile} className="block space-y-5 mb-2">
          <Label htmlFor="username">
            Username
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Input your username"
              spellCheck={false}
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </Label>
          <Label htmlFor="email">
            Email
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Input your email"
              spellCheck={false}
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              readOnly={googleLogin}
            />
          </Label>
          <Label htmlFor="bio">
            Bio
            <Input
              type="text"
              id="bio"
              name="bio"
              placeholder="Input your bio"
              value={userData.bio}
              onChange={(e) =>
                setUserData({ ...userData, bio: e.target.value })
              }
            />
          </Label>
          <Button type="submit" variant="default" className="w-full">
            Update Profile
          </Button>
        </form>
        <div className="space-y-2">
          <h2>Settings</h2>
          <div className="space-y-4">
            <Button
              variant="secondary"
              className="w-full justify-start gap-3"
              disabled={googleLogin}>
              <MdOutlineKey size={20} className="text-status-yellow" />
              Reset Password
            </Button>
            <DialogClear userId={userData.userId} />
            <DialogLogout userId={userData.userId} />
          </div>
        </div>
      </div>
    </div>
  );
}
