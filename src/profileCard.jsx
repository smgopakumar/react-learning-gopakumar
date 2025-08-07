import react from "react";

function ProfileCard() {
  const name = "Gopakumar";
  const position = "Senior Software Engineer";
  const age = 25;
  const location = "India";
  return (
    <div className="profile-card">
      <h2>Profile Card</h2>
      <p>{name}</p>
      <p>Position : {position}</p>
      <p>Age : {age}</p>
      <p>Location : {location}</p>
    </div>
  );
}

export default ProfileCard;
