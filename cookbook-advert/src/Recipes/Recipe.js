import { useParams } from "react-router-dom";
import "../components/styles/recipe.css";
import React, { useState, useEffect, useCallback } from "react";
import { client } from "../context/client";
import { useRef } from "react";
import CarouselSlide from "../components/Carousel/CarouselSlide";
// import Link from "react-dom";

export default function Recipe(props) {
  const { id } = useParams();

  // const newId = parseInt(id) + 1;
  // newId = id;
  // console.log(newId);

  return (
    <>
      {/* {/* <h1>
        {JSON.stringify(carouselSlides[id].slideTitle).replaceAll('"', "")}
      </h1> */}
      {/* <h1>{JSON.stringify(carouselSlides[0].slideTitle)}</h1>
      <img src={carouselSlides[0].slideImage} />
      <p>{JSON.stringify(carouselSlides[0].slideDescription)}</p> */}
      {/* <p>
       {JSON.stringify(carouselSlides[id].slideDescription).replaceAll(
      '"',
       ""
     )}
      </p> */}

      {/* <h1>{JSON.stringify(props.title)}</h1>
      <h1>{JSON.stringify(props.desciption)}</h1>
      <img src={props.img} alt="" />
      <p>{JSON.stringify(props.dat)}</p>
      <h1>{id}</h1>*/}

      <h1>{JSON.stringify(props.dat[id].slideTitle).replaceAll('"', "")}</h1>
      <p>
        {JSON.stringify(props.dat[id].slideDescription).replaceAll('"', "")}
      </p>
      <h1>
        <a href={parseInt(id) - 1}>Before</a>
      </h1>
      <img src={props.dat[id].slideImage} />
      <h1>
        <a href={parseInt(id) + 1}>Next</a>
      </h1>

      {/* {props.id.map((item) => {
        const { id, slideTitle, slideDescription, slideImage } = item;
        return (
          <>
            <CarouselSlide
              key={id}
              slideTitle={slideTitle}
              slideDescription={slideDescription}
              slideImage={slideImage}
            />
          </>
        );
      })} */}
    </>
  );
}
