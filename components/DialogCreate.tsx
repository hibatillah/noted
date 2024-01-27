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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { FaRegFolderClosed } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { TbColorSwatch } from "react-icons/tb";

export default function DialogCreate({
  type,
  trigger = "button",
}: {
  type: "folder" | "label";
  trigger?: "button" | "link";
}) {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [inputField, setInputField] = useState("");

  const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFormFilled(false)
    setInputField("")

    const name = event.currentTarget.newName;
    console.log(name?.value);
  };

  useEffect(() => {
    inputField !== "" ? setIsFormFilled(true) : setIsFormFilled(false);
  }, [inputField, isFormFilled]);

  return (
    <Dialog>
      {trigger === "button" ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <button
                  autoFocus={false}
                  className="px-2 py-1.5 rounded-md hover:bg-card cursor-pointer">
                  <FiPlus />
                </button>
              </DialogTrigger>
            </TooltipTrigger>

            <TooltipContent
              align={trigger === "button" ? "end" : "center"}
              side="bottom">
              <p>Create {type}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <DialogTrigger asChild>
          <button
            autoFocus={false}
            className="flex items-center justify-center gap-1 text-title group *:transition-all *:ease-out">
            <span className="translate-x-2 group-hover:-translate-x-0">
              Create one
            </span>
            <FiPlus className="-translate-x-2 invisible opacity-0 group-hover:translate-x-0 group-hover:visible group-hover:opacity-100" />
          </button>
        </DialogTrigger>
      )}
      <DialogContent className="space-y-5 rounded-lg backdrop:blur-3xl">
        <DialogHeader className="flex justify-between items-start">
          <DialogTitle className="capitalize">Create {type}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleCreate} className="space-y-4">
          <div className="flex items-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="grow-0 focus-within:bg-background focus-within:ring-2 focus-within:ring-primary">
                    {type === "folder" ? (
                      <FaRegFolderClosed />
                    ) : (
                      <TbColorSwatch />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Change Icon</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Label htmlFor="newName" className="grow">
              <Input
                type="text"
                id="newName"
                name="newName"
                placeholder={`Input your ${type} name`}
                onChange={(event) => setInputField(event.target.value)}
                autoComplete="off"
                autoFocus
                required
              />
            </Label>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="submit"
                variant="default"
                disabled={!isFormFilled}
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
