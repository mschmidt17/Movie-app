import { useState } from 'react';
const apiKey = '77a0512f9495da527410f535f981500e'

const Search = ({ setData }) => {
  const [term, setTerm] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if (term) {
      searchMovieData();
      setTerm("")
    } else {
      window.location.reload();
    }
  };

  const searchMovieData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${term}`
    );
    const data = await res.json();

    setData(data.results);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search"
      />
    </form>
  );
};

export default Search;