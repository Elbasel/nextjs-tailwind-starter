import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { Modal } from "@components/Modal";
import { Textarea } from "@components/Textarea";
import { Heading } from "@components/Typography/Heading";
import React, { useState } from "react";

type TestModalProps = {};

export const TestModal = ({}: TestModalProps): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  const handleModalClose = () => setIsOpen(false);

  const handleContainerClick = () => setIsOpen(true);

  return (
    <>
      <Heading level={2}>Modal</Heading>
      <Divider />
      <Button onClick={handleContainerClick}>Open Modal</Button>

      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
        slideFrom="top"
        title="Teach the ai"
      >
        <Textarea
          autoFocus
          value={textAreaValue}
          onChange={handleTextAreaChange}
          placeholder={"Some text or a url..."}
        />
        <Button>Teach</Button>
      </Modal>
    </>
  );
};
