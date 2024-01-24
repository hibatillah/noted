import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Divider({
  className,
  text = "or",
}: {
  className?: string;
  text?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Separator className="flex-1" />
      <p className="flex-none text-foreground text-sm">{text}</p>
      <Separator className="flex-1" />
    </div>
  );
}
