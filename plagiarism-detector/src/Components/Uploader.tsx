import { Upload, Button, Divider } from 'antd';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import Dragger from 'antd/lib/upload/Dragger';
import UploadHandlerService from '../Services/UploadHandlerService';
import UploadedFileList from './UploadedFileList';
import { RcFile } from 'antd/lib/upload';

// drag and drop and button for uploading files
const Uploader = (props: { isFileList1: boolean; }) => {
  const [fileList, setFileList] = useState(Array<RcFile>());
  const [addedProgram, setAddedProgram] = useState(false);

  // called when uploader's filelist is set
  async function onFileChange(info: any) {
    setFileList(info.fileList);
    setAddedProgram(true);
  };

  // called when user hits okay in select dir window
  const beforeUpload = (file: RcFile, list: RcFile[]) => {
    let newType = file.type === "video/vnd.dlna.mpeg-tts" ? "text/plain" : file.type;
    let newFile = new File([file], file.name, { type: newType });
    props.isFileList1 ? UploadHandlerService.fileList1.push(newFile) : UploadHandlerService.fileList2.push(newFile);
    return false;
  }

  // removes the set program
  const resetProgram = () => {
    setAddedProgram(false);
    setFileList([]);
    if (props.isFileList1) {
      UploadHandlerService.setFileList1([]);
    } else {
      UploadHandlerService.setFileList2([]);
    }
  }

  return (
    <>
      {
        !addedProgram &&
        <>
          <Divider orientation="center"><h4>Program {props.isFileList1 ? 1 : 2}</h4></Divider>
        </>
      }
      {
        addedProgram &&
        <>
          <Divider orientation="center"><h4>Program {props.isFileList1 ? 1 : 2} Files</h4></Divider>
          <Button className="replaceButton" onClick={resetProgram}>Replace Program</Button>
        </>
      }
      {
        !addedProgram && <>
          <Dragger
            directory
            showUploadList={false}
            multiple
            fileList={fileList}
            onChange={onFileChange}
            beforeUpload={beforeUpload}
            className="UploadArea">

            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <h5 className="ant-upload-text">Click or drag a folder to upload a program</h5>
          </Dragger>
          <Upload
            directory
            showUploadList={false}
            multiple
            fileList={fileList}
            onChange={onFileChange}
            beforeUpload={beforeUpload}>
            <Button icon={<UploadOutlined />}>Upload Folder</Button>
          </Upload>
        </>
      }
      {
        addedProgram &&
        <>
          <UploadedFileList fileList={props.isFileList1 ? UploadHandlerService.fileList1 : UploadHandlerService.fileList2} isFileList1={props.isFileList1} />
        </>
      }

    </>
  );
}

export default Uploader