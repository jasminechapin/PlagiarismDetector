import CodeSnippet from "./CodeSnippet"

// represents an entry of plagiarism between two files
class PlagiarismEntry {
    private leftFileCode: CodeSnippet
    private rightFileCode: CodeSnippet
    
    constructor(leftFileCode: CodeSnippet, rightFileCode: CodeSnippet, private id: number) {
        this.leftFileCode = leftFileCode;
        this.rightFileCode = rightFileCode;
    }

    public getId(): number {
        return this.id;
    }
    
    public getLeftFileCode(): CodeSnippet {
        return this.leftFileCode;
    }
    public getRightFileCode(): CodeSnippet {
        return this.rightFileCode;
    }
}

export default PlagiarismEntry