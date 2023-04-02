// TestPopover.tsx
import React, { useState } from "react";
import { Divider } from "./Divider";
import { Input } from "./Input";
import { Popover } from "./Popover";
import { Heading } from "./Typography/Heading";

type TestPopoverProps = {};

export const TestPopover = ({}: TestPopoverProps): React.ReactElement => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverText, setPopoverText] = useState("Enter popover text here");
  const [popoverSize, setPopoverSize] = useState({ width: 0, height: 0 });

  return (
    <>
      <Heading level={2}>Popover</Heading>
      <Divider />
      <Input
        className="mb-2 text-base"
        placeholder="Enter Popover text"
        value={popoverText}
        onChange={(e) => setPopoverText(e.target.value)}
      />
      <p className="mb-4">
        <code>Popover is </code>
        {popoverOpen ? (
          <span className="text-green-600">shown!</span>
        ) : (
          <span className="text-red-600">hidden!</span>
        )}
      </p>
      <div
        onMouseEnter={() => setPopoverOpen(true)}
        onMouseLeave={() => setPopoverOpen(false)}
        className="relative flex flex-col items-center justify-center h-32 text-center transition-all border border-gray-700 hover:rounded-xl hover:border-blue-500"
      >
        <p className="mb-2">Hover over me to see the popover!</p>
        <p>
          Notice how the popover container needs to have the{" "}
          <code>relative</code> class in order for it to work correctly
        </p>
        <Popover open={popoverOpen}>{popoverText}</Popover>
      </div>
    </>
  );
};
