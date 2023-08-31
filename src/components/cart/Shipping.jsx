import React, { useEffect } from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';
import { useState } from "react";
import PhoneInput from "react-phone-number-input/input";



const Shipping = () => {
  const [states, setStates] = useState([]);
  const [pays, setPays] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const removeNonNumbers = (e) => e.target.value = e.target.value.replace(/\D/, '');


  useEffect(() => {
    setStates(State.getStatesOfCountry(pays));
    console.log(pays)
  }, [pays])

  return (
    <section className="shipping">
      <main>
        <h1>Détails de la livraison</h1>
        <form>
          <div>
            <label>Adresse</label>
            <input type="text" placeholder="Introduisez votre adresse" />
          </div>
          <div>
            <label>Code Postal</label>
            <input type="text" onKeyUp={(e) => removeNonNumbers(e)} placeholder="Introduisez votre code postal" />
          </div>
          <div>
            <label>Ville</label>
            <input type="text" placeholder="Introduisez votre ville" />
          </div>
          <div>
            <label>Pays</label>
            <select onChange={(event) => setPays(event.target.value)} id="paysInput">
              <option value="">Pays</option>
              {Country && Country.getAllCountries().map(country => <option key={country.isoCode} value={country.isoCode}>{country.name}</option>)}
            </select>
          </div>
          <div>
            <label>Etat/Région</label>
            <select >
              <option value="">Etat/Région</option>
              {(State && states !== [] && states).map(state =>
                <option key={state.isoCode} value={state.isoCode}>{state.name}</option>)}
            </select>
          </div>
          <div>
            <label>Téléphone</label>
            <PhoneInput
              country={pays}
              value={phoneNumber}
              onChange={setPhoneNumber}
              placeholder="Introduisez votre numéro de téléphone" />
          </div>
   

          <Popup position="top center" trigger=
            {<button type="button submit" className="px-5 my-3">Confirmer la commande</button>}
            >
            <div style={{width:"30vh",  color: "red", transform: 'translate(0%, -500%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>Votre commande est en cours de traitement</div>

          </Popup>
        </form>
      </main>
    </section >
  );
};

export default Shipping;
