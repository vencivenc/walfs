import React, { useState } from "react";
import AceEditorBase from "react-ace";
import "ace-builds/src-noconflict/mode-json5";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";
import { Ace, require as aceRequired } from "ace-builds";
import { Button } from "antd";

type AceEditorProps = {
  value?: string;
  onChange?: (value: string) => void;
};
const beautify = (session?: Ace.EditSession) => {
  if (!session) {
    return;
  }

  const beautify = aceRequired("ace/ext/beautify");
  beautify.beautify(session);
};

export const AceEditor: React.FC<AceEditorProps> = ({ value, onChange }) => {
  const [element, setElement] = useState<Ace.Editor>();

  const onAceChange = (value: string, _: any) => {
    if (onChange) {
      onChange(value || "");
    }
  };

  const onLoad = (e: Ace.Editor) => {
    setElement(e);
    console.log("AceEditor loaded...");
  };

  const onBeautify = () => {
    beautify(element?.session);
  };

  return (
    <>
      <Button onClick={onBeautify} type="link">
        beautify
      </Button>
      <AceEditorBase
        placeholder="{}"
        mode="json5"
        theme="monokai"
        name="blah2"
        onLoad={onLoad}
        onChange={onAceChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={value}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </>
  );
};
