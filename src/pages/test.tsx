import React from "react";
import { Main } from "@components/Main";
import { TestModal } from "@components/testPageComponents/TestModal";
import { TestGetLinks } from "@components/testPageComponents/TestGetLinks";
import { TestCheckbox } from "@components/testPageComponents/TestCheckbox";
import { TestPopover } from "@components/TestPopover";
import { TestTerminalOutput } from "@components/testPageComponents/TestTerminalOutput";
import { TestGetEmbeddings } from "@components/testPageComponents/TestGetEmbeddings";

type TestProps = {};

export const Test = ({}: TestProps): React.ReactElement => {
  return (
    <Main>
      <TestModal />
      <TestCheckbox />
      <TestPopover />
      <TestTerminalOutput />
      <TestGetLinks />
      <TestGetEmbeddings />
    </Main>
  );
};

export default Test;
