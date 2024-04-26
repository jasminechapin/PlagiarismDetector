import ComparisonProgram from "../Model/ComparisonProgram";
import ErrorMessaging from "../Util/ErrorMessaging";
import PlagiarismEntry from "../Model/PlagiarismEntry";
import UserFile from "../Model/UserFile";

// handles upload of files and filtering the invalid files out
export default class UploadHandlerService {
    // the main program for the first list
    private static program1: ComparisonProgram;

    // the lists of files returned upon upload
    static fileList1: Array<File> = [];
    static fileList2: Array<File> = [];

    // the lists of custom user files
    static userFileList1: Array<UserFile> = [];
    static userFileList2: Array<UserFile> = [];

    // sets the files in program 1
    static setFileList1(fileList: File[]) {
        this.fileList1 = fileList;
    }

    // sets the files in program 2
    static setFileList2(fileList: File[]) {
        this.fileList2 = fileList;
    }
    
    // get the invalid file list error
    static getUnsupportedFilesText(): string {
        let text = "In program 1, " + this.countUnsupportedFiles(this.fileList1) +
            " file(s) are not being checked. And " + this.countUnsupportedFiles(this.fileList2) +
            " are not being checked in program 2."

        return text;
    }

    // counts the number of files that are not of type .ts
    static countUnsupportedFiles(fileList: Array<any>): number {
        return fileList.filter(file => file.name.slice(-3) !== ".ts").length;
    }

    // counts the number of typescript files
    static countSupportedFiles(fileList: Array<any>): number {
        return fileList.filter(file => file.name.slice(-3) === ".ts").length;
    }

    // checks if each program has at least one typescript file
    static getError(): any {
        let title = "Invalid Programs"
        let content: string = " ";
        let error = false;

        if (this.countSupportedFiles(this.fileList1) === 0) {
            content = content + ("Uploaded 0 files for the first program. Upload a TypeScript project.\n");
            error = true;
        }
        if (this.countSupportedFiles(this.fileList2) === 0) {
            content = content + ("Uploaded 0 files for the second program. Upload a TypeScript project.");
            error = true;
        }

        if (error === true) {
            return new ErrorMessaging(title, content);
        } else {
            return;
        }
    }

    // filters out files without a .ts extension
    static filterInvalidFiles(): void {
        this.fileList1 = this.fileList1.filter(file => file.name.slice(-3) === ".ts");
        this.fileList2 = this.fileList2.filter(file => file.name.slice(-3) === ".ts");
    }

    // converts the valid files into UserFiles
    static convertFiles(setUpload: Function) {
        this.filterInvalidFiles();

        this.fileList1.forEach(f => {
            f.text().then(content => this.userFileList1.push(new UserFile(f.name, content, 1))
            ).then(response => {
                setUpload({ list1: this.userFileList1, list2: [], doneUploading: false })
            })
        });
        this.fileList2.forEach(f => {
            f.text().then(content => this.userFileList2.push(new UserFile(f.name, content, 2))
            ).then(response => {
                this.program1 = new ComparisonProgram(this.userFileList1, this.userFileList2);
                setUpload({ list1: this.userFileList1, list2: this.userFileList2, doneUploading: true });
            });
        });
    }

    // gets all of the plagiarism entries for a given userfile
    static getPlagiarismEntriesForFile(file?: UserFile) : PlagiarismEntry[] | undefined {
        if (file !== undefined) {
            return this.program1.getAllFileEntries().get(file);
        }
    }

    // gets all of the userfiles with plagiarism
    static getPlagiarismEntries(listNum: number) : UserFile[] {
        if (listNum === 1) {
            return this.userFileList1.filter(file => this.program1.getAllFileEntries().get(file) !== []);
        } else {
            return this.userFileList2.filter(file => this.program1.getAllFileEntries().get(file) !== []);
        }
    }
} 