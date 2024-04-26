import { Button, Modal } from "antd";
import React from "react";
import CodePreview from "./CodePreview";

// a pop up that shows syntax highlighted code
export const CodeModal = (props: {title: string, content: string, setCodeVisible: Function, visible: boolean}) => {

  // closes pop up
  const handleCancel = () => {
    props.setCodeVisible(false);
  };

  return (
    <>
      <Modal
        width={900}
        title={props.title}
        visible={props.visible}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
          <div className="overflow-auto vertical-scrollable">
        <CodePreview codeString={props.content} startLineNum={1} lineRange={{start: -1, end: -1}}/>
        </div>
      </Modal>
    </>
  )
}