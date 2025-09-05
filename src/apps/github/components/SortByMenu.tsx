/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
export default function SortByMenu({sortMethod}:{sortMethod:any}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-amber-300">Sort <ChevronDown/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mx-4 bg-white border-gray-200 shadow-md">
        <DropdownMenuLabel>Sort by: </DropdownMenuLabel>
        <DropdownMenuSeparator className="border-gray-700"/>
        <DropdownMenuItem onClick={()=>sortMethod("stars")}>Stars</DropdownMenuItem>
        <DropdownMenuItem onClick={()=>sortMethod("forks")}>Forks</DropdownMenuItem>
        <DropdownMenuItem onClick={()=>sortMethod("updated")}>Last Updated</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
