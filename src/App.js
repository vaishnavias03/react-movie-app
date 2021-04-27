import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom'
import "./App.css"
import MovieContainer from './Components/MovieContainer'


function App() {
  
  return (
    <div className="App-header">
      <Switch>
      <Route path="/" component={MovieContainer} exact />
      
      </Switch>
    </div>
  );
}

export default App;
