import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1)

  return(
    <div style = {{textAlign: 'center', marginTop: '50px'}}>
      <h1>Counter</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment} style={{marginRight:'10px'}}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default App;

// import React from 'react';

// function App() {
//   const name = "React";
//   const isReact = true;

//   return(
//     <div>
//       {/* JSX 안에서 JavaScript 표현식을 사용할 때 중괄호{} 사용 */}
//       <h1>Hello, {name}!</h1>
//       {isReact ? <p>Welcome to the React world!</p> :
//       <p>This is not React</p>}

//       <p style={{ color: 'blue', fontSize: '20px' }}>
//         This text is styled using inline CSS.
//       </p>
//       <button className="my-button">Click Me</button>
//     </div>
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           집가고 싶다ㅏㅏ
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
