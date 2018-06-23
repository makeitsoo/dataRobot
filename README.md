# FriendFinder

## About
Friend Finder implements friend matching based on the users responses to a breif survey. The user responds to questions by selecting values from 1 (Strongly Disagree) to 5 (Strongly Agree) from a dropdown on the webpage. When the survey is submitted, an existing user record closest to the current user's responses is found and returned via a modal in the html page. The closest friend match is determined by the set of user responses compared to the existing users with the lowest absolute difference for all ten questions combined.

Friend Finder application is meant to simulate a simple dating app. The application is implemented using a Node.js and Express server on the back end and a Bootstrap CSS framework on the front end.

## Demo
Friend Finder is deployed to Heroku. Please check it out here: https://match-makr.herokuapp.com/.

## Installation
To install and run the application follow the instructions below:
```
git clone https://github.com/makeitsoo/FriendFinder.git
cd FriendFinder
npm install
node server.js
```
## node server.js
The application will now be running locally on PORT 8000. You can then access it locally from your browser at the URL: localhost:8000.

## routes
The application has two html pages and an API (json). The following are the routes for each, but all can easily be accessed through the home page of app: 

**Home**
localhost:8000

**Survey**
localhost:8000/survey

**API**
localhost:8000/api/friends

