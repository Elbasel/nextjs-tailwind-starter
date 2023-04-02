import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Button } from "@components/Button";
import { XMarkIcon } from "@heroicons/react/24/solid";

type ModalProps = {
  title?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  slideFrom?: "top" | "bottom" | "left" | "right" | "center";
};

const slideFromClasses: {
  [key: string]: {
    enterFrom: string;
    enter: string;
    enterTo: string;
    leave: string;
    leaveFrom: string;
    leaveTo: string;
  };
} = {
  center: {
    enterFrom: "opacity-0",
    enter: "ease-out duration-300",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
  },
  top: {
    enterFrom: "opacity-0",
    enter: "ease-out duration-300 bg-red-200",
    enterTo: "opacity-100 text-red-500",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
  },
  bottom: {
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enter: "ease-out duration-300",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
  },
  left: {
    enterFrom: "opacity-0 translate-x-4 sm:translate-x-0 sm:scale-95",
    enter: "ease-out duration-300",
    enterTo: "opacity-100 translate-x-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-x-0 sm:scale-100",
    leaveTo: "opacity-0 translate-x-4 sm:translate-x-0 sm:scale-95",
  },
};

export const Modal = ({
  children,
  isOpen = false,
  onClose,
  title,
  slideFrom = "center",
}: ModalProps) => {
  return (
    <>
      <Transition
        appear
        show={isOpen}
        {...slideFromClasses[slideFrom]}
        as="div"
      >
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child as={Fragment}>
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95 -translate-y-4"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[98vw] text-white min-h-[94vh] p-6 overflow-hidden text-left align-middle transition-all transform bg-gray-700 shadow-xl rounded-2xl">
                  <div className="flex items-center justify-between px-2 border border-white rounded-lg ">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-medium leading-6"
                    >
                      {title}
                    </Dialog.Title>
                    <div>
                      <Button
                        onClick={onClose}
                        className="bg-transparent hover:bg-transparent hover:text-red-400"
                      >
                        <XMarkIcon className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-white">{children}</div>

                  <div className="mt-4"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
