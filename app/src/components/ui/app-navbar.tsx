import React from "react";
import {
  BoltIcon,
  BookOpenIcon,
  ChevronDownIcon,
  Layers2Icon,
  LogOutIcon,
  PinIcon,
  UserPenIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router";

const Appnavbar: React.FC = () => {
    const navigate = useNavigate()
    const handleLgout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
  return (
    <div className="p-4 flex items-end justify-end border-b border-gray-100">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
            <Avatar>
              <AvatarImage
                src="https://www.untitledui.com/images/avatars/noah-pierre?"
                alt="Profile image"
              />
              <AvatarFallback>KK</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="max-w-64">
          <DropdownMenuLabel className="flex min-w-0 flex-col">
            <span className="truncate text-sm font-medium text-foreground">
              Keith Kennedy
            </span>
            <span className="truncate text-xs font-normal text-muted-foreground">
              k.kennedy@coss.com
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <BoltIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Option 1</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Layers2Icon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Option 2</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BookOpenIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Option 3</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <PinIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Option 4</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserPenIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Option 5</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLgout}>
            <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Appnavbar;
