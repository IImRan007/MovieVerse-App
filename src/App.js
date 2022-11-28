import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MovieSearch from "./pages/MovieSearch";
import { MovieProvider } from "./context/movies/MovieContext";
import ActionMovies from "./pages/ActionMovies";

const App = () => {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path={`/search/:text`} element={<MovieSearch />} />
          <Route path="/action" element={<ActionMovies />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
};

export default App;
