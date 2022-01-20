import Article from './components/Article.jsx'
import Nav from './components/Nav.jsx'
import './App.css';
import data from './data/data'

function App() {
  const articleElements = data.map(item => {
    return (
      <Article key={item.title} {...item}/>
    )
  })
  return (
    <div className="App">
        <Nav/>
        <main>
        {articleElements}
        </main>
    </div>
  );
}

export default App;
