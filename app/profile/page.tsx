"use client";

import { Button, TextInput } from "@components/form";
import { getInitial } from "@lib/utils";
import React from "react";
import { CgProfile } from "react-icons/cg";
import {
  HiOutlineBriefcase,
  HiOutlineKey,
  HiOutlineLogout,
  HiOutlineMail,
  HiOutlineTrash,
  HiPencil,
} from "react-icons/hi";

const ProfileSection = () => {
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const initialName = getInitial(user.username);

  const updateProfile = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const req = {
      username: event.currentTarget.username.value,
      email: event.currentTarget.email.value,
      profile: event.currentTarget.profile.value,
    };

    await fetch("/api/users", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: req.username,
        email: req.email,
        profile: req.profile,
      }),
    })
      .then((res) => {
        console.log(res);
        setStatus(() => "success");
      })
      .catch((err) => {
        console.log(err);
        setStatus(() => "error");
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <h2>Profile</h2>
      <div className="card relative w-[72px] aspect-square mx-auto rounded-full grid place-items-center text-2xl font-semibold text-gray-950 bg-profile select-none">
        {initialName}
        <div className="absolute right-0 bottom-0 w-5 aspect-square rounded-full bg-card grid place-items-center text-title border border-white/20 cursor-pointer">
            <HiPencil size={12} />
        </div>
      </div>
      <form onSubmit={updateProfile} className="space-y-4">
        <TextInput
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={user.username}
          color="text-status-blue"
          icon={<CgProfile size={22} />}
        />
        <TextInput
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={user.email}
          color="text-status-blue"
          icon={<HiOutlineMail size={22} />}
        />
        <TextInput
          type="text"
          id="profile"
          name="profile"
          placeholder="Profile"
          value={user.profile}
          color="text-status-blue"
          icon={<HiOutlineBriefcase size={22} />}
        />
        <Button
          className="bg-status-blue text-white tracking-wide"
          disabled={loading}
          type="submit">
          {loading ? "Updating..." : "Update Profile"}
        </Button>
      </form>
    </>
  );
};

const SettingsSection = () => {
  return (
    <>
      <h2>Settings</h2>
      <Button align="left" accent="yellow">
        <span className="text-status-yellow">
          <HiOutlineKey size={22} />
        </span>
        Reset Password
      </Button>
      <Button align="left" accent="red" outline>
        <span className="text-status-red">
          <HiOutlineTrash size={22} />
        </span>
        Clear Data
      </Button>
      <Button align="left" accent="red" outline>
        <span className="text-status-red">
          <HiOutlineLogout size={22} />
        </span>
        Sign Out
      </Button>
    </>
  );
};

const Profile = () => {
  return (
    <div className="space-y-8">
      <section id="profile" className="space-y-4">
        <ProfileSection />
      </section>
      <section id="settings" className="space-y-4">
        <SettingsSection />
      </section>
    </div>
  );
};

export default Profile;

const user = {
  id: "1",
  username: "M Hibatillah Hasanin",
  email: "hibatillahhabib@gmail.com",
  profile: "student",
  isDark: true,
  createdAt: new Date(),
};
