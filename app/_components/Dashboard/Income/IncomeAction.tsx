import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import Link from "next/link";

export default function IncomeAction({ id }: { id: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"secondary"} size={"icon"}>
          <MoreHorizontal className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Pencil className="size-4 mr-2" />
          <Link href={`/dashboard/income/${id}`}>Edit</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash className="size-4 mr-2" />
          <Link href={`/dashboard/income/${id}/delete`}>Delete</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
