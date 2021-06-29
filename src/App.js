import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";

function App() {
  return (
    
    <Router>
      <div className = "container">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
