import { useParams } from "react-router-dom";
import CarouselSlide from "./Carousel/CarouselSlide";
import "./styles/recipe.css";
import React, { useState, useEffect, useCallback } from "react";
import { client } from "../context/client";
import { useRef } from "react";

export default function Recipe(props) {
  const { id } = useParams();
  const { slideTitle, slideDescription, slideImage } = props;
  const [isCarouselLoading, setIsCarouselLoading] = useState(false);
  const [carouselSlides, setCarouselSlides] = useState([]);
  const [count, setCount] = useState(0);

  const ref = useRef(null);

  const cleanupCarouselSlides = useCallback((rawData) => {
    const cleanSlides = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const slideTitle = fields.title;
      const slideDescription = fields.description;
      const slideImage = fields.image.fields.file.url;
      const updatedSlide = { id, slideTitle, slideDescription, slideImage };
      return updatedSlide;
    });
    setCarouselSlides(cleanSlides);
  }, []);

  const getCarouselSlides = useCallback(async () => {
    setIsCarouselLoading(true);
    try {
      const response = await client.getEntries({
        content_type: "kitchenGroup4",
      });
      const responseData = response.items;
      console.log(responseData);
      if (responseData) {
        cleanupCarouselSlides(responseData);
      } else {
        setCarouselSlides([]);
      }
      setIsCarouselLoading(false);
    } catch (error) {
      console.log(error);
      setIsCarouselLoading(false);
    }
  }, [cleanupCarouselSlides]);

  useEffect(() => {
    getCarouselSlides();
  }, [getCarouselSlides]);

  // const nextRecipe = () => {
  //   <Route path={`./${id}`} />;
  // };

  console.log(carouselSlides);
  return (
    <>
      <h1>
        {JSON.stringify(carouselSlides[id].slideTitle).replaceAll('"', "")}
      </h1>

      <img src={carouselSlides[id].slideImage} />
      {/* <button onClick={nextRecipe}>Next</button> */}
      {/* <h1>sddas</h1> */}

      <p>
        {JSON.stringify(carouselSlides[id].slideDescription).replaceAll(
          '"',
          ""
        )}
      </p>
    </>
  );
}
