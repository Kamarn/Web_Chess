			Install and Run
To run the project, MySQL database and NodeJS must be installed.
First of all, it is necessary to run the database codes in the database.txt file in MySQL and create the database.

			Current database settings in .env file:
HOST=localhost
USER=root
PASSWORD=''
NAME=game
PORT=3306

Afterwards, it is necessary to save the folder named Project in a suitable place by extracting it from the zip file. Since I use Microsoft VS Code application during project construction, I will try to explain how to run it through this application.
After entering the VS Code application and opening the folder named Project, it is necessary to open the terminal in the editor. The directory in the terminal must be the same as the directory where the file is located.
To run the project, it is necessary to type "npm start" without quotes.
We can understand that the application is running from the texts that will appear on the terminal.
If it works fine, you can go to "http://localhost:5000/" without quotes in the browser and use project.

			Login details
There are 2 pre-defined users with accounts:
email: user1@game.com    password: user1
email: user2@game.com    password: user2