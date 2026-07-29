import RoomCard from "./RoomCard";
import rooms from "../data/rooms";
import "../styles/RoomCard.css";

function FeaturedRooms() {
  return (
    <section className="rooms-section">

      <div className="rooms-heading">
        <h2>Featured Rooms</h2>
        <p>Find the best verified accommodations.</p>
      </div>

      <div className="rooms-grid">

        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedRooms;