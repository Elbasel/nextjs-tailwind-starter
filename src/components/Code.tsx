import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

type CodeProps = {
  code?: string;
  onChange?: (code: string) => void;
};

export const Code = ({ code = "code", onChange = () => {} }: CodeProps) => {
  return (
    <Editor
      value={code}
      onValueChange={onChange}
      highlight={(code) => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
      }}
    />  
  );
};
