"use client";
import React from "react";
import Hero from "./Hero";
import Container from "../common/Container";
import { Place } from "@/types/Place";
import PlaceSlider from "../common/PlaceSlider";

const Landing: React.FC<{ places: Place[] }> = ({ places }) => {
  return (
    <>
      <Container>
        <Hero />
        <PlaceSlider places={places} />
      </Container>
    </>
  );
};

export default Landing;
