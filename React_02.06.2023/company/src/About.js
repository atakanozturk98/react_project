import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

function About({content}) {
    return(
    <Card>
        <CardBody>
            <CardText>{content}</CardText>
        </CardBody>
    </Card>
    );
}

export default About;