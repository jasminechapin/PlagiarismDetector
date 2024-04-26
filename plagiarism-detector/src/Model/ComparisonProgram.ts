import CodeSnippet from "./CodeSnippet";
import PlagiarismEntry from "./PlagiarismEntry";
import UserFile from "./UserFile";

// Main Program
class ComparisonProgram {
    // list of files in Program 1 (only valid files)
    private files1: Array<UserFile>;
    // list of files in Program 2 (only valid files)
    private files2: Array<UserFile>;
    // all plagiarism entries
    private entries: Array<PlagiarismEntry> = [];
    // A complete map of entries that are in a userfile
    private allFileEntries: Map<UserFile, Array<PlagiarismEntry>> = new Map();
    // Complete index of file2 fingerprints (used to match against for file1)
    private allFingerprints : number[] = [];
    // Complete index of UserFiles in file 2.
    private allFpFiles: UserFile[] = [];
    // Complete index of all Fingerprint line numbers in files2 (same order as allFingerprints)
    private allFpLines: number[] = [];

    public constructor(files1: UserFile[], files2: UserFile[]) {
        this.files1 = files1;
        this.files2 = files2;
        this.indexFingerprints();
        this.findAllPlagiarismEntries();
    }

    public setFiles1(files: Array<UserFile>) {
        this.files1 = files;
    }
    
    public setFiles2(files: Array<UserFile>) {
        this.files2 = files;
    }

    // Compiles all the fingerprints of every file of files 2
    private indexFingerprints(): void {
        let cur_idx = 0;
        for(let i = 0; i <this.files2.length; i++) {
            let cur_file = this.files2[i];
           
            // Grab all line nums of fingerprints in the file
            let cur_fplines = cur_file.getAllLineNums()
            for (let k = 0; k < cur_fplines.length; k++) {
                this.allFpLines.push(cur_fplines[k]);
            }

            let cur_fp = cur_file.getFingerprints();
            // Add each fingerprint to the index and map its doc
            for(let j = 0; j < cur_fp.length; j++) {
                this.allFingerprints[cur_idx + j] = cur_fp[j];
                this.allFpFiles[cur_idx + j] = cur_file;
            }
            cur_idx = this.allFingerprints.length;
        }
    }

    findAllPlagiarismEntries() {

        // Compile all fingerprints for files2
        this.indexFingerprints();
        // get matching fingerprints for each file in files1
        this.files1.forEach(f1 => {
            let f_prints = f1.getFingerprints();
            let matches: number[] = [];
            let file1_match_lines: number[] = [];
            let file2_match_lines: number[] = [];
            // Lookup each fingerprint of each file to check for matches
            f_prints.forEach((fp) => {
                let idx = this.allFingerprints.indexOf(fp);
                for(let i = 0; i < this.allFingerprints.length; i++) {
                    if (this.allFingerprints[i] == fp) {
                        matches.push(i);
                        file1_match_lines.push(f1.getAllLineNums()[f1.getFingerprints().indexOf(fp)]);
                    }
                }
            }); 

            // Sort? matches.sort();

            // Gets the line number of the fingerprints that have been matched in f2
            for (let i = 0; i < matches.length; i++) {
                file2_match_lines.push(this.allFpLines[matches[i]]);
            }

            let cur_entries: PlagiarismEntry[] = [];
            let cur_f1_line = 0;
            let prev_f2_file = null;
            for (let i = 0, id = 0; i < matches.length; i++) {
                // TODO check for same line and same file 
                if (cur_f1_line != file1_match_lines[i]) {
                    let snipLeft = new CodeSnippet(f1, this.allFingerprints[matches[i]], file1_match_lines[i]);
                    cur_f1_line = file1_match_lines[i];
                    let snipRight = new CodeSnippet(this.allFpFiles[matches[i]], this.allFingerprints[matches[i]], file2_match_lines[i]);
                    let entry = new PlagiarismEntry(snipLeft, snipRight, id);
                    id++;
                    this.entries.push(entry);
                    cur_entries.push(entry);
                }
            }
            this.allFileEntries.set(f1, cur_entries);
        });
    }

    // returns a map of userfiles to array of PlagiarismEntry 
    // (useful for displaying all plagiarism entries for a particular file)
    getAllFileEntries(): Map<UserFile, Array<PlagiarismEntry>> {
        return this.allFileEntries;
    }

    // calculate using size of program vs size of all plagiarism entries
    getPercentSimilarity(): number {
        return this.calcTotalPlagiarismSize() / this.calcProgramSize();
    }

    // size of all files
    private calcProgramSize(): number {
        return this.files1.length;
    }

    // size of all plagiarism entries
    private calcTotalPlagiarismSize(): number {
        return this.entries.length;
    }
}

export default ComparisonProgram