# Front End Testing

We completed manual testing on the Front-End. We decided to cover all possible (within reason) paths that a user could take when using our software. 

# Test Cases:


## Try to compare with no program 1

1. User uploads a valid typescript program to program 2 upload area.
2. User clicks "Compare" button
3. Expected Behavior: A pop-up displays asking the user to upload a valid typescript project

## Try to compare with no program 2

1. User uploads a valid typescript program to program 1 upload area.
2. User clicks "Compare" button
3. Expected Behavior: A pop-up displays asking the user to upload a valid typescript project

## Try to compare with no program 1, no program 2

1. User clicks "Compare" button
2. Expected Behavior: A pop-up displays asking the user to upload valid typescript projects

## Upload a program with non-typescript files

1. In program 1, upload a program with 5 non-typescript files
2. In program 2, upload a program with 4 non-typescript files
3. Pop up displays telling the user how many files are not being processed
4. User click run plagiarism tool
5. Program goes to the next page successfully

## Upload a programs using the Upload Folder button

1. In program 1, upload a program with 5 non-typescript files using the upload folder button
2. In program 2, upload a program with 4 non-typescript files using the upload folder button
3. Pop up displays telling the user how many files are not being processed
4. User click run plagiarism tool
5. Program goes to the next page successfully

## Check go back button works

1. In program 1, upload a program with 5 non-typescript files
2. In program 2, upload a program with 4 non-typescript files
3. Pop up displays telling the user how many files are not being processed
4. User clicks Go Back
5. Program does not go to next page, popup closes

## Preview a file from the upload page

1. In program 1, upload a program with 5 non-typescript files
2. In program 2, upload a program with 4 non-typescript files
3. Click on a file from program 1
4. Expected Behavior: View source code / text in the file

## View Plagiarism Entry

1. In program 1, upload a program with 5 non-typescript files
2. In program 2, upload a program with 4 non-typescript files
3. Click Compare
4. Click Run Plagiarism Tool
5. Click on a file with a red error symbol next to the file name
6. View a plagiarism entry in the pop-up drawer on the left by clicking on it
7. Plagiarism Entry displays properly, showing the full text of both files on the left and right, highlighting where there was plagiarism detected

## View Plagiarism Entry, View another Plagiarism Entry from the same file, view a plagiarism entry from a different file

1. In program 1, upload a program with 5 non-typescript files
2. In program 2, upload a program with 4 non-typescript files
3. Click Compare
4. Click Run Plagiarism Tool
5. Click on a file with a red error symbol next to the file name
6. View a plagiarism entry in the pop-up drawer on the left by clicking on it
7. Plagiarism Entry displays properly, showing the full text of both files on the left and right, highlighting where there was plagiarism detected
8. Click Open Plagiarism Entries to reopen the popup drawer.
9. Click a different plagiarism entry
10. Plagiarism Entry displays correctly
11. Click Open Plagiarism Entries to reopen the popup drawer.
12. Click View All Files on the popup drawer to go back to the main page showing all files from the two programs
13. Click on a different file with a red error symbol, the pop up drawer appears
14. Click a plagiarism entry
15. The Plagiarism Entry appears

## Check that "Start Over" button works

1. In program 1, upload a program with 5 non-typescript files
2. In program 2, upload a program with 4 non-typescript files
3. Click Compare
4. Click Run Plagiarism Tool
5. Click on Start Over button
6. Click OK when prompted
7. Initial landing page displays

