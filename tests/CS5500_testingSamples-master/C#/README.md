# Plagiarism Detection Tests

The layout of this directory is as follows.
There are multi- and single-file examples, in their respective directories.
The `Base` subdirectory contains the unplagiarized code.
You should test this against itself as a sanity-check for your application.

The rest of the directory contains:
1. `ChangedLoops`, where for and while loops have been switched;
2. `ExtractedMethods`, where code has been factored out into methods;
3. `ModifiedComments`, where the code is identical but extra comments have been added, and comments have been removed or changed;
4. `MovedFunctions`, where functions/methods have been moved around;
5. `RenamedAttributes`, where significant refactoring of variable names occured.

Please note that this is by no means exhaustive---these are meant to be a start for testing your application, but you should endeavour to further test to make sure to catch more plagiarism. 
Notably, there is no test here where a function was moved to a different file, so make sure to test that, too :-)