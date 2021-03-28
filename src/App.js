import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from './pages/Home'
import DataFetching from "./components/DataFetching"




function App() {
  return (
    <div className="App">
      <Switch>
         <Route path="/" component ={Home}/>
      </Switch>
    </div>
  );
}

export default App;
