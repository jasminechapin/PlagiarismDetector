import { CheckCircleTwoTone, WarningTwoTone } from "@ant-design/icons";
import { Button, List } from "antd";
import React from "react";
import UserFile from "../Model/UserFile";
import UploadHandlerService from "../Services/UploadHandlerService";


// list of files uploaded
const ComparisonFileList = (props: { fileList: UserFile[], isFileList1: boolean, showPlagiarismList: Function, selectedFile?: UserFile }) => {
    // TODO: populate this!!
    const plagiarismFileNames: UserFile[] = UploadHandlerService.getPlagiarismEntries(props.isFileList1 ? 1 : 2);

    // set the selected file 
    const selectFile = (file: UserFile) => {
        props.showPlagiarismList(true, file);
    }

    return (<>
        <List
            className="overflow-auto vertical-scrollable"
            size="small"
            bordered
            itemLayout="horizontal">
            {
                props.fileList.map(file => {
                    if (file !== props.selectedFile) {
                        return (
                            <List.Item key={file.getName() + file.getProgramNum()} onClick={() => selectFile(file)}>
                                { /* need to get a list of all the plagiarism filenames */}
                                <Button type="link">{file.getName()}</Button>
                                {!plagiarismFileNames.includes(file) &&
                                    <Button className="right-align" type="text" icon={<CheckCircleTwoTone twoToneColor="#52c41a" />} />}
                                {plagiarismFileNames.includes(file) &&
                                    <Button className="right-align" type="text" icon={<WarningTwoTone twoToneColor="#ff0029" />} />}
                            </List.Item>
                        );
                    } else {
                        return (
                            <List
                                className="overflow-auto vertical-scrollable"
                                size="small"
                                bordered
                                itemLayout="horizontal"><List.Item key={file.getName() + props.isFileList1} onClick={() => selectFile(file)} style={{ background: "#f2f2f2" }}>
                                    <Button type="link">{file.getName()}</Button>
                                    {!plagiarismFileNames.includes(file) &&
                                        <Button className="right-align" type="text" icon={<CheckCircleTwoTone twoToneColor="#52c41a" />} />}
                                    {plagiarismFileNames.includes(file) &&
                                        <Button className="right-align" type="text" icon={<WarningTwoTone twoToneColor="#ff0029" />} />}
                                </List.Item>
                            </List>);
                    }
                })}
        </List>
    </>);
}

export default ComparisonFileList