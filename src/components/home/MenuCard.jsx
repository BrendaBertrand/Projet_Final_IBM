import React from "react";
import { motion } from "framer-motion";
import Popup from 'reactjs-popup';
import { useDispatch } from 'react-redux';
import { addToCart } from "../lib/actions";

const MenuCard = ({ item}) => {

  const dispatch = useDispatch();
  const add = (item) => {
    dispatch(addToCart(item));
   };


  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay: item.delay
      }}
    >
      <div></div>
      <main>
        <img src={process.env.PUBLIC_URL + "/assets/" + item.src} alt={item.name} />

        <h5>{item.price}€</h5>

        <p>{item.name}</p>
        
        <Popup trigger=
          {<button>Buy Now</button>}
          onOpen={() => add(item)}>
          <div style={{ color: "red", transform: 'translate(0%,-500%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>Added to cart!</div>

        </Popup>

      </main>
    </motion.div>
  );
};

export default MenuCard;
