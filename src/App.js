
import './App.css';
import Register from './components/Register'
import Login from './components/Login'
import './assets/main.css'
import Navigation from './components/Navigation'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

function App() {
  return (
    <div className="bg-blue-700" >
       <Router>
        <Navigation />
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route  path= "/register" component = {Register} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
