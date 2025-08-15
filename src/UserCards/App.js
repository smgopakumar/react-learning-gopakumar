import UserCard from "./UserCard";
import users from "./data";

function App() {
  return (

    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {users.map(user => (
        <UserCard key={user.id} name={user.name} role={user.role} />
      ))}
    </div>
  );
}

export default App;
