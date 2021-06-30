import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import MoviesPage from "./components/MoviesPage";
import Footer from "./components/Footer";

function App() {
  return (
    
    <Router>
      <div className = "container">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/movies' component={MoviesPage}/>
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
