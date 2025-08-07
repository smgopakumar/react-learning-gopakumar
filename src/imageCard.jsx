import react from "react";

function ImageCard() {
  const imageUrl = "https://picsum.photos/200/300";
  const descrption = "This is a placeholder image";

  return (
    <div className="image-card">
      <img
        src={imageUrl}
        alt="Placeholder graphic with grey background and centered text reading 150 x 150. The image is simple and neutral, conveying a sense of minimalism. No other objects or people are present."
      />
      <p>{descrption}</p>
    </div>
  );
}

export default ImageCard;
