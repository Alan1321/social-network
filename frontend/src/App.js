import './App.css';
import React,{useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
import Welcome from './components/Welcome';
import Profile from './components/Profile';

function App() {

  //will be managed by redux later on
  const [isLoggedin, setLogin] = useState(false);
  const loginHandler = (props) =>{
    //console.log(props)
    setLogin(true);
  }

  return (
    <div className="App">
        <Route path='/' exact>
          {!isLoggedin && <Welcome login={loginHandler}/>}
          {isLoggedin && <Redirect to='/profile' />}
        </Route>
        {isLoggedin && <Route path='/profile' exact>
          <Profile />
        </Route>}
        <Route path='*'>  
          <Redirect to='/'/>
        </Route>
    </div>
  );
}

export default App;
