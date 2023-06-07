import React from "react";
import { Container, Row, Col } from "reactstrap";

function Footer (){
    return(
        <footer className="bg-dark text-white">
            <Container>
                <Row>
                    <Col>
                    <p> 2023 Company Website </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;