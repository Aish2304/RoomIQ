import Hero from "../../components/Hero";
import Features from "../../components/Features";
import StatCard from "../../components/StatCard";
import SearchBar from "../../components/SearchBar";
import FeaturedRooms from "../../components/FeaturedRooms";

function Home() {
  return (
    <>
      <Hero />

      <SearchBar />

      <section className="stats-section">
        <StatCard
          number="5000+"
          title="Verified Rooms"
        />

        <StatCard
          number="1200+"
          title="Happy Students"
        />

        <StatCard
          number="300+"
          title="Verified Owners"
        />

        <StatCard
          number="98%"
          title="Success Rate"
        />
      </section>

      <FeaturedRooms />

      <Features />
    </>
  );
}

export default Home;