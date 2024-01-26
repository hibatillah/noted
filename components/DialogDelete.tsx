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
import { FaRegFolderClosed } from "react-icons/fa6";
import { LuTrash2 } from "react-icons/lu";
import { TbColorSwatch } from "react-icons/tb";

export default function DialogDelete({ type }: { type?: string }) {
  const handleDelete = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = event.currentTarget.name;

    console.log(name.valueOf);
  };

  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="text-status-red hover:bg-destructive hover:text-destructive-foreground">
                <LuTrash2 size={20} />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>

          <TooltipContent side="bottom">
            <p>Delete {type}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DialogContent className="space-y-5 rounded-lg backdrop:blur-3xl">
        <DialogHeader className="flex justify-between items-start">
          <DialogTitle>Sure to delete this {type}?</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleDelete} className="space-y-4">
          <div className="flex items-center gap-3">
            <Button
              size="icon"
              variant="secondary"
              className="grow-0 focus-within:bg-background focus-within:ring-2 focus-within:ring-destructive">
              {type === "folders" ? <FaRegFolderClosed /> : <TbColorSwatch />}
            </Button>
            <Label htmlFor="name" className="grow">
              <Input
                type="text"
                id="name"
                name="name"
                value="Study"
                placeholder={`Your ${type} name`}
                className="focus-visible:ring-destructive"
                autoFocus={false}
                readOnly
              />
            </Label>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="submit"
                variant="destructive"
                className="min-w-[30%]"
                autoFocus>
                Delete
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
