import { useParams } from "react-router-dom";
import "../components/styles/recipe.css";
import React, { useState, useEffect, useCallback } from "react";
import { client } from "../context/client";
import { useRef } from "react";
import CarouselSlide from "../components/Carousel/CarouselSlide";
// import Link from "react-dom";

export default function Recipe(props) {
  const { id } = useParams();

  return (
    <>
      <h1>{JSON.stringify(props.dat[id].slideTitle).replaceAll('"', "")}</h1>
      <p>
        {JSON.stringify(props.dat[id].slideDescription).replaceAll('"', "")}
      </p>
      <img src={props.dat[id].slideImage} />
    </>
  );
}
