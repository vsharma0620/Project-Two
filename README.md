# Open Mic (Project 2)

Open mic is a resource for individuals to share their interests and talents anonymously. If you choose to be a presenter you will get 5:00 to share. Audience members can react positively to the speaker. Performers will be part of the audience while on deck. Persons on-deck will be randomly drawn to perform.

Design Process: 
-Created views with handlebars and CSS with bootstrap and fontawesome.
-Created the server with API functions
-Utilized sequelize to store data 
-Linked API with the front-end 
-Controllor shuffle and other front-end functions were worked on.

Technologies that were used:
1. mySQL
2. Sequelize
3. Node.js
4. Bootstrap
5. Handlebars.js
6. express and moment
7. Text to speech was a new technology used
8. Audio stream was also a new technology used

Challenges: 
-Figuring out aasynchronous calls and merging new technologies in the project.
-Routing and handlebar views
-Controller functions were very difficult. We faced a lot of callback function issues. We tried to resolve this by using promises an .then functions but ended up using callback functions in the end.
-Speech recognition and synthesis had many resttrictions 
-Integrating text data into the project database.

Here is the following deployed heroku link: https://polar-journey-27833.herokuapp.com/ 

Please run this locally by using the schema in mySQL workbench before running this locally in terminal. We are still working on making this fully functional at this time. The clear and delete functions and the presenter and audience views. 