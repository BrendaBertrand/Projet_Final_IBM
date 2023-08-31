import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateCart,removeFromCart } from "../lib/actions";


const CartItem = ({ item }) => {

  const dispatch = useDispatch();
  const update = (item, qty) => {
    dispatch(updateCart(item, qty));
  };
  const remove = (item) => {
    dispatch(removeFromCart(item))
  }
  const [count, setCount] = useState(item.quantity);


  const increment = (item) => {
    let temp = count + 1; // Nécessaire car délai entre le setState et la mise à jour effective
    setCount(temp);
    update(item, temp);
  };

  const decrement = (item) => {
    if (count - 1 > 0) {
      let temp = count - 1; // Nécessaire car délai entre le setState et la mise à jour effective
      setCount(temp);
      update(item, temp);
    }
  };

  return (
    <div className="cartItem">
      <div>
        <h4>{item.details.name}</h4>
        <img src={process.env.PUBLIC_URL + `/assets/${item.details.src}`} alt={item.details.name} />
      </div>

      <div>
        <button onClick={() => decrement(item)}>-</button>
        <input type="number" readOnly value={item.quantity} />
        <button onClick={() => increment(item)}>+</button>
        <button
          type="button"
          className="btn btn-danger remove mx-3"
          onClick={() => remove(item)}>
          X
        </button>
      </div>
    </div>
  )
};

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
    setSubTotal(totalLoc === 0 ? 0 : Number(totalLoc.toFixed(2)));
    setTax(totalLoc === 0 ? 0 : Number((totalLoc*0.21).toFixed(2)))
    setShipping(totalLoc !== 0 ? 10 : 0);
    setTotal(totalLoc !== 0 ? Number((subTotal + tax + shipping ).toFixed(2)) : 0);
  }, [items, shipping])


  return (
    <section className="cart">
      <main>
        {items.map((element, idx) => <CartItem key={idx} item={element} />
        )}

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
