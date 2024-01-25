"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";

export default function DialogCreate({
  type,
  trigger = "button",
}: {
  type: "folder" | "label";
  trigger?: "button" | "link";
}) {
  const [isFormFilled, setIsFormFilled] = useState(true);
  const [inputField, setInputField] = useState("");

  const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = event.currentTarget.new;

    console.log(name.value);
  };

  useEffect(() => {
    inputField !== "" ? setIsFormFilled(false) : setIsFormFilled(true);
  }, [inputField, isFormFilled]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger === "button" ? (
          <button
            autoFocus={false}
            className="px-2 py-1.5 rounded-md hover:bg-card cursor-pointer">
            <FiPlus />
          </button>
        ) : (
          <button
            autoFocus={false}
            className="flex items-center justify-center gap-1 text-title group *:transition-all *:ease-out">
            <span className="translate-x-2 group-hover:-translate-x-0">
              Create one
            </span>
            <FiPlus className="-translate-x-2 invisible opacity-0 group-hover:translate-x-0 group-hover:visible group-hover:opacity-100" />
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="space-y-5 rounded-lg">
        <DialogHeader className="flex justify-between items-start">
          <DialogTitle className="capitalize">Create {type}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleCreate} className="block space-y-5">
          <Label htmlFor="new">
            <Input
              type="text"
              id="new"
              name="new"
              placeholder={`Input your ${type} name`}
              onChange={(event) => setInputField(event.target.value)}
              autoComplete="off"
              autoFocus
              required
            />
          </Label>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="submit"
                variant="default"
                disabled={isFormFilled}
                className="min-w-[30%]">
                Create
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
