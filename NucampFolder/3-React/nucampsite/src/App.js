import React from "react";
import "./App.css";
import CampsiteCard from "./features/campsites/CampsiteCard";
import { CAMPSITES } from "./app/shared/CAMPSITES";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import NucampLogo from "./app/assets/img/logo.png";

function App() {
  return (
    <div className='App'>
      <CampsiteCard campsite={CAMPSITES[0]} />
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={NucampLogo} alt='nucamp logo' />
          </NavbarBrand>
        </Container>
      </Navbar>
      I'm ready for the workshop!
    </div>
  );
}

export default App;
