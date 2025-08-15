import { useState } from "react";
import "./UserCard.css"; // import the CSS


function UserCard({name,email}) {

  const [likes, setlikes] = useState(0);

  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <button className="like-button" onClick={() => setlikes(likes+1)}>👍 Like</button>
      <p className="likes-count">Likes : {likes}</p>
    </div>
  );

}

export default UserCard;
