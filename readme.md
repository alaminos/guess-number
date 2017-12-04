"Write a guessing game where the user has to guess a secret number. 
After every guess the program tells the user whether their number was too large or too small. 
At the end the number of tries needed should be printed.
It counts only as one try if they input the same number multiple times consecutively."

Having this program to work in the browser console was fairly quick.
One of the first issues I encountered was when testing the first versions at isRight evaluation.
if (userInput === secretNumber) was not going to work properly as the user input (coming from a prompt window) was a string, not a number. It was fixed using == instead of ===. It could have probably been fixed converting the string into a number value.
Later when I had a user interface, it was fixed fetching the user number with the method .valueAsNumber, and got the triple = back into the isRight evaluation.

Although the challenge was to write a program that simply worked, most of the time is employed on css, especially dealing with media queries. I very much prefer writing the logic of the program, than googling how to style pretty buttons. 
