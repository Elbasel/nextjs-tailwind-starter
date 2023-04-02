import React from "react";
import { Popover as HeadlessPopover, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

type PopoverProps = {
  id?: string;
  children: React.ReactNode;
  open?: boolean;
};

const PopoverTransition = {
  enter: "transition ease-out duration-200",
  enterFrom: "opacity-0 translate-y-1",
  enterTo: "opacity-100 translate-y-0",
  leave: "transition ease-in duration-150",
  leaveFrom: "opacity-100 translate-y-0",
  leaveTo: "opacity-0 translate-y-1",
};

const baseClassName =
  "absolute z-10 px-3 py-2 font-semibold -translate-x-1/2 bg-gray-700 border-gray-600 rounded-lg left-1/2 -top-12";

export const Popover = ({ children, open }: PopoverProps) => {
  return (
    <HeadlessPopover className={twMerge(baseClassName, !open && "invisible")}>
      <Transition
        as={HeadlessPopover.Panel}
        {...PopoverTransition}
        role="tooltip"
        appear
        show={open}
      >
        {children}
        <div className="absolute w-0 h-0 -translate-x-1/2 border-t-8 left-1/2 border-x-8 border-x-transparent border-t-gray-700 -bottom-4"></div>
      </Transition>
    </HeadlessPopover>
  );
};
