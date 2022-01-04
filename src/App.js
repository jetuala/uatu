import logo from './logo.svg';
import './App.css';
import { scrapeSubreddit } from './scraper';
import ArticleList from './ArticleList';

function App() {
  return (
    <div className="UATU">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Uatu: a Marvel Reddit web-scraping stock market game.
        </p>
      </header>
      <ArticleList />
    </div>
  );
}

export default App;
