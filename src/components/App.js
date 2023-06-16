
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [count, setCount]= useState(0)
 
  return (
    <div>
        {/* Do not remove the main div */}
      <h2>Button clicked {count} times</h2>
      <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  )
}

export default App
