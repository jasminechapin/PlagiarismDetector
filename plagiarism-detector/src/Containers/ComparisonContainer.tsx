import React from 'react';
import { Divider, Col, Row } from 'antd';
import ComparisonFileList from '../Components/ComparisonFileList';
import PlagiarismIncidentList from '../Components/PlagiarismIncidentList';
import UserFile from '../Model/UserFile';
import Upload from '../Util/Upload';

// the side-by-side programs page
const ComparisonContainer = (props: {upload: Upload, file: UserFile | undefined, setFile: Function, setSelectedPlagiarism: Function, home: boolean}) => {
    const [plagiarismDrawerVisible, setPlagiarismDrawerVisible] = React.useState(false);

    // shows plagiarism list drawer
    const showPlagiarismIncidents = (show: boolean, file?: UserFile) => {
        setPlagiarismDrawerVisible(show);
        props.setFile(file);
    }

    return (
        <div>
            <PlagiarismIncidentList showDrawer={showPlagiarismIncidents} visible={plagiarismDrawerVisible} 
                selectedFile={props.file} setSelectedPlagiarism={props.setSelectedPlagiarism} home={props.home}/>
                <Row>
                    <Col span={11}>
                        <Divider orientation="center"><h4>Program 1</h4></Divider>
                        <ComparisonFileList fileList={props.upload.list1} isFileList1={true} 
                            showPlagiarismList={showPlagiarismIncidents} selectedFile={props.file}/>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        <Divider orientation="center"><h4>Program 2</h4></Divider>
                        <ComparisonFileList fileList={props.upload.list2} isFileList1={false} 
                            showPlagiarismList={showPlagiarismIncidents} selectedFile={props.file}/>
                    </Col>
                </Row>
        </div>
    );
}

export default ComparisonContainer