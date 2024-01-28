import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { LuTrash2 } from "react-icons/lu";

export default function DialogClear({ userId }: { userId: string }) {
  const handleLogout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast({
      title: "Data Cleared!",
      description: "All your notes has been deleted",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="w-full border border-destructive justify-start gap-3">
          <LuTrash2 size={20} className="text-status-red" />
          Clear Data
        </Button>
      </DialogTrigger>

      <DialogContent className="space-y-5 rounded-lg backdrop:blur-3xl">
        <DialogHeader className="flex flex-col items-start gap-2">
          <DialogTitle className="capitalize">
            You Sure Clear All Data?
          </DialogTitle>
          <DialogDescription className="text-sm text-start">
            Your notes will be deleted and not be able to be viewed again
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-7">
          <form onSubmit={handleLogout} className="w-full space-y-4">
            <DialogClose asChild>
              <Button
                type="submit"
                variant="destructive"
                className="w-full"
                autoFocus>
                Clear Data
              </Button>
            </DialogClose>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
