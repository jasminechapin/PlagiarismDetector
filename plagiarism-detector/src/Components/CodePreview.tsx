import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import LineRange from '../Util/LineRange';

// syntax hightlighted code
const CodePreview = (props: { codeString: string, startLineNum: number, lineRange: LineRange }) => {

  // checks the list of plagiarism line numbers to see if this line is sus
  function checkPlagiarism(): boolean {
    return props.lineRange.start != -1 &&
      props.startLineNum >= props.lineRange.start && props.startLineNum <= props.lineRange.end;
  }

  // makes plagiarized code pink
  function getCodeProps(): React.HTMLProps<HTMLElement> { 
    return checkPlagiarism() ? { className: "plagiarismCode" } : { className: "" };
  }

  return (
    <div className="code">
      <SyntaxHighlighter
        language="typescript"
        style={github}
        customStyle={{ background: "white", margin: 1, padding: 0, overflowX: "visible" }}
        CodeTag="span"
        showLineNumbers
        lineNumberStyle={{ textAlign: "start" }}
        startingLineNumber={props.startLineNum}
        codeTagProps={getCodeProps()}
        children={props.codeString} />
    </div>
  );
};

export default CodePreview