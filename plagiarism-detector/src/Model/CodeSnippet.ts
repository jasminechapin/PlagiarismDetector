import UserFile from "./UserFile"

// Represents a portion of code in a file: will be an example of plagiarism
class CodeSnippet {
    private code: string;
    private endLine: number

    public constructor(private parent: UserFile, private fp: number, private startLine: number){
        this.code = this.findCode();
        this.endLine = startLine + 1;
    }

    // Find the chunk of code based on the provided start line from the parent file
    private findCode(): string {
        let str = this.parent.getContent();
        let str_split: string[] = str.split('\n')
        return str_split[this.startLine - 1]
    }
        
    public getCode(): string {
        return this.code;
    }
    public getParent(): UserFile {
        return this.parent;
    }

    // Returns the start line of the codesnippent
    public getStart(): number {
        return this.startLine;
    }
    public getEnd(): number {
        return this.endLine;
    }
}

export default CodeSnippet