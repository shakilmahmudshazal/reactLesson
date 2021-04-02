import logo from './logo.svg';
import './App.css';

import TableComponent from './components/table'

function App() {

  var name = "Shakil";
  var title = "Shakil is here";

  var Link = {
    text: "Click Here",
    url:"https://google.com"
  }
  return (
    <div className='App' >
    <h1>{name}</h1>
    <p>{title}</p>

    <a href={Link.url} target="_blank">{Link.text}</a>

    <TableComponent/>
  
    </div>
  );
}

export default App;
