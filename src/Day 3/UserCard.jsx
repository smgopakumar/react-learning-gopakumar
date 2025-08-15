import react from "react";

const UserCard = ({ name, email, role, image }) => {
  return (
    <div
      className="card"
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
    >
      <img
        src={image}
        alt="User Avatar"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
      <button className="btn btn-primary">Click Me</button>
    </div>
  );
};

export default UserCard;
