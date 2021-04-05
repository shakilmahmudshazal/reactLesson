import React , {useState} from 'react';

import logo from './logo.svg';
import './App.css';

import TableComponent from './components/table';


function App() {

  // var name = "Shakil";
  // var title = "Shakil is here";
  

  const [title, setTitle] = useState("This is a counting App")

  const [count, setCount]= useState(0);

  // var Link = {
  //   text: "Click Here",
  //   url:"https://google.com"
  // }

  function increase(){
    setCount(count+1)
    console.log("name", count);
  }
  function decrease(){
    setCount(count-1)
    console.log("name", count);
  }

  function reset(){
    setCount(0)
    console.log("name", count);
  }
  return (
    <div className='App' >
    <h1>counter : {count}</h1>
    <p>{title}</p>
    <button onClick={increase} >Increase</button>
    <button onClick={reset} >Reset</button>
    <button onClick={decrease} >decrease</button>
    {/* <a href={Link.url} target="_blank">{Link.text}</a> */}

    {/* <TableComponent/> */}
  
    </div>
  );
}

export default App;
