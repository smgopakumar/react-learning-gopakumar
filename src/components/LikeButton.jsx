import React, { useState } from "react";

export default function LikeButton() {
  const [liked, setliked] = useState(false);

  const tooggleLike = () => {
    setliked((l) => !l);
  };

  return (
    <button
      onClick={tooggleLike}
      style={{
        padding: "10px 15px",
        backgroundColor: liked ? "#ff4081" : "#ccc",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {liked ? "Liked" : "Like"}
    </button>
  );
}
