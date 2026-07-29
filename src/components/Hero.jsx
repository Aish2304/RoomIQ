import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Find Your Perfect <span>Room</span>
        </h1>

        <p>
          Discover verified PGs, hostels, flats and roommates
          across India with AI-powered recommendations.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Search Rooms
          </button>

          <button className="secondary-btn">
            Explore Nearby
          </button>

        </div>

      </div>

      <div className="hero-right">

        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700"
          alt="Room"
        />

      </div>

    </section>
  );
}

export default Hero;