import { expect } from 'chai';
import ComparisonProgram from '../src/ComparisonProgram';
import UserFile from '../src/UserFile';

//TODO Add comments 

describe("Test our thing", () => {
    it("Check for file upload", () => {
        let file: UserFile = new UserFile("tests/dummy_test.ts");
        expect(file.getContent()).to.equal('//we are testing our code asdjf oiapwej[opjdsav ]');
    });
    
    it("Check for hash", () => {
        let file1: UserFile = new UserFile("tests/dummy_test.ts");
        let file2: UserFile = new UserFile("tests/dummy_test2.ts");

        // console.log(file1.getHash());
        // console.log(file2.getHash());
        expect(file1.getHash()).to.have.members(file2.getHash());
    });

    it("Check for fingerprints (dummy_files)", () => {
        let file1: UserFile = new UserFile("tests/dummy_test.ts");
        let file2: UserFile = new UserFile("tests/dummy_test2.ts");

        // console.log(file1.getFingerprints());
        // console.log(file2.getFingerprints());
        expect(file1.getFingerprints()).to.have.members(file2.getFingerprints());
    });

    it("Check for fingerprints (code_test)", () => {
        let file1: UserFile = new UserFile("tests/code_test1.ts");
        let file2: UserFile = new UserFile("tests/code_test2.ts");

        // console.log(file1.getFingerprints());
        // console.log(file2.getFingerprints());
        expect(file1.getFingerprints()).to.have.members(file2.getFingerprints());
    });

    it("Check for fingerprints line", () => {
        let file1: UserFile = new UserFile("tests/code_test1.ts");
        let file2: UserFile = new UserFile("tests/code_test2.ts");

        // console.log(file1.getAllLineNums());
        // console.log(file2.getAllLineNums());
        expect(file1.getAllLineNums()).to.have.members(file2.getAllLineNums());
    });

    it("Check that winnowing occurs", () => {
        let file1: UserFile = new UserFile("tests/code_test1.ts");
        expect(file1.getFingerprints()).length.to.greaterThan(0);
    });

    it("Check that winnowing lessens the fingerprints", () => {
        let file1: UserFile = new UserFile("tests/code_test1.ts");
        expect(file1.getFingerprints()).length.to.lessThan(file1.getHash().length);
    });
});

describe("Build and test comparison of two batches of files with duplicated files", () => {
    let file1: UserFile = new UserFile("tests/code_test1.ts");
    let file2: UserFile = new UserFile("tests/code_test2.ts");
    let file3: UserFile = new UserFile("tests/dummy_test2.ts");

    let files1: Array<UserFile> = [file1];
    let files2: Array<UserFile> = [file2, file3];

    let comparison = new ComparisonProgram(files1, files2);

    it("Check that entries get made (equal files)", () => {
        console.log(comparison.getAllFileEntries().size)
        expect(comparison.getAllFileEntries()).length.to.greaterThan(0);
    });

    it("Check that entries have instances of plagiarism", () => {
        
        let entries_map = comparison.getAllFileEntries();
        // entries_map.forEach((entries) => {
        //     entries.forEach((entry) => {
        //         console.log(entry.getLeftFileCode().getCode());
        //         console.log(entry.getRightFileCode().getCode());
        //     });
        // });
        expect(comparison.getAllFileEntries()).length.to.greaterThan(0);
    });
})


describe("Build and test comparison of two batches of files with differing files", () => {
    let file1: UserFile = new UserFile("tests/code_test1.ts");
    let file2: UserFile = new UserFile("tests/code_test2_nocomment.ts");
    let file3: UserFile = new UserFile("tests/dummy_test2.ts");

    let files1: Array<UserFile> = [file1];
    let files2: Array<UserFile> = [file2, file3];

    let comparison = new ComparisonProgram(files1, files2);

    it("Check that entries get made (equal files)", () => {
        console.log(comparison.getAllFileEntries().size)
        expect(comparison.getAllFileEntries()).length.to.greaterThan(0);
    });

    it("Check that entries have instances of plagiarism", () => {
        
        let entries_map = comparison.getAllFileEntries();
        entries_map.forEach((entries) => {
            entries.forEach((entry) => {
                console.log(entry.getLeftFileCode().getCode());
                console.log(entry.getRightFileCode().getCode() + "\n");
            });
        });
        expect(comparison.getAllFileEntries()).length.to.greaterThan(0);
    });
})
