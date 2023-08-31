import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const arr = [1, 2, 3, 4];

  const orders = [
    {
      id: 123,
      statut: "En cours de livraison",
      articles: [{
        ref: "burger_1",
        quantity: 2,
        price: 5
      }, {
        ref: "burger_2",
        quantity: 5,
        price: 10
      }, {
        ref: "burger_3",
        quantity: 10,
        price: 12
      }],
      qty: 17,
      subTotal: 180,
      tax: 37.8,
      livraison: 10,
      adresse: 'rue .. ',
      tel: '0499',
      contactName: 'Brenda',
      PayementMode: "CB",
      PayementRef: "azerty",
      PayementDate: "31-08-2023"
    },
    {
      id: 1234,
      statut: "En cours de traitement",
      articles: [{
        ref: "burger_1",
        quantity: 5,
        price: 5
      }, {
        ref: "burger_2",
        quantity: 50,
        price: 10
      }, {
        ref: "burger_3",
        quantity: 10,
        price: 12
      }],
      qty: 65,
      subTotal: 645,
      tax: 135.45,
      livraison: 10,
      adresse: 'cité .. ',
      tel: '0496',
      contactName: 'Bertrand',
      PayementMode: "CB",
      PayementRef: "azertyuio",
      PayementDate: "12-09-2023"
    }
  ];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Numéro de commande</th>
              <th>Etat</th>
              <th>Qté</th>
              <th>Montant</th>
              <th>Mode de paiement</th>
              <th>Suivi</th>
            </tr>
          </thead>

          <tbody>
            {orders.map(order => {
               return (<tr>
                <td>{order.id}</td>
                <td>{order.statut}</td>
                <td>{order.qty}</td>
                <td>{Number(order.subTotal) + Number(order.tax) + Number(order.livraison)}€</td>
                <td>{order.PayementMode}</td>
                <td><Link to={`/order/${order.id}`}>
                  <AiOutlineEye />
                </Link></td>
              </tr>)

            })}


          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
