import React from "react";
const OrderDetails = () => {

    const url = window.location.href;
    const order_id = url.split('/').pop();
    const orders = [
        {
            id: 123,
            statut: "En cours de livraison",
            articles: [{
                ref: "burger_1",
                name: "Cheese",
                quantity: 2,
                price: 5
            }, {
                ref: "burger_2",
                name: "cheese vegan",
                quantity: 5,
                price: 10
            }, {
                ref: "burger_3",
                name: "cheese frites",
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
                name: "Cheese",
                quantity: 5,
                price: 5
            }, {
                ref: "burger_2",
                name: "cheese vegan",
                quantity: 50,
                price: 10
            }, {
                ref: "burger_3",
                name: "cheese frites",
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
    const order = orders.find(item => item.id == order_id)

    return (
        <section className="orderDetails">
            <main>
                <h1>Détails de la commande</h1>
                <div>
                    <h1>Livraison</h1>
                    <p>
                        <b>Adresse : </b>
                        {order.adresse}
                    </p>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p>
                        <b>Nom : </b>
                        {order.contactName}
                    </p>
                    <p>
                        <b>N° de téléphone : </b>
                        {order.tel}
                    </p>
                </div>
                <div>
                    <h1>État</h1>
                    <p>
                        <b>Etat de la commande : </b>
                        {order.statut}
                    </p>
                    <p>
                        <b>Déposée le : </b>
                        {'samedi 23 février 2002'}
                    </p>
                    <p>
                        <b>Délivré le : </b>
                        {'dimanche 23 février 2003'}
                    </p>
                </div>
                <div>
                    <h1>Paiement</h1>
                    <p>
                        <b>Mode de paiement : </b>
                        {order.PayementMode}
                    </p>
                    <p>
                        <b>Référence du paiement : </b>
                        #{order.PayementRef}
                    </p>
                    <p>
                        <b>Payé le : </b>
                        {order.PayementDate}
                    </p>
                </div>
                <div>
                    <h1>Montant</h1>
                    <p>
                        <b>Sous-total : </b>{order.subTotal}€
                    </p>
                    <p>
                        <b>Frais de livraison : </b>{order.livraison}€
                    </p>
                    <p>
                        <b>TVA : </b>{order.tax}€
                    </p>
                    <p>
                        <b>Montant total : </b>{Number(order.livraison) + Number(order.subTotal) + Number(order.tax)}€
                    </p>
                </div>
                <article>
                    <h1>Articles commandés</h1>
                    {order.articles.map(item => {
                        return (
                            <div>
                                <h4>{item.name}</h4>
                                <div>
                                    <span>{item.quantity}</span> x <span>{item.price}€</span>
                                </div>
                            </div>
                        )
                    })}

                    <div>
                        <h4 style={{  fontWeight: 800}}>
                            Sous-total
                        </h4>
                        <div style={{  fontWeight: 800 }} >
                            {order.subTotal}€
                        </div>
                    </div>
                </article>
            </main>
        </section>
    );
};
export default OrderDetails;