import {useEffect, useState} from "react";
import Movie from './components/Movie';
import Search from './components/Search';
import loading from './img/loading.svg';
import './App.css';

const apiKey = '77a0512f9495da527410f535f981500e'



function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`
    );
    const data = await res.json();
    setData(data.results);
  };


  return (
    <>
      <header>
        <h1>
          <a className="text" href="/">Movie App</a>
        </h1>
        <Search setData={setData} />
      </header>
      <main>
        {data?.length > 0 ? (
          data.map((movie) => <Movie key={movie.id} movie={movie} />)
        ) : (
          <div>
            <img src={loading} alt="Loading..." />
          </div>
        )}
      </main>
    </>
  );
}

export default App;