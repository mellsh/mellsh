import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';
import './App.css';
function App() {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-body">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// function UserList() {
//   const [users, setUsers] = useState([]); // 사용자 데이터상태
//   const [loading, setLoading] = useState(true); // 로딩 상태
//   const [error, setError] = useState(null); // 에러 상태
//   useEffect(() => {
//     // 데이터를 가져오는 비동기 함수 정의
//     const fetchData = async () => {
//       try {
//         const response = await
//           fetch('https://jsonplaceholder.typicode.com/posts');
//         // 에러가 발생했는지 확인
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setUsers(data); // 사용자 데이터를 상태에 저장
//       } catch (error) {
//         setError(error.message); // 에러가 발생하면 에러 메시지를 저장
//       } finally {
//         setLoading(false); // 로딩 완료
//       }
//     };
//     fetchData(); // 데이터 가져오기 함수 호출
//   }, []); // 빈 배열을 넣어 컴포넌트가 마운트될 때 한번만 실행
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   return (
//     <div>
//       <h1>Title and Body</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             title: {user.title}, body: ({user.body})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default UserList;

// import React, { useState } from 'react';
// function EventErrorExample() {
//   const [result, setResult] = useState('');
//   const handleClick = () => {
//     try {
//       // 의도적으로 에러 발생시키기
//       throw new Error("Something went wrong in the event handler!");
//     } catch (error) {
//       console.error(error);
//       setResult("An error occurred. Please try again.");
//     }
//   };
//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <h1>Event Error Handling Example</h1>
//       <button onClick={handleClick}>Click to trigger error</button>
//       <p>{result}</p>
//     </div>
//   );
// }
// export default EventErrorExample;

// import React, { useState } from 'react';
// function SimpleForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   // 입력 필드가 변경될 때 호출되는 함수
//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };
//   // 폼이 제출될 때 호출되는 함수
//   const handleSubmit = (event) => {
//     event.preventDefault(); // 기본 제출 동작 방지
//     alert(`Name: ${name}\nEmail: ${email}`);
//   };
//   return (
//     <form onSubmit={handleSubmit} style={{
//       textAlign: 'center', marginTop:
//         '50px'
//     }}>
//       <h2>Simple Form</h2>
//       <div>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={handleNameChange} />
//         </label>
//       </div>
//       <div style={{ marginTop: '10px' }}>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </label>
//       </div>
//       <button type="submit" style={{ marginTop: '20px' }}>Submit</button>
//       <p>Entered Name: {name}</p>
//       <p>Entered Email: {email}</p>
//     </form>
//   );
// }
// export default SimpleForm;

// import React, { useState } from 'react';

// function EventExample() {
//   const [text, setText] = useState('');
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <h1>React Event Handling</h1>
//       {/* 클릭 이벤트 처리 */}
//       <button onClick={handleClick}>
//         Click me
//       </button>
//       <p>Button clicked {count} times</p>
//       {/* 입력 이벤트 처리 */}
//       <input
//         type="text"
//         value={text}
//         onChange={handleChange}
//         placeholder="Type something..."
//       />
//       <p>Input text: {text}</p>
//     </div>
//   );
// }

// export default EventExample; 

// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);

//   const decrement = () => setCount(count - 1)

//   return(
//     <div style = {{textAlign: 'center', marginTop: '50px'}}>
//       <h1>Counter</h1>
//       <p>Current Count: {count}</p>
//       <button onClick={increment} style={{marginRight:'10px'}}>Increase</button>
//       <button onClick={decrement}>Decrease</button>
//     </div>
//   );
// }

// export default App;

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
