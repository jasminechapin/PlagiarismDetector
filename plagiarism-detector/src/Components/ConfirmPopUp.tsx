import { Button, Modal } from "antd";
import React from "react";
import UploadHandlerService from "../Services/UploadHandlerService";

// pop up for checking files
export const ConfirmPopUp = (props: { setUpload: Function }) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  // shows pop up
  const showPopconfirm = () => {
    setVisible(true);
  };

  // starts plagiarism tool - creates user files
  const handleOk = () => {
    setConfirmLoading(true);
    UploadHandlerService.convertFiles(props.setUpload);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 3000);
  };

  // closes pop up
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal
        title={UploadHandlerService.getError() !== undefined ? `${UploadHandlerService.getError().title}` : 
          "Are you sure about these files?"}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button onClick={handleCancel}>
            Go Back
          </Button>,

          UploadHandlerService.getError() === undefined &&
          <Button loading={confirmLoading} type="primary" onClick={handleOk}>
            Run Plagiarism Tool
          </Button>,
        ]}
      >
      <p>{UploadHandlerService.getError() !== undefined ? `${UploadHandlerService.getError().content}` : 
        `${UploadHandlerService.getUnsupportedFilesText()}`}</p>
      </Modal>
      <Button type="primary" size="large" className="CompareButton" onClick={showPopconfirm}>
        Compare Programs
      </Button>
    </>
  )
}