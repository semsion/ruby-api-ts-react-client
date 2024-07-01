import { useEffect, useState } from 'react';
import './App.css'
import Articles from './components/articles';


const getArticles = async () => {
  const response = await fetch('http://localhost:3000/api/v1/articles');
  const data = await response.json();
  return data;
}

const App: React.FC = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let mounted = true; 
    getArticles().then(data => {
      if (mounted) {
        setArticles(data);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <h1>Blog Client</h1>
      <p>Blog Client is a React application that consumes an API from Ruby on Rails.</p>
      <Articles articles={articles} title={''} body={''} />
    </div>
  );
};

export default App
