"use client";

import { Place, PlaceComment, PlaceFeatures } from "@/types/Place";
import React from "react";
import PlaceDetail from "./PlaceDetail";
import Container from "../common/Container";

const Landing: React.FC<{
  place: Place;
  features: PlaceFeatures;
  comments: PlaceComment[];
}> = ({ comments, features, place }) => {
  return (
    <>
      <Container>
        <PlaceDetail place={place} features={features} comments={comments} />
      </Container>
    </>
  );
};

export default Landing;
