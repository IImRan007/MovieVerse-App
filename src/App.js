import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MovieSearch from "./pages/MovieSearch";
import { MovieProvider } from "./context/movies/MovieContext";
import ActionMovies from "./pages/ActionMovies";
import AdventureMovies from "./pages/AdventureMovies";
import AnimationMovies from "./pages/AnimationMovies";
import ComedyMovies from "./pages/ComedyMovies";
import CrimeMovies from "./pages/CrimeMovies";
import DocMovies from "./pages/DocMovies";
import DramaMovies from "./pages/DramaMovies";
import HorrorMovies from "./pages/HorrorMovies";
import ScifiMovies from "./pages/ScifiMovies";

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
          <Route path="/adventure" element={<AdventureMovies />} />
          <Route path="/animation" element={<AnimationMovies />} />
          <Route path="/comedy" element={<ComedyMovies />} />
          <Route path="/crime" element={<CrimeMovies />} />
          <Route path="/documentary" element={<DocMovies />} />
          <Route path="/drama" element={<DramaMovies />} />
          <Route path="/horror" element={<HorrorMovies />} />
          <Route path="/scifi" element={<ScifiMovies />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
};

export default App;
