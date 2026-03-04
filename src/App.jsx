import { useState } from 'react'
import './App.css'


const articles = [
  {
    id: 1,
    title: "Understanding the difference between grid-template and grid-auto",
    date: "Oct 09, 2018",
    content:
      "With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template and grid-auto properties."
  },
  {
    id: 2,
    title: "Recreating the GitHub Contribution Graph with CSS Grid Layout",
    date: "Oct 15, 2018",
    content:
      "In this article we explore how to recreate the GitHub contribution graph using CSS Grid and modern layout techniques."
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox",
    date: "Nov 01, 2018",
    content:
      "CSS Grid and Flexbox are both powerful layout systems. Understanding when to use Grid versus Flexbox is essential for modern web development."
  },
  {
    id: 4,
    title: "Mastering Modern CSS Layout",
    date: "Dec 10, 2018",
    content:
      "Modern CSS provides powerful tools such as Grid and Flexbox to create responsive layouts easily."
  }
];


function App() {
  const [search, setSearch] = useState("");

  const highlight = (text) => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <mark key={index}>{part}</mark>
      ) : (
        part
      )
    );
  };
  
  const filteredArticles = articles.filter((article) =>
    (article.title + article.content)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
      <div className="container">
        <h1>Search Articles</h1>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="searchBox"
        />

        <p>{filteredArticles.length} posts were found.</p>

        {filteredArticles.map((article) => (
          <div key={article.id} className="article">
            <h2>{highlight(article.title)}</h2>
            <p className="date">{article.date}</p>
            <p>{highlight(article.content)}</p>
          </div>
        ))}
      </div>
  );
}

export default App;
