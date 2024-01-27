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
import { MdOutlineModeEdit } from "react-icons/md";
import { TbColorSwatch } from "react-icons/tb";

export default function DialogEdit({ type }: { type?: string }) {
  const folderName = "Study";

  const [isFormFilled, setIsFormFilled] = useState(false);
  const [inputField, setInputField] = useState(folderName);

  const handleEdit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = event.currentTarget.editedName;
  };

  useEffect(() => {
    inputField !== "" ? setIsFormFilled(true) : setIsFormFilled(false);
  }, [inputField, isFormFilled]);

  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button size="icon" variant="ghost">
                <MdOutlineModeEdit size={20} />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>

          <TooltipContent side="bottom">
            <p>Edit {type}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DialogContent className="space-y-5 rounded-lg backdrop:blur-3xl">
        <DialogHeader className="flex justify-between items-start">
          <DialogTitle className="capitalize">Edit {type}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleEdit} className="space-y-4">
          <div className="flex items-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="grow-0 focus-within:bg-background focus-within:ring-2 focus-within:ring-primary">
                    {type === "folders" ? (
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

            <Label htmlFor="editedName" className="grow">
              <Input
                type="text"
                id="editedName"
                name="editedName"
                placeholder={`Update your ${type} name`}
                onChange={(event) => setInputField(event.target.value)}
                value={inputField}
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
                Update
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
