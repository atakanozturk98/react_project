import React from "react";
import { Container, Row, Col } from "reactstrap";

function Footer(){
    return(
        <Footer className="bg-dark text-white">
            <Container>
                <Row>
                    <Col>
                        <p>Atakan React Example</p>
                    </Col>
                </Row>
            </Container>
        </Footer>
    );
}

export default Footer;