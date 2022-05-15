import './App.css';
import {Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
        <Route path='/' exact>
          <Welcome />
        </Route>
        <Route path='/profile' exact>
          <Profile />
        </Route>
    </div>
  );
}

export default App;
