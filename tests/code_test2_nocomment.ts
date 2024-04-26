import PlagiarismDetector from "../src/PlagiarismDetector";
import PlagiarismEntry from "../src/PlagiarismEntry";
import UserFile from "../src/UserFile";

class ComparisonProgram {
    private files1: Array<UserFile>;
    private files2: Array<UserFile>;
    private percentSimilarity: number;
    private entries: Array<PlagiarismEntry>;
    public detector: PlagiarismDetector;
    private allFileEntries: Map<UserFile, Array<PlagiarismEntry>>;
    
    findAllPlagiarismEntries(){
        this.files1.forEach(f1 => {
            let cur_entries: PlagiarismEntry[] = [];
            this.files2.forEach(f2 => {
                
                let file_entries: PlagiarismEntry[] = this.detector.createPlagiarismEntries(f1, f2);
                file_entries.forEach(entry => {
                    cur_entries.push(entry);
                    this.entries.push(entry);                    
                });
            });
            this.allFileEntries.set(f1, cur_entries);
        });
    }

    getAllFileEntries(): Map<UserFile, Array<PlagiarismEntry>> {
        return this.allFileEntries;
    }

    getPercentSimilarity(): number {
        return this.calcTotalPlagiarismSize() / this.calcProgramSize();
    }

    private calcProgramSize(): number {
        return this.files1.length;
    }

    private calcTotalPlagiarismSize(): number {
        return this.entries.length;
    }
}

export default ComparisonProgram