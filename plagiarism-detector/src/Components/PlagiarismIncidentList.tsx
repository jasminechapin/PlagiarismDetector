import { List, Button, Drawer, Upload } from 'antd';
import UserFile from '../Model/UserFile';
import PlagiarismEntry from '../Model/PlagiarismEntry';
import React from 'react';
import UploadHandlerService from '../Services/UploadHandlerService';

// list plagiarism incidents for the selected user file
const PlagiarismIncidentList = (props: {showDrawer: any, visible: boolean, selectedFile?: UserFile, setSelectedPlagiarism: Function, home: boolean}) => {
    const [plagiarismList, setPlagiarismList] = React.useState<PlagiarismEntry[]>();

    // hides plagiarism list drawer
    const hide = () => {
        props.showDrawer(false); 
        setPlagiarismList([]);
    }

    const getEntryName = (entry: PlagiarismEntry) => {
        if (props.selectedFile?.getProgramNum() === 1) {
            return entry.getRightFileCode().getParent().getName().slice(0, -3) + "_Entry" + entry.getId();
        }
        return entry.getLeftFileCode().getParent().getName().slice(0, -3) + "_Entry" + entry.getId();
    }

    return (
        <>
            <div className="overflow-auto vertical-scrollable"> 
            <Drawer
                keyboard
                placement={"left"}
                closable={true}
                onClose={() => hide()}
                visible={props.visible}
                key={"left"}
            >
                <h5 className="noWrap">{props.selectedFile?.getName().substr(0, props.selectedFile.getName().length - 3)}</h5>
                <h6>Plagiarism Incidents</h6>
                <List>
                    {UploadHandlerService.getPlagiarismEntriesForFile(props.selectedFile)?.map(entry => {
                        return <List.Item>
                            <Button style={{ height: 70, width: 200 }} onClick={() => props.setSelectedPlagiarism(entry)} type="default"> {getEntryName(entry)} </Button>
                        </List.Item>
                    })  }
                </List>

                {!props.home && <Button type="primary" onClick={() => props.setSelectedPlagiarism()} style={{ position: "absolute", bottom: 10, width: 200 }}>
                    View All Files
                </Button>}
            </Drawer>
            </div>
        </>
    );
}

export default PlagiarismIncidentList