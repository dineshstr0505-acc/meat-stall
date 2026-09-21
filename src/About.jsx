import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* About Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About <span>KB Meat Stall</span></h1>

          <p>
            Your trusted destination for fresh, hygienic and
            high-quality meat products.
          </p>

          <Link to="/Meats" className="about-btn">
            Explore Our Meats
          </Link>
        </div>
      </section>


      {/* Who We Are Section */}
      <section className="who-we-are">

        <div className="who-content">
          <h2>Who We Are</h2>

          <p>
            KB Meat Stall is a trusted meat shop that provides fresh,
            hygienic and high-quality meat products for our customers.
          </p>

          <p>
            We offer a variety of meat products including chicken,
            mutton and beef. Our products are carefully selected and
            prepared to provide a fresh and satisfying experience.
          </p>

          <p>
            Our goal is to make buying fresh meat simple and convenient
            through our online platform.
          </p>
        </div>

        <div className="who-box">
          <h3>KB Meat Stall</h3>
          <p>Fresh Meat • Quality • Hygiene</p>

          <div className="about-highlight">
            <h4>🥩 Fresh Products</h4>
            <p>Fresh meat selected with care.</p>
          </div>

          <div className="about-highlight">
            <h4>✨ Quality Service</h4>
            <p>Quality products for every customer.</p>
          </div>

          <div className="about-highlight">
            <h4>❤️ Customer Satisfaction</h4>
            <p>Your satisfaction is our priority.</p>
          </div>
        </div>

      </section>


      {/* Our Mission Section */}
      <section className="mission">

        <h2>Our Mission</h2>

        <p>
          Our mission is to provide fresh and quality meat products
          while giving customers a simple, convenient and reliable
          online shopping experience.
        </p>

      </section>


      {/* Why Choose Us */}
      <section className="about-features">

        <h2>Why Choose KB Meat Stall?</h2>

        <div className="about-feature-container">

          <div className="about-feature-card">
            <div className="feature-icon">🥩</div>
            <h3>Fresh Meat</h3>
            <p>
              We provide fresh meat products prepared with care
              for your everyday cooking needs.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="feature-icon">🧼</div>
            <h3>Hygienic</h3>
            <p>
              Our products are handled and packed with proper
              hygiene and attention.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="feature-icon">🛒</div>
            <h3>Easy Shopping</h3>
            <p>
              Browse different meat products and add your
              favourite items to your cart.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Quick Delivery</h3>
            <p>
              We aim to provide a convenient and quick ordering
              experience for our customers.
            </p>
          </div>

        </div>

      </section>


      {/* Meat Categories */}
      <section className="about-categories">

        <h2>What We Offer</h2>

        <div className="about-category-container">

          <div className="about-category-card">
            <h3>Chicken</h3>
            <p>
              Fresh and quality chicken suitable for your
              favourite dishes.
            </p>
            <Link to="/Meats">View Chicken</Link>
          </div>

          <div className="about-category-card">
            <h3>Mutton</h3>
            <p>
              Quality mutton prepared with care for delicious
              family meals.
            </p>
            <Link to="/Meats">View Mutton</Link>
          </div>

          <div className="about-category-card">
            <h3>Beef</h3>
            <p>
              Fresh cuts prepared carefully for your cooking needs.
            </p>
            <Link to="/Meats">View Beef</Link>
          </div>

        </div>

      </section>


      {/* Call To Action */}
      <section className="about-cta">

        <h2>Looking for Fresh Meat?</h2>

        <p>
          Explore our meat collection and choose your favourite products.
        </p>

        <div className="cta-buttons">

          <Link to="/Meats" className="about-btn">
            Shop Now
          </Link>

          <Link to="/Contact" className="about-outline-btn">
            Contact Us
          </Link>

        </div>

      </section>

    </div>
  );
}

export default About;