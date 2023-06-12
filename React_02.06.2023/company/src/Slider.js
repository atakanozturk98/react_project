import React from "react";
import { Carousel, CarouselItem, Container } from "reactstrap";

function Slider({images}){
    const slides = images.map((image,index) => (
        <CarouselItem key={index}>
            <img src={image} alt="Slider" className="d-block w-100"/>
        </CarouselItem>
    ));
    
    return (
        <Container>
            <Carousel>{slides}</Carousel>
        </Container>
    );
}

export default Slider;