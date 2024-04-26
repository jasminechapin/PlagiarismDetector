import { CaretRightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, List, Affix } from "antd";
import React from "react";
import CodePreview from "../Components/CodePreview";
import PlagiarismIncidentList from "../Components/PlagiarismIncidentList";
import PlagiarismEntry from "../Model/PlagiarismEntry";
import UserFile from "../Model/UserFile";

// the plagiarism entry page
const CodeContainer = (props: { plagiarism: PlagiarismEntry, setSelectedPlagiarism: Function }) => {    
    const [plagiarismDrawerVisible, setPlagiarismDrawerVisible] = React.useState(false);
    
    const leftPlagiarismStart = props.plagiarism.getLeftFileCode().getStart();
    const leftPlagiarismEnd = props.plagiarism.getLeftFileCode().getEnd();
    const rightPlagiarismStart = props.plagiarism.getRightFileCode().getStart();
    const rightPlagiarismEnd = props.plagiarism.getRightFileCode().getEnd();

    const leftLineRange = {start: leftPlagiarismStart, end: leftPlagiarismEnd}
    const rightLineRange = {start: rightPlagiarismStart, end: rightPlagiarismEnd}


    const leftFile = props.plagiarism.getLeftFileCode().getParent();
    const rightFile = props.plagiarism.getRightFileCode().getParent();

    // a line of code
    type Line = {text: string, lineNum: number};

    // shows plagiarism list drawer
    const showPlagiarismIncidents = (show: boolean, file?: UserFile) => {
        setPlagiarismDrawerVisible(show);
    }

    const getPlagiarismLines = () => {

    }

    // get the list of lines of code
    const getList = (file: UserFile) => {
        var i: number = 1;
        let list: Line[] = [];

        (file.getContent().split(/\r\n|\r|\n/g)).map(line =>
            {
                list.push({text: line, lineNum: i})
                i++;
            }
        )

        return list;
    }

    return (
        <div>
            <Button type="primary" onClick={() => showPlagiarismIncidents(true, leftFile)}>Open Plagiarism Entries</Button>
            <PlagiarismIncidentList showDrawer={showPlagiarismIncidents} visible={plagiarismDrawerVisible} 
                selectedFile={props.plagiarism.getLeftFileCode().getParent()} setSelectedPlagiarism={props.setSelectedPlagiarism} home={false}/>
            <Divider orientation="center"><h4>{"Plagiarism for " + leftFile.getName().slice(0, -3) + " in Program " + leftFile.getProgramNum()}</h4></Divider>
            
            <Row>
                <Col span={12} style={{ paddingRight: 10 }}>
                    <List
                        split={false}
                        style={{overflowX: "scroll"}}
                        bordered
                        itemLayout="horizontal"
                        dataSource={getList(leftFile)}
                        renderItem={line => (
                            <List.Item style={{ padding: 0, margin: 0, height: 24, overflowX: "visible" }}>
                                <CodePreview codeString={line.text} startLineNum={line.lineNum} 
                                    lineRange={leftLineRange} />
                            </List.Item>
                        )}
                    >
                    </List>
                </Col>
                <Col span={12} style={{ paddingRight: 10 }}>
                    <List
                        split={false}
                        style={{overflowX: "scroll"}}
                        bordered
                        itemLayout="horizontal"
                        dataSource={getList(rightFile)}
                        renderItem={line => (
                            <List.Item style={{ padding: 0, margin: 0, height: 24, overflowX: "visible" }}>
                                <CodePreview codeString={line.text} startLineNum={line.lineNum} 
                                    lineRange={rightLineRange} />
                            </List.Item>
                        )}
                    >
                    </List>
                </Col>
            </Row>

        </div>
    );
}

export default CodeContainer