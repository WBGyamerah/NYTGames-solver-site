# NYTGames solver site
A react app to host the nyt game solvers I've made 

## Process
I started by importing the logos that I would use downloaded from icons8, and created a favicon using favicon generator which also provided the manifest. Next was creating the home page I want the website to emulate the NYT Games page so I'll be copying its design I began with the header. I created a theme file to store all colours and font styling and later on I can use this for a light and dark mode. I have some previous experience with MUI so I chose to create a theme using it. I actually began with the cards which the CSS for was alot of trial and error as not everything could be copied from the website, this also applied to the sidebar which was my next task.

Originally I was gonna start with spelling bee, but I've decide to start with sudoku as the design is simpler a grid and a number pad. I constructed a grid by using a table and replacing the cells with input boxes. I ended changing fonts from georgia to georgia pro as the numbers vary in starting heights. I began with Sudoku board which i made based on a table and filled the cells with textfields, the table data is stored in 9x9 2d array. As I wanted to have the same functionality as the NYT sudoku game, I made 2 extra 2d arrays which held user inputs as these cells would be coloured differently, and one to hold error cells as these would also be styled differently. For coding the solver I plan to just bruteforce the solve by trying every number in a square checking if its valid and then continuing.

## Resources
https://icons8.com for Icons
https://realfavicongenerator.net for the Favicons
https://icons8.com/icon/wIanlRMWltQd/new-york-times NYT logo
https://icons8.com/icon/Yk8IaKHvWIND/box LetterBoxed logo
https://icons8.com/icon/Nwd9HmGAlc96/bee Spelling Bee logo
https://icons8.com/icon/60598/data-grid Wordle logo
https://icons8.com/icon/113694/sudoku Strands logo
https://icons8.com/icon/20980/clear-symbol" Backspace Icon

