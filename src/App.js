
import './App.css';
import Register from './components/Register'
import Login from './components/Login'
import './assets/main.css'
import Navigation from './components/Navigation'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import Store from './store/Store'
import Main from './components/Main'
import PrivateRoute from './components/Private'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StartPage from './components/StartPage'
import HotelForm from './components/HotelForm'
import Hotels from './components/Hotels'

import setAuthToken from './store/utils'
import HomePage from './components/HomePage';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <div className="bg-blue-700" >
       <Provider store={Store}>
       <Router>
        <Navigation />
        {/* <StartPage /> */}
        <Switch>
          <Route exact path = "/" component = {HomePage}/>
          <Route exact path="/login" component={Login}/>
          <Route  path= "/register" component = {Register} />
          <PrivateRoute  path= "/main" component = {Main} />
          <PrivateRoute  path= "/addHotel" component = {HotelForm} />
          <PrivateRoute  path= "/hotels" component = {Hotels} />
          </Switch>
        </Router>
          <ToastContainer />
        </Provider>
    </div>
  );
}

export default App;
