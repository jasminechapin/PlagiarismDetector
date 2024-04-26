import PlagiarismDetector from "../src/PlagiarismDetector";
import PlagiarismEntry from "../src/PlagiarismEntry";
import UserFile from "../src/UserFile";

// Main Program
class ComparisonProgram {
    // list of files in Program 1 (only valid files)
    private files1: Array<UserFile>;
    // list of files in Program 2 (only valid files)
    private files2: Array<UserFile>;
    // similarity between the two programs
    private percentSimilarity: number;
    // all plagiarism entries
    private entries: Array<PlagiarismEntry>;
    public detector: PlagiarismDetector;
    private allFileEntries: Map<UserFile, Array<PlagiarismEntry>>;
    
    // compute plagiarism entries between the two programs 
    findAllPlagiarismEntries(){
        this.files1.forEach(f1 => {
            let cur_entries: PlagiarismEntry[] = [];
            this.files2.forEach(f2 => {
                
                // Iterate over the files1 and compare with each file in files2
                let file_entries: PlagiarismEntry[] = this.detector.createPlagiarismEntries(f1, f2);
                // Map these entries to the file and add to total entries
                file_entries.forEach(entry => {
                    cur_entries.push(entry);
                    this.entries.push(entry);                    
                });
            });
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