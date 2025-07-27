## How to use
1. Press a square to input a number by either using the numberpad or your keyboard
2. Copy over the puzzle you want to solve, squares can be navigated with WASD, arrow keys and mouseclicks
3. After all numbers are correctly inputted press solve
4. If you want to solve a new puzzle press clear and repeat

## Process
I began with sudoku as it was simple to design, as it composed of a grid and a numberpad. I began with the grid, I created a 2D array to store the values, and created a table and filled the table cells with input fields. I could have used MUI grid however I'm more comfortable and experienced with tables.

Using textfields came with some issues stylistically such as, a visible caret and the numbers being underlined. I manage to fix this, at first I tred creating a styled component which didn't work. 

After completing the grid my next challenge was the numberpad which was straightforward however since I created it in a seperate file i had issues finding a way to pass the number inputted to the grid. I had to learn to use shouldForwardprops and Imperative handles to pass the numbers from the pad to the grid. This was a useful skill i used alot in this program.

## Resources
https://www.youtube.com/watch?v=eAFcj_2quWI&ab_channel=Insidecode - For Sudoku Solver
