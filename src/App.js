import React, { useState } from 'react';
// import Hello from './sayHello';
import Tweet from './Tweet';

function App () {

  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const [ user, setUser ] = useState({
  //   name: 'Ed',
  //   age: 25,
  //   posts: ['my first post', 'my lovely summer']
  // });

  const [ users, setUsers ] = useState([
    {name: "Ed", message: "Hello Ed"},
    {name: "Brad", message: "Hello Brad"},
    {name: "Mosh", message: "Hello Mosh"},
  ]);
  
  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed);
  // }

return (
    <div className="app">
      {/* step 1 */}
      {/* <Hello /> */}
      {/* step 2  - passing props */}
      {/* <Tweet name="Dev Ed" message="Amazing Teacher"/>
      <Tweet name="Traversy Media" message="Master Teacher"/>
      <Tweet name="Clever Programmers" message="Inspiring Teachers"/>
      <Tweet name="Mosh" message="Great Teacher"/> */}
      {/* step 3  - using States */}
      {/* <h1 className={isRed ? "red" : ""}>Change my color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}
      {/* step 4 */}
        {users.map(user => (
          <Tweet name={user.name} message={user.message}/>
        ))}
    </div>
);

}

export default App;