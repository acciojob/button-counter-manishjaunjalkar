
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [count, setCount]= useState(0)
  let increase=()=>{
    setCount(count+1)
  }
  return (
    <div>
        {/* Do not remove the main div */}
      <h2>Button clicked {count} times</h2>
      <button onClick={increase}>Click me</button>
    </div>
  )
}

export default App
