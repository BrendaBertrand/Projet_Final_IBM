import React, { useState } from "react"; import {
    MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBBtn,
    MDBIcon, MDBInput, MDBCheckbox,
} from "mdb-react-ui-kit";
function Login() {
    const [justifyActive, setJustifyActive] = useState("tab1");
    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
    };
    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <MDBTabs pills justify
                className="mb-3 d-flex flex-row justify-content-between"
            >
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleJustifyClick("tab1")} active={justifyActive === "tab1"}
                    >
                        S’identifier
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleJustifyClick("tab2")} active={justifyActive === "tab2"}
                    >
                        S'inscrire
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>
            <MDBTabsContent>
                <MDBTabsPane show={justifyActive === "tab1"}>
                    <div className="text-center mb-3">
                        <p>S'identifier avec:</p>
                            <div
                                className="d-flex justify-content-between mx-auto" style={{ width: "40%" }}
                            >
                                <MDBBtn
                                    tag="a" color="none" className="m-1"
                                    style={{ color: "#1266f1" }}
                                >
                                    <MDBIcon fab icon="facebook-f" size="sm" />
                                </MDBBtn>
                                <MDBBtn
                                    tag="a" color="none" className="m-1"
                                    style={{ color: "#1266f1" }}
                                >
                                    <MDBIcon fab icon="twitter" size="sm" />
                                </MDBBtn>
                                <MDBBtn
                                    tag="a" color="none" className="m-1"
                                    style={{ color: "#1266f1" }}
                                >
                                    <MDBIcon fab icon="google" size="sm" />
                                </MDBBtn>
                                <MDBBtn
                                    tag="a" color="none" className="m-1"
                                    style={{ color: "#1266f1" }}
                                >
                                    <MDBIcon fab icon="github" size="sm" />
                                </MDBBtn>
                            </div>
                            <p className="text-center mt-3">ou :</p>
                    </div>
                    <MDBInput wrapperClass="mb-4" label="Adresse électronique" id="form1" type="email"
                    />
                    <MDBInput wrapperClass="mb-4" label="Mot de passe" id="form2" type="password"
                    />
                    <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Se souvenir de moi"
                        />
                        <a href="!#">Mot de passe oublié ?</a>
                    </div>
                    <MDBBtn className="mb-4 w-100" >S’identifier</MDBBtn>
                    <p className="text-center">
                        Vous n'êtes pas membre ? <span style={{color: "#3b71ca"}} onClick={() => handleJustifyClick("tab2")} active={justifyActive === "tab2"}>S'inscrire</span>
                    </p>
                </MDBTabsPane>
                <MDBTabsPane show={justifyActive === "tab2"}>
                    <div className="text-center mb-3">
                        <p>S'inscrire avec:</p>
                            <div
                                className="d-flex justify-content-between mx-auto" style={{ width: "40%" }}
                            >
                                <MDBBtn
                                    tag="a" color="none" className="m-1"
                                    style={{ color: "#1266f1" }}
                                >
                                    <MDBIcon fab icon="facebook-f" size="sm" />
                                </MDBBtn>
                                <MDBBtn
                                    tag="a" color="none" className="m-1"
                                    style={{ color: "#1266f1" }}
                                >
                                    <MDBIcon fab icon="twitter" size="sm" />
                                </MDBBtn>
                                <MDBBtn
                                    tag="a" color="none" className="m-1"
                                    style={{ color: "#1266f1" }}
                                >
                                    <MDBIcon fab icon="google" size="sm" />
                                </MDBBtn>
                                <MDBBtn
                                    tag="a" color="none" className="m-1"
                                    style={{ color: "#1266f1" }}
                                >
                                    <MDBIcon fab icon="github" size="sm" />
                                </MDBBtn>
                            </div>
                            <p className="text-center mt-3">ou :</p>
                    </div>
                    <MDBInput wrapperClass="mb-4" label="Nom" id="form1" type="password" />
                    <MDBInput wrapperClass="mb-4" label="Identifiant" id="form1" type="password"
                    />
                    <MDBInput wrapperClass="mb-4" label="Adresse électronique" id="form1" type="email" />
                    <MDBInput wrapperClass="mb-4" label="Mot de passe" id="form1" type="password"
                    />
                    <div className="d-flex justify-content-center mb-4">
                        <MDBCheckbox name="flexCheck" id="flexCheckDefault"
                            label="J'ai lu et j'accepte les conditions"
                        />
                    </div>
                    <MDBBtn className="mb-4 w-100">S'inscrire</MDBBtn>
                    <p className="text-center">
                        Vous avez déjà un compte ? <span style={{color: "#3b71ca"}} onClick={() => handleJustifyClick("tab1")} active={justifyActive === "tab1"}>S'identifer</span>
                    </p>
                </MDBTabsPane>
            </MDBTabsContent>
        </MDBContainer>
    );
}
export default Login;