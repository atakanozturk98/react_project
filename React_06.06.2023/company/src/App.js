
import React from "react";
import { Navbar } from "./Navbar";
import {Slider} from "./Slider";
import {About} from "./About";
import {Footer} from "./Footer";
import { Container } from "reactstrap";


function App() {

  const links =[
    {title: "Home", url:"/"},
    {title: "About", url:"/about"},
    {title: "Contact", url:"/contact"},
  ];

  const images = [
    "https://picsum.photos/800/300/?image=1",
    "https://picsum.photos/800/300/?image=2",
    "https://picsum.photos/800/300/?image=3",
  ]

  const content =[
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
  ];

  return (
    <div>
      <Navbar links={links} />
      <Container>
        <Slider images={images} />
        <About content={content} />
      </Container>
      <Footer/>
    </div>
  );



}

export default App;
