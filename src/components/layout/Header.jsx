// Write all the code here
import React from "react";
import { IoFastFoodOutline } from "react-icons/io5"; import { Link, useSearchParams } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi"; import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion"; import DropdownMenu from './DropdownMenu';
import { useSelector } from "react-redux";


const Header = ({ isAuthenticated = false }) => {
  const items = useSelector(state => state.items);
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <IoFastFoodOutline />
      </motion.div>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/contact">Nous contacter</Link>
        <Link to="/about">A propos</Link>
        <Link to="/cart">
          <FiShoppingCart />
          <span className="badge badge-pill badge-success">{items.length >0 && items.length}</span>
        </Link>
        <DropdownMenu />
      </div>
    </nav>
  );
};
export default Header;
