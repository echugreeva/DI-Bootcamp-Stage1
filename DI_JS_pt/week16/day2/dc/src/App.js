import './App.css';
import Movie from './components/Movie';
import MovieList
 from './components/MovieList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieList/>
        <Movie/>
      </header>
    </div>
  );
}

export default App;
