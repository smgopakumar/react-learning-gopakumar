import { useState } from "react";


function UserCard({name,role}) {

  const [likes, setlikes] = useState(0);

  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <button onClick={() => setlikes(likes+1)}>👍 Like</button>
      <p>Likes : {likes}</p>
    </div>
  );

}

export default UserCard;
