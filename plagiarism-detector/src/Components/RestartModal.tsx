import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React from "react";

// list of files uploaded
const RestartModal = () => {
    
  // refreshes the window to clear the detector
    const restartDetector = () => {
        window.location.reload();
      }
    
      // creates a modal to warn the user before they reset the tool
      const warning = () => {
        Modal.confirm ({
          title: 'Restart Detector?',
          icon: <ExclamationCircleOutlined/>,
          content: 'All progress will be lost.',
          onOk() { restartDetector() },
          onCancel() { },
      });
    }

    return (
        <Button className="bg-danger" style={{textAlign: "right"}} onClick={warning}><h6 style={{ color:"white"}}>Start Over</h6></Button>
    );
}

export default RestartModal