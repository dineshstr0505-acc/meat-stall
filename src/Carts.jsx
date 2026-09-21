import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "./Carts.css";

function Carts() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Empty cart
  if (cart.length === 0) {
    return (
      <div className="cart-page">

        <div className="cart-header">
          <h1>🛒 Your Cart</h1>
          <p>Review your selected meat products</p>
        </div>

        <div className="empty-cart">

          <div className="empty-cart-icon">
            🛒
          </div>

          <h2>Your Cart is Empty</h2>

          <p>
            You haven't added any meat products
            to your cart yet.
          </p>

          <Link to="/Meats" className="shop-btn">
            Shop Now
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="cart-page">

      {/* Header */}
      <div className="cart-header">
        <h1>🛒 Your Cart</h1>
        <p>Review your selected meat products</p>
      </div>

      <div className="cart-container">

        {/* Cart Products */}
        <div className="cart-products">

          <div className="cart-title">

            <h2>
              Cart Items ({cart.length})
            </h2>

            <button
              className="clear-btn"
              onClick={clearCart}
            >
              Clear Cart
            </button>

          </div>

          {cart.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              {/* Product Image */}
              <div className="cart-image">
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>

              {/* Product Details */}
              <div className="cart-details">

                <h3>{item.name}</h3>

                <p className="item-type">
                  {item.type}
                </p>

                <p className="item-price">
                  ₹{item.price} / kg
                </p>

                {/* Quantity */}
                <div className="quantity-box">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>

                {/* Item Total */}
                <p className="item-total">
                  Total: ₹
                  {item.price * item.quantity}
                </p>

                {/* Remove */}
                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  🗑 Remove
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* Order Summary */}
        <div className="order-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Products</span>
            <span>{cart.length}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span className="free">
              FREE
            </span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={() =>
              alert(
                `Order placed successfully!\nTotal Amount: ₹${total}`
              )
            }
          >
            Proceed to Checkout
          </button>

          <Link
            to="/Meats"
            className="continue-btn"
          >
            ← Continue Shopping
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Carts;