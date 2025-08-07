import react from "react";
import "./profileCard.css";

function ProfileCardOne({ name, age, location, imageUrl }) {
  return (
    <div className="card">
      <h2>Profile Card One</h2>
      <p>This is the first profile card component.</p>
      <img src={imageUrl} alt={name} />
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <button>View Profile</button>
    </div>
  );
}

export default ProfileCardOne;
