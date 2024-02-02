import React, { useContext } from "react";
import "./CartItems.css";
import remove_icon from "../../assets/cart_cross_icon.png";
import { ShopContext } from "../../context/ShopContext";
import plus_sign from "../../assets/plus.png";
import minus_sign from "../../assets/minus.png";
import { UserContext } from "../../context/UserContext";

const CartItems = () => {
  const {
    all_product,
    addToCart,
    cartItems,
    removeFromCart,
    getCartTotalAmount,
  } = useContext(ShopContext);

  // useEffect(()=>{
  //     localStorage.setItem('cartitems',JSON.stringify(cartItems));

  // },[cartItems])

  const { userInfo } = useContext(UserContext);

  const isUserActive = userInfo?.username;

  // if(!isUserActive){
  //     return (
  //         <div>
  //             <h1> Please Login To View your items</h1>
  //         </div>
  //     )
  // }
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="cartitem-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <div className="outer-rim">
                  <button className="cartitems-quantity">
                    {cartItems[e.id]}
                  </button>
                  <div className="cartitems-quantity-plus-minus">
                    <img
                      onClick={() => addToCart(e.id)}
                      src={plus_sign}
                      width="23px"
                      height="23px"
                    />
                    <img
                      onClick={() => removeFromCart(e.id)}
                      src={minus_sign}
                      width="23px"
                      height="23px"
                    />
                  </div>
                </div>

                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getCartTotalAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getCartTotalAmount()}</h3>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code enter it here</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
