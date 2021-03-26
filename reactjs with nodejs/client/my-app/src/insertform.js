import './App.css';
import {useState} from "react";
import Axios from "axios";



function App() {
  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
  const [country,setCountry] = useState("");

const addpeople = ()=>{
Axios.post("http://localhost:3001/create",{
  name:name,
  age:age,
  country:country
}).then(()=>{
  console.log("success");
});

};

  return (
    <div className="App">
   <div className="information">
    <h1>Ballers-list</h1>
    <label>name:</label>
    <input type="text" onChange={(event)=>{
      setName(event.target.value);
    }}
    />
    <label>age:</label>
    <input type="number"onChange={(event)=>{
      setAge(event.target.value);
    }}/>
    <label>country:</label>
    <input type="text" onChange={(event)=>{
      setCountry(event.target.value);
    }}/>
    <button onClick={addpeople} >Add people</button>
    </div>
    </div>
  );
}

export default App;
