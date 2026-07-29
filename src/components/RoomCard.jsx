import { useState } from "react";
import "../styles/RoomCard.css";

function RoomCard({ room }) {

  const [liked, setLiked] = useState(false);

  return (
    <div className="room-card">
      <img src={room.image} alt={room.title} />

      <div className="room-content">
        <div className="room-top">
          <span>⭐ {room.rating}</span>
          <span
  onClick={() => setLiked(!liked)}
  style={{
    cursor: "pointer",
    fontSize: "22px",
  }}
>
  {liked ? "❤️" : "🤍"}
</span>
        </div>

        <h3>{room.title}</h3>

        <p className="room-type">{room.type}</p>

        <p>📍 {room.city}</p>

        <div className="room-features">
          <p>🛏️ {room.beds}</p>
          <p>📶 {room.wifi}</p>
          <p>🍽️ {room.food}</p>
        </div>

        <h2>{room.price}</h2>

        <button>View Details</button>
      </div>
    </div>
  );
}

export default RoomCard;