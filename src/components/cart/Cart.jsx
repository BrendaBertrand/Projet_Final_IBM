import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { burgers } from "../../data";
import { useState,useEffect } from "react";


const CartItem = ({ value, title, img, increment, decrement, price }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={process.env.PUBLIC_URL + `/assets/${img}`} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [subTotal, setSubTotal] = useState(0.00);
  const [total, setTotal] = useState(0.00);
  const [shipping, setShipping] = useState(0.00);
  const [tax, setTax] = useState(0.00);

  const items = useSelector(state => state.items);

  const calculTotal = (a, b) => Number((Number(a) * Number(b)).toFixed(2));

  useEffect(() => {
      let totalLoc = 0;
      items.map(item => totalLoc += calculTotal(item.quantity, item.details.price))
      setSubTotal(totalLoc===0 ? 0 : totalLoc.toFixed(1));
      setTotal(totalLoc !== 0 ? (totalLoc + shipping).toFixed(2) : 0);
      setShipping(totalLoc !== 0 ? 10 : 0);
  },[items, shipping])

  const increment = (item) => { };

  const decrement = (item) => { };

  return (
    <section className="cart">
      <main>
        {burgers.map((element, idx) => <CartItem key={idx} img={element.src} title={element.name}
          value={0} increment={() => increment()}
          decrement={() => decrement()} />
        )}

        {/* <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}

        // Add the function for decrementing the order by 1 
       
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        // Add the function for decrementing the order by 2
       
        /> */}

        {/* Fill up the code for Cheese Burger similarly */}


        <article>
          <div>
            <h4>Sub Total</h4>
            <p>{subTotal}€</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>{tax}€</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>{shipping}€</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>{total}€</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
