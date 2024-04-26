import { Col, Divider, Row } from "antd";
import React from "react";
import { ConfirmPopUp } from "../Components/ConfirmPopUp";
import Uploader from "../Components/Uploader";

// the upload page
const UploadContainer = (props: { setDoneUploading: any; }) => {

    return (
      <div className="upload">
      <Row>
          <Col span={11}>
            <Uploader isFileList1={true} />
          </Col>
          <Col span={2}>
          </Col>
          <Col span={11}>
            <Uploader isFileList1={false} />
          </Col>
          <Divider/>
        </Row>
          <ConfirmPopUp setUpload={props.setDoneUploading}/>
      </div>
    );
}

export default UploadContainer;