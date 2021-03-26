import './App.css';
import Callingfunc from './callingfunc';
import Insertform from './insertform';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Callingfunc/>
      <Route exact path='/insertform' component={Insertform}/>
    </div>
  );
}

export default App;