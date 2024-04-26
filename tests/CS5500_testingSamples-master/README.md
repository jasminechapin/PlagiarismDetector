# CS5500_testingSamples

This repository structure is as follows:
There is a subdirectory for each of the languages for which plagiarism samples are provided.
In each of these directories, there is a subdirectory "OneFile" for projects which are just one file, and a subdirectory "MultiFile" for projects which are multiple files.

Note: your detectors don't need to be able to flag all the instances of plagiarism.
In your final report, please make note of which ones you do flag and include some comments as to why some work and some are missed by your tool.

## Styles of Plagiarism
We have included a variety of styles of plagiarism over the code provided, with which you can test your tool.
The styles are as follows (which correspond to the filenames):
* **same**: this is literally the same file, 100% plagiarized
* **whitespace**: modifications to comments, and changes in whitespace (more or less newlines, tabs, etc)
* **fct_swap**: some functions have been moved around (defined in a different order)
* **renaming**: some functions/classes/variables have been renamed
* **reorder**: some statement reordering, introduction of new variables, and other low-level transformations
* **loops**: some of the loop styles have been changed (fors turned into whiles, etc)
* **extract**: some code has been pulled out into new functions

For HTML and Javascript, the files are present in folder names which corresspond to each transformation

----
## Sample Projects

Now, there is some information about the code in each of the sample projects:

## C
### scanner.c
This is the scanner part of a compiler for Oberon; it's part of Ellen's undergrad compilers course project. 

To compile it: ```gcc scanner.c```

The multifile C program is the scanner again, but broken up into scanner.c and scanner_header.c (and similarly for the plagiarized versions of the scanner).

## C++
### fraction.cpp
This is a simple class-based representation of polynomials and fractions, with the expected operations implemented (addition, division, etc). It's one of the assignments from Ellen's undergrad class on object-oriented programming. 

To compile it: ```g++ fraction.cpp```

### Vector space axiom computation
This is in the MultiFile directory (in the CPP directory). It's another of Ellen's undergrad projects: a generic symbolic representation of some vector spaces in C++, with functionality to prove 8 of the basic axioms (everything except closure).

There is a README in this directory explaining the project in more detail, and how to compile and run it.

## Python 
### poly.py
This is a program that generates a random polygon (with a specified number of vertices) and draws it with turtle graphics (part of one of Ellen's projects from first year undergrad -- there's definitely room for improvement in the coding style).
It first generates all the random vertices, and then uses a self-avoiding random walk to compute the polygon's edges.

To run it: ```python3 poly.py```

### Multifile polygon generator
This is the same program (with the same running instructions) as the single-file case. 
The only difference here is that the code has been split into multiple files.
In particular, the computation of "is the intercept in range" is moved out to another file.

## HTML
file1 in multifile folder and both the files in the singleFile folder correspond to a login screen containing 2 text boxes and 1 image. The image is made up of multiple parts like eyes, face, etc.
file2 is a form which allows you to add a new product by providing product name, price, etc.

## Javascript
file1 in multifile folder and both the files in the singleFile folder correspond to a blockset which is used to contain the blocks present in a tetris board
file2 is the world which contains functions for user's to interact with and manipulate the blocks
