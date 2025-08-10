import react from "react";

function ProfileCardTwo(props) {
  return (
    <div className="profile-card">
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
}

export default ProfileCardTwo;
