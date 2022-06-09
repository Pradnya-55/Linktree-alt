import "./App.css";

import LinkCard from "./LinkCard/Linkcard.js";

function App() {
  const data = [
    {
      title: "twitter",
      tagline: "Follow me on twitter",
      username: "pradnya-55",
      link: "https://twitter.com/pradnya-55"
    },
    {
      title: "github",
      tagline: "Follow me on github",
      username: "pradnya-55",
      link: "https://github.com/pradnya-55"
    },
    {
      title: "linkedin",
      tagline: "Follow me on linkedin",
      username: "pradnya-55",
      link: "https://linkedin.com/pradnya-55"
    },
    
  ];

  return (
    <div className="container">
      <h3 className="app-title">Linktree-Alt</h3>

      {
        data.map((cardinfo) => {
          return (
            <LinkCard
              title={cardinfo.title}
              tagline={cardinfo.tagline}
              username={cardinfo.username}
              link={cardinfo.link}
            />
          );
        })
      }
    </div>
  );
}

export default App;