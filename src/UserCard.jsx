import react from "react";

function UserCard({ name, email, design }) {
  return (
    <div
      className="card"
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User Avatar"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Design: {design}</p>
      <button className="btn btn-primary">Click Me</button>
    </div>
  );
}

export default UserCard;
