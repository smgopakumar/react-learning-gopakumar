import React from "react";
import UserCard from "../UserCard";


const users = [
  {
    name : "name SM",
    email: "smgopu@gmail.com",
    role : "Senior PHP Developer",
    image: "https://via.placeholder.com/100"

  },
  {
    name : "Paul Mathew",
    email: "mathew004@gmail.com",
    role : "React Developer",
    image: "https://via.placeholder.com/100"
  }
];

function App() {
  reurn (
    <div>
      {users.map((user, index) => (
        <UserCard
        key={index}
        name={user.name}
        email={user.email}
        role={user.role}
        image={user.image}
        />
      ))}
    </div>
  );
}

export default App;
