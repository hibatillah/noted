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
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { TbLogout } from "react-icons/tb";

export default function DialogLogout({ userId }: { userId: string }) {
  const router = useRouter();

  const handleLogout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast({
      title: "Logged Out!",
    });
    router.push("/auth");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="w-full border border-destructive justify-start gap-3">
          <TbLogout size={20} className="text-status-red" />
          Logout
        </Button>
      </DialogTrigger>

      <DialogContent className="space-y-7 rounded-lg backdrop:blur-3xl">
        <DialogHeader className="flex justify-between items-start">
          <DialogTitle className="capitalize">You sure to Log Out?</DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <form onSubmit={handleLogout} className="w-full space-y-4">
            <DialogClose asChild>
              <Button
                type="submit"
                variant="destructive"
                className="w-full"
                autoFocus>
                Log Out
              </Button>
            </DialogClose>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
