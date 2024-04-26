import { CodeModal } from './CodeModal';
import { randomBytes } from 'crypto';
import { Button, List } from 'antd';
import React from 'react';

// list of files uploaded
const UploadedFileList = (props: { fileList: File[], isFileList1: boolean }) => {
    const [fileTitle, setTitle] = React.useState("");
    const [fileContent, setContent] = React.useState("");
    const [codeVisible, setCodeVisible] = React.useState(false);

    // shows pop up preview of code
    function showCode(file: File) {
        setCodeVisible(true);
        setTitle(file.name);
        file.text().then(t => setContent(t));
    }

    return (
        <>
            <List
                className="overflow-auto vertical-scrollable"
                size="small"
                bordered
                itemLayout="horizontal"
                dataSource={props.fileList}
                renderItem={file => (
                    <List.Item key={file.name + randomBytes(4).toString()} onClick={() => showCode(file)}>
                        {/* crashes if not code */}
                        <Button type="link" onClick={() => showCode(file)}>{file.name}</Button>
                    </List.Item>
                )} 
            />

            <CodeModal title={fileTitle} content={fileContent} setCodeVisible={setCodeVisible} visible={codeVisible}/>
        </>
    );
}

export default UploadedFileList