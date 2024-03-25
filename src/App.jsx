
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/*const Box = (props) => {
  return (
      <div>
          <h2> Name: {props.name}</h2>
          <p>Title: {props.title}</p>
          <p>location: {props.location}</p>

      </div>
  )
}*/

// it is imported from the Box separated file but we can do the componet here as well like above
import Box from './Box'
import { useState } from 'react'


function App() {

  const [counter, setCounter] = useState(0)
  const [persons, setPerson] = useState([
    { id: 1, name: "Betty", title: "Student", location: "Helsinki" }, {
      id: 2, name: "Bob", title: "supervistor", location: "stockholm"
    },
    { id: 3, name: "Messi", title: "cloud consltant", location: "Addis Ababa" }

  ]);

  const clickHandler =() =>{
    setCounter(counter+1);
    //console.log(counter);
  };
  const clickHandler1 =() =>{
    setCounter(counter-1);
    //console.log(counter);
  };
  const clickHandler2 =() =>{
    setCounter(0);
    //console.log(counter);
  };
  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={clickHandler}> Increase</button>
      <button onClick={clickHandler1}> Decrease</button>
      <button onClick={clickHandler2}> set to 0</button>
      {persons.map((person) => (
        <Box key={person.id}
          name={person.name}
          title={person.title}
          location={person.location} />
      ))}

      <Box name="betty" title="eeee" />
      <Box />
      <Box />
    </>
  )
}

export default App
