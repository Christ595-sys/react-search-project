# React Search Highlight Application
This project is a simple React application that allows users to search through a list of articles. When a user types a keyword or phrase in the search box, the application filters the articles and highlights the matching text in the results.
The goal of this project is to demonstrate basic front-end devopment skills using React, including state management, filtering data, and dynamic rendering.
# Features
- Search articles by keyword or phrase
- Highlight matching search terms in titles and content
- Display the number of matching results
- Built with React and Vite for fast development

# Technologies used
- React
- JavaScript (ES6)
- Vite

# Getting Started
Follow these steps to run the application locally.

1- Clone the repository
git clone https://github.com/Christ595-sys/react-search-project.git

2- Navigate into the project folder
cd react-search-project

3- Install dependencies
npm install

4- Start the development server
npm run dev

5- Open the application
http://localhost:5173

# How the application works
The application stores a list of articles in a constant array. When the user types into the search box:
1- The search value is stored using React's useState.
2- Articles are filtered using JavaScript's filter() method.
3- Matching text is highlighted using a regular expression.
4- The results are rendered dynamically using map().
