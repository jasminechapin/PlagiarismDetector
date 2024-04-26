import * as babelParser from "@babel/parser"

// Represents a valid file for plagiarism detection
class UserFile {
    private relativeURL: string
    private content: string
    private size: number
    private fingerprints: number[] = [];
    private fingerprintLines: number[] = [];
    private fingers: number[] = [];
    private name: string;
    private numLines: number;
    private programNum: number;

    public constructor(name: string, content: string, programNum: number) {
        // Reads a file and writes its contents as a string
        this.name = name;
        this.relativeURL = "";
        this.content =  content;
        this.size = this.content.length;
        this.numLines = (this.content.split(/\r\n|\r|\n/g) || []).length;
        this.programNum = programNum;
        this.makeFingerprints();
        this.winnow();
    }

    public getName(): string {
        return this.name;
    }
    public getURL(): string {
        return this.relativeURL;
    }
    public getContent(): string {
        return this.content;
    }
    public getTotalSize(): number {
        return this.size;
    }
    public getFingerprints(): number[] {
        return this.fingerprints;
    }
    public getNumLines(): number {
        return this.numLines;
    }
    public getProgramNum(): number {
        return this.programNum;
    }

    private makeFingerprints(): void {
        let cleaned = this.content.replace(/\s/g, "");
        let kgrams: string[] = [];
        let chunks = cleaned.length - 1;
        // Make kgrams of size 12
        for (let i = 0; i < chunks; i++) {
            kgrams[i] = cleaned.substr(i, 12);
        }
        // Create a 32 bit integer hash for each k-gram
        kgrams.forEach((gram) => {
            let hash = 0;
            for (let i = 0; i < gram.length; i++) {
                let chr = gram.charCodeAt(i);
                hash = ((hash << 5) - hash) + chr;
                hash |= 0;
            }
            this.fingers.push(hash);
        });
    }

    private winnow(): void {
        let WINDOW_SIZE = 10;
        let fp = new Map();
        let finalprints: number[] = [];
        if (this.fingers.length <= WINDOW_SIZE) {
            finalprints = this.fingers;
            this.fingerprints = finalprints;
            return;
        }
        let min = Number.MAX_SAFE_INTEGER;
        let minindex = 0;
        for (let index = 0; index < (this.fingers.length - WINDOW_SIZE); index++) {
            for (let index2 = index; index2 < index + WINDOW_SIZE; index2++) {
                if (index > minindex) {
                    min = Number.MAX_SAFE_INTEGER;
                    minindex = 0;
                }
                if (this.fingers[index2] < min) {
                    min = this.fingers[index2];
                    minindex = index2
                }
            }
            fp.set(minindex, this.fingers[minindex]);
        }
        Array.from(fp.values()).forEach(value => finalprints.push(value));
        this.fingerprints = finalprints;
        let fp_keys = Array.from(fp.keys());
        // Create array of starting line num for all finger prints
        for(let i = 0; i < this.fingerprints.length; i++) {
            this.fingerprintLines[i] = this.getLineNum(fp_keys[i]);
        }
    }

    // Returns the starting line number of a fingerprint
    public getLineNum(fp_idx: number): number{
        let count = 0;
        let ln = 1;
        // Parse through the content ignoring spaces and incrementing line number
        for(let i= 0; i < this.content.length; i++) {
            let cur = this.content[i];
            // If index is a space we ignore it
            if(cur === " ")
                continue;
            // Increment on a new line
            else if (cur === "\n") {
                ln++;
                continue;
            }
            // We advance the count
            else {
                count++;
            }
            // We have found our beginning, return ln
            if(fp_idx === count){
                return ln;
            }
        }

        return -1;
    }

    public getHash() {
        return this.fingers;
    }

    public getAllLineNums(): number[] {
        return this.fingerprintLines;
    }

    /**
     * Parses the files content and returns as an AST
     */
    public parseUserFile(): any {
        console.log(babelParser.parse(this.content));
        return babelParser.parse(this.content);
    }
}

export default UserFile