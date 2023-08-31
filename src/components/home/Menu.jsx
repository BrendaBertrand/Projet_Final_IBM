import React from "react";
import MenuCard from "./MenuCard";
import { burgers } from "../../data";


const Menu = () => {

  
    return (
        <section id="menu">
            <h1>MENU</h1>
            <div>
                {burgers.map((element, idx) => <MenuCard key={idx} item={element} />
                )}
            </div>
        </section>
    );
};
export default Menu;