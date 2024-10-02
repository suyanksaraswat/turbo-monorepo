"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  Button,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@repo/ui";

// import { DropDownMenu, DropDownMenuProps } from '../../../../components';

type CategoryDropdownProps = Pick<any, "options" | "selectedOption">;

export function CategoryDropdown({ options, selectedOption }: CategoryDropdownProps) {
  const filterName = "category";
  const defaultOption = "All";

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function updateSelectedOption(selection: string) {
    const params = new URLSearchParams(searchParams);
    if (selection === defaultOption) {
      params.delete(filterName);
    } else {
      params.set(filterName, selection);
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">Category</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rounded-[1rem]">
        <DropdownMenuGroup>
          {[defaultOption, ...options]?.map((o, i) => (
            <DropdownMenuItem key={i} onClick={() => updateSelectedOption(o)}>
              {o}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
