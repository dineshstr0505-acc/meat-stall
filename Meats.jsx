import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import "./Meats.css";
import chickenimg from "./assets/chicken.jpg";
import cbreastimg from "./assets/Cbreast.jpg";
import muttonimg from "./assets/mutton.jpg";
import muttoncurryimg from "./assets/mcurry.jpg";
import beefimg from "./assets/beef.jpg";
import bcurryimg from "./assets/bcurry.jpg";

function Meats() {
    const { addToCart } = useCart();
const navigate = useNavigate();



  const [selectedCategory, setSelectedCategory] = useState("All");

  const meats = [
    {
      id: 1,
      name: "Chicken",
      type: "Fresh Chicken",
      category: "Chicken",
      price: 220,
      image: chickenimg,
      description: "Fresh and hygienically cleaned chicken."
    },
    {
      id: 2,
      name: "Chicken Breast",
      type: "Fresh Chicken",
      category: "Chicken",
      price: 280,
      image: cbreastimg,
      description: "Tender and fresh chicken breast pieces."
    },
    {
      id: 3,
      name: "Mutton",
      type: "Fresh Mutton",
      category: "Mutton",
      price: 850,
      image: muttonimg ,
      description: "Fresh and quality mutton cuts."
    },
    {
      id: 4,
      name: "Mutton Curry Cut",
      type: "Fresh Mutton",
      category: "Mutton",
      price: 900,
      image: muttoncurryimg,
      description: "Perfectly cut mutton for delicious curries."
    },
    {
      id: 5,
      name: "Beef",
      type: "Fresh Beef",
      category: "Beef",
      price: 500,
      image: beefimg,
      description: "Fresh beef cuts prepared with care."
    },
    {
      id: 6,
      name: "Beef Curry Cut",
      type: "Fresh Beef",
      category: "Beef",
      price: 550,
      image: bcurryimg,
      description: "Quality beef cuts suitable for curries."
    }
  ];

  const filteredMeats =
    selectedCategory === "All"
      ? meats
      : meats.filter(
          (meat) => meat.category === selectedCategory
        );

  // Add to Cart
  const handleAddToCart = (meat) => {
    addToCart(meat);
    alert(`${meat.name} added to cart!`);
  };

  // Buy Now
  const handleBuyNow = (meat) => {
  addToCart(meat);
  navigate("/carts");
};
  return (
    <div className="meats-page">

      {/* Header */}
      <section className="meats-header">

        <h1>Our Fresh Meats</h1>

        <p>
          Fresh, hygienic and quality meat products
          for your everyday cooking needs.
        </p>

      </section>

      {/* Categories */}
      <section className="meat-categories">

        <button
          className={
            selectedCategory === "All" ? "active" : ""
          }
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>

        <button
          className={
            selectedCategory === "Chicken" ? "active" : ""
          }
          onClick={() => setSelectedCategory("Chicken")}
        >
          Chicken
        </button>

        <button
          className={
            selectedCategory === "Mutton" ? "active" : ""
          }
          onClick={() => setSelectedCategory("Mutton")}
        >
          Mutton
        </button>

        <button
          className={
            selectedCategory === "Beef" ? "active" : ""
          }
          onClick={() => setSelectedCategory("Beef")}
        >
          Beef
        </button>

      </section>

      {/* Products */}
      <section className="meat-products">

        <h2>Choose Your Meat</h2>

        <div className="meat-container">

          {filteredMeats.map((meat) => (

            <div
              className="meat-card"
              key={meat.id}
            >

              <div className="meat-image">

                <img
                  src={meat.image}
                  alt={meat.name}
                />

              </div>

              <div className="meat-details">

                <span className="meat-type">
                  {meat.type}
                </span>

                <h3>{meat.name}</h3>

                <p>
                  {meat.description}
                </p>

                <div className="meat-price">
                  ₹{meat.price}
                  <span> / kg</span>
                </div>

                <button
                  className="add-cart-btn"
                  onClick={() =>
                    handleAddToCart(meat)
                  }
                >
                  🛒 Add to Cart
                </button>

                <button
                  className="buy-btn"
                  onClick={() =>
                    handleBuyNow(meat)
                  }
                >
                  Buy Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Quality Section */}
      <section className="meat-quality">

        <h2>Freshness & Quality Guaranteed</h2>

        <div className="quality-container">

          <div className="quality-card">
            <div>🥩</div>
            <h3>Fresh Meat</h3>
            <p>
              We provide fresh meat products
              selected with care.
            </p>
          </div>

          <div className="quality-card">
            <div>🧼</div>
            <h3>Hygienic</h3>
            <p>
              Meat is handled and packed
              with proper hygiene.
            </p>
          </div>

          <div className="quality-card">
            <div>🚚</div>
            <h3>Quick Delivery</h3>
            <p>
              Get your meat order delivered
              conveniently.
            </p>
          </div>

          <div className="quality-card">
            <div>❤️</div>
            <h3>Best Service</h3>
            <p>
              Customer satisfaction is
              our priority.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Meats;