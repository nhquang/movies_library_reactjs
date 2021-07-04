import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import MoviesPage from "./components/MoviesPage";
import TVShowsPage from "./components/TVShowsPage";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";
import TVShowDetails from "./components/TVShowDetails";

function App() {
  return (
    
    <Router>
      <div className = "container">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/movies/:id' component={MovieDetails}/>
        <Route path='/tvshows/:id' component={TVShowDetails}/>
        <Route path='/movies' component={MoviesPage}/>
        <Route path='/tvshows' component={TVShowsPage}/>
      </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
