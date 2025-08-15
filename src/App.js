import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import ProfileCard from './profileCard';
import ImageCard from './imageCard';
import WelcomeOne from './welcomeOne';
import WelcomeTwo from './welcomeTwo';
import ProfileCardOne from './profileCardOne';
import ProfileCardTwo from './profileCardTwo';
import UserCard from './UserCard';
import ButtonClick from './ButtonClick';
import { useState } from 'react';

// function Button(props) {
//   return <button onClick={props.onClick}>Click me</button>;
// }

// function App() {
//   // const handleClick = () => alert("Button clicked!");
// const users = [
//     {
//       name: "Gopakumar SM",
//       email: "gopakumar@example.com",
//       role: "Senior PHP Developer",
//       image: "https://via.placeholder.com/100"
//     },
//     {
//       name: "Paul Mathew",
//       email: "paul@example.com",
//       role: "React Developer",
//       image: "https://via.placeholder.com/100"
//     }
//   ];


//   // return <Button onClick={handleClick} />;
//   return (
//     <div>
//       {users.map((user, index) => (
//         <UserCard
//           key={index}
//           name={user.name}
//           email={user.email}
//           role={user.role}
//           image={user.image}
//         />
//       ))}
//     </div>
//   );


// }


function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count +1);
  }
  return (<ButtonClick onClick={increase} label={`Count: ${count}`} />);
}



export default App;
