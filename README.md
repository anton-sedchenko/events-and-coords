# events-and-coords
training browser events and coordinates
https://anton-sedchenko.github.io/events-and-coords/

Task#1
Write all of the tasks inside the index.js and an index.html file. For each task, you should create HTML template. Template for each task should be available in index.html file 
(each task has a special block, that separated by the comment). For providing styles, use styles.css file. (the same situation as for HTML template, each task has its own style 
block). 
1.	Create a table with selectable cells and rows. The table should consist of 3 columns with 3 rows. Every cell by default should have a white background color. Every cell should
have the text “Cell” inside. The table should have one special cell with the text inside “Special cell” (you can put this special cell anywhere you want, expect first columns). 
The table should follow the next functionality:
-	If you click on some cell, the background color on this cell should toggle to yellow. 
-	If you click on a cell in the first column the row of the selected cell should toggle background color to blue. Note: if in this row you select some other cell with the color 
yellow, the color of this row should not be changed.
-	If you click on a special cell, the background color on the whole table and cells, that were not selected should toggle to green.
-	Priority of colors: 
1.	Yellow
2.	Blue
3.	Green

Task#2
Create an input field with validation. The input field should have a default black border. On the right side of the input should be the “Send” button. On typing text in the 
input field, you should validate the typed data. The data is valid when user type phone number in next format - +380*********. If data is invalid, you should disable the button, 
change the input border to red, and show a notification block above the input with the message, that data is invalid. If data is valid, the button should be available. On the 
button click, you should show a notification block above the input field with the message, that data was successfully sent.

Task#3
1.	Create a basketball court with a moving ball and scoreboard. The court size should be 600x330px. Image for the court you can find in assets/ folder (court.png). The size 
of the ball should be 40x40px (assets/ball.png). By default, the ball position should be at the center of the court. Below the basketball court should be a scoreboard with 
the current score of team A and team B. If you click somewhere on the court the ball goes to that position. There is a basketball backboard with the hoop on each side of the 
court. You should establish a scoring zone there (15x15px). If you click on that zone, should be dispatched a custom event, that handled by notification. The scoreboard should 
show a notification message, with the team, that scores that goal and change the current score. After the 3 seconds, notifications should fade away. 
For score notifications you should create a custom event with information about the team, that score the goal.
