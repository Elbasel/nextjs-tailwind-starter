import React from "react";
import { Main } from "@components/Main";
import { TestModal } from "@components/testPageComponents/TestModal";
import { TestGetDocuments } from "@components/testPageComponents/TestGetDocument";
import { TestCheckbox } from "@components/testPageComponents/TestCheckbox";
import { TestPopover } from "@components/TestPopover";
import { TestTerminalOutput } from "@components/testPageComponents/TestTerminalOutput";

type TestProps = {};

export const Test = ({}: TestProps): React.ReactElement => {
  return (
    <Main>
      <TestModal />
      <TestCheckbox />
      <TestPopover />
      <TestTerminalOutput />
      <TestGetDocuments />
    </Main>
  );
};

export default Test;
