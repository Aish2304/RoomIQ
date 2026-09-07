import "../styles/SearchBar.css";

function SearchBar() {
  return (
    <section className="search-section">

      <div className="search-box">

        <div>

          <label>City</label>

          <select>

            <option>Pune</option>

            <option>Mumbai</option>

            <option>Nagpur</option>

          </select>

        </div>

        <div>

          <label>Property</label>

          <select>

            <option>PG</option>

            <option>Hostel</option>

            <option>Flat</option>

          </select>

        </div>

        <div>

          <label>Budget</label>

          <select>

            <option>₹5000-10000</option>

            <option>₹10000-15000</option>

            <option>₹15000+</option>

          </select>

        </div>

        <button>

          🔍 Search

        </button>

      </div>

    </section>
  );
}

export default SearchBar;