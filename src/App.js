import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import MoviesPage from "./components/MoviesPage";
import TVShowsPage from "./components/TVShowsPage";
import Footer from "./components/Footer";

function App() {
  return (
    
    <Router>
      <div className = "container">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/movies' component={MoviesPage}/>
        <Route path='/tvshows' component={TVShowsPage}/>
      </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
