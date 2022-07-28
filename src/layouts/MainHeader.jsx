import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoPrincipal from "../assets/logoPrincipal.png";
import BannerPrincipal from "../assets/bannerPrincipal.png";
import Mochilas from "../assets/mochilas.jpg";
import Accesories from "../assets/accesories.jpg";

const MainHeader = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-end flex-grow">
          <img src={LogoPrincipal} alt="" className="LogoPrincipal"></img>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/*banner section*/}
      <div>
        <img src={BannerPrincipal} alt="" className="BannerPrincipal"></img>
      </div>

      {/*Categorias*/}
      <section>
        <div className="col-12 text-center p-2 m-3">
          <h1>Categorias</h1>
        </div>
        <div className="col-12"></div>
      </section>

      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src={Mochilas}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src={Accesories}
            class="w-100 shadow-1-strong rounded mb-2"
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src={Accesories}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <img
            src={Mochilas}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </div>
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src={Mochilas}
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src={Mochilas}
            class="w-100 shadow-1-strong rounded mb-2"
            alt="Wintry Mountain Landscape"
          />
        </div>
      </div>
      {/*Categorias*/}
      <section>
        <div className="col-12 text-center p-2 m-3">
          <h1>Productos</h1>
        </div>
        <div className="col-12"></div>
      </section>
 
    </>
  );
};

export default MainHeader;
