import React,{useState} from 'react';
import Tweet from './tweet';

function App(){
  
  const [isRed, setRed]  = useState(false);
  const [count, setCount] = useState(0);
  const increment = () =>{
    setCount(count +1);
    setRed(!isRed);
  };

  const [users, setUsers] = useState([
    {name: "Ed", message:"I am Ed", likes:"3.0 k"},
    {name: "John", message:"A tweet From John", likes:"3.2 k"},
    {name: "Mohammad", message:"This is Mohammad", likes:"3.1 k"}
  ]);

  const decrement = () =>{
    setCount(count - 1);
  };

  const reset = () =>{
    setCount(0);
  };
  return (
    <div className="app">
      {users.map(user=> (
          <Tweet name={user.name} message={user.message} />
      ))}
      <h1 className={isRed ? "red" : ""}>Change my color</h1>
      <button onClick = {increment}>Increament</button>
      <h1>{count}</h1>
      <button onClick= {decrement}>decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
    
  );
}

export default App;