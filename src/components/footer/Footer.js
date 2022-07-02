import React from 'react';
import './style.scss';
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

function Footer(props) {
    return (
        <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              
              <h5>ARIF E-KART</h5>
              <p>
              Arif E-Kart is an ecommerce company and has headquarters in Bangalore, Karnataka, India.
              </p>
            </div>
          </Col>

          <Col lg="2" md="3" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="4" md="5" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Silicon Valley, Bangalore</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: +91-8660790990</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: arifhussainb2019@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <button style={{background:"darkorange",color:"#fff"}}>
                send
              </button>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 BootomLineFooter">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Arif. All Rights
              Reserved.
            </p>
          </Col>
          
        </Row>
      </Container>
    </footer>
    );
}

export default Footer;