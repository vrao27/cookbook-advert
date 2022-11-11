import "./App.css";
import { Nav } from "./components/Nav";
import React, { useState, useEffect, useCallback } from "react";
import { client } from "./client";

import "./Group4/Group4.css";

function App() {
  const [isGrop4Loading, setIsGroup4Loading] = useState(false);
  const [group4Slides, setGroup4Slides] = useState([]);

  // clean up data

  const cleanUpGroup4Slides = useCallback((rawData) => {
    const cleanSlides = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      // console.log(fields);
      const slideTitle = fields.title;
      const slideDescription = fields.description;
      const directions = fields.directions;
      const ingredients = fields.ingredients;
      // console.log(direction, ingredients);
      const slideBg = fields.image.fields.file.url;
      const updatedSlide = {
        id,
        slideTitle,
        slideDescription,
        slideBg,
        directions,
        ingredients,
      };
      return updatedSlide;
    });
    setGroup4Slides(cleanSlides);
  }, []);

  const getGroup4Slides = useCallback(async () => {
    setIsGroup4Loading(true);
    try {
      const response = await client.getEntries({
        content_type: "kitchenGroup4",
      });
      // console.log(response);
      const responseData = response.items;
      // console.log(responseData);
      responseData ? cleanUpGroup4Slides(responseData) : setGroup4Slides([]);
      setIsGroup4Loading(false);
    } catch (error) {
      console.log(error);
      setIsGroup4Loading(false);
    }
  }, [cleanUpGroup4Slides]);

  useEffect(() => {
    getGroup4Slides();
  }, [getGroup4Slides]);

  // console.log(group4Slides);
  if (isGrop4Loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <Nav group4Slides={group4Slides} />
    </>
  );
}

export default App;
