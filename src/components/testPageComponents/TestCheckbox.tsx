import { Checkbox } from "@components/Checkbox";
import { Divider } from "@components/Divider";
import { Heading } from "@components/Typography/Heading";
import React, { useState } from "react";

type TestFormProps = {};

export const TestCheckbox = ({}: TestFormProps): React.ReactElement => {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(false);
  return (
    <>
      <Heading level={2}>Checkbox</Heading>
      <Divider />
      <Checkbox
        name="default-checkbox"
        label="default checkbox"
        placeholder="just a checkbox"
        checked={checkboxIsChecked}
        onChange={(e) => setCheckboxIsChecked(e.target.checked)}
      />
      <p>
        <code>checked</code> is{" "}
        {checkboxIsChecked ? (
          <span className="text-green-600">true</span>
        ) : (
          <span className="text-red-600">false</span>
        )}
      </p>
    </>
  );
};
