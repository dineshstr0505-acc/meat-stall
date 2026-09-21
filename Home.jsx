import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Fresh Meat, <span>Quality You Can Trust</span></h1>

          <p>
            Welcome to KB Meat Stall. We provide fresh, hygienic and
            high-quality meat for your everyday cooking needs.
          </p>

          <div className="hero-buttons">
            <Link to="/Meats" className="btn primary-btn">
              Shop Now
            </Link>

            <Link to="/About" className="btn secondary-btn">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose KB Meat Stall?</h2>

        <div className="feature-container">

          <div className="feature-card">
            <h3>Fresh Meat</h3>
            <p>
              We provide fresh and quality meat selected for your needs.
            </p>
          </div>

          <div className="feature-card">
            <h3>Hygienic</h3>
            <p>
              Our meat is handled and packed with proper hygiene and care.
            </p>
          </div>

          <div className="feature-card">
            <h3>Quick Delivery</h3>
            <p>
              Get your order delivered quickly and conveniently.
            </p>
          </div>

          <div className="feature-card">
            <h3>Best Quality</h3>
            <p>
              Quality products and customer satisfaction are our priority.
            </p>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="about-home">

        <div className="about-image">
        </div>

        <div className="about-content">
          <h2>Welcome to KB Meat Stall</h2>

          <p>
            KB Meat Stall is your trusted destination for fresh and
            quality meat. We offer a variety of meat products prepared
            with care and attention to hygiene.
          </p>

          <p>
            Whether you are cooking a simple family meal or preparing
            something special, KB Meat Stall is here to provide quality
            meat at a convenient price.
          </p>

          <Link to="/Meats" className="btn primary-btn">
            Explore Meats
          </Link>
        </div>

      </section>

      {/* Meat Categories */}
      <section className="categories">
        <h2>Our Meat Categories</h2>

        <div className="category-container">

          <div className="category-card">
            <h3>Chicken</h3>
            <p>Fresh and delicious chicken.</p>
            <Link to="/Meats">View More</Link>
          </div>

          <div className="category-card">
            <h3>Mutton</h3>
            <p>Quality mutton for your meals.</p>
            <Link to="/Meats">View More</Link>
          </div>

          <div className="category-card">
            <h3>Beef</h3>
            <p>Fresh cuts prepared with care.</p>
            <Link to="/Meats">View More</Link>
          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="cta">
        <h2>Ready to Order Fresh Meat?</h2>

        <p>
          Choose your favourite meat and place your order today!
        </p>

        <Link to="/Meats" className="btn cta-btn">
          Order Now
        </Link>
      </section>

    </div>
  );
}
export default Home;