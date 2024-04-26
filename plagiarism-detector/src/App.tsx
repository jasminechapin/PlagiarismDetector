import * as React from 'react';
import './App.css';
import UploadContainer from './Containers/UploadContainer';
import ComparisonContainer from './Containers/ComparisonContainer';
import CodeContainer from './Containers/CodeContainer';
import UserFile from './Model/UserFile';
import Upload from './Util/Upload';
import RestartModal from './Components/RestartModal';
import PlagiarismEntry from './Model/PlagiarismEntry';

function App() {
  type State = { upload: Upload | undefined, selectedFile: UserFile | undefined, selectedPlagiarism: PlagiarismEntry | undefined };

  const [state, setState] = React.useState<State>({ upload: { list1: [], list2: [], doneUploading: false }, selectedFile: undefined, selectedPlagiarism: undefined })

  const setUpload = (currUpload?: Upload) => {
    setState({ upload: currUpload, selectedFile: state.selectedFile, selectedPlagiarism: state.selectedPlagiarism });
  }

  const setSelectedFile = (file?: UserFile) => {
    setState({ upload: state.upload, selectedFile: file, selectedPlagiarism: state.selectedPlagiarism });
  }

  const setSelectedPlagiarism = (entry?: PlagiarismEntry) => {
    if (entry !== undefined) {
      setState({ upload: state.upload, selectedFile: state.selectedFile, selectedPlagiarism: entry });
    } else {
      setState({ upload: state.upload, selectedFile: undefined, selectedPlagiarism: entry });
    }
  }

  return (
    <div className="body">
      
      <div className="header">
        <h2 className="headerText"> Typescript Plagiarism Detector </h2>
      </div>

      <div style={{textAlign: "right", padding: 10}}>
        <RestartModal/>
      </div>

      <div className="App">
        {!state.upload?.doneUploading && <UploadContainer setDoneUploading={setUpload} />}

        {!state.selectedPlagiarism && state.upload?.doneUploading &&
          <ComparisonContainer upload={state.upload} file={state.selectedFile}
            setFile={setSelectedFile} setSelectedPlagiarism={setSelectedPlagiarism} home={state.selectedPlagiarism !== undefined} />}
      </div>

      <div className="App2">
        {state.selectedFile !== undefined && state.selectedPlagiarism &&
          <CodeContainer plagiarism={state.selectedPlagiarism} setSelectedPlagiarism={setSelectedPlagiarism} />}
      </div>

    </div>
  );
}

export default App;
