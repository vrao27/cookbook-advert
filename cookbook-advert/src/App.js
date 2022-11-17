import TopNavBar from "./components/TopNavBar";
import Carousel from "./components/Carousel/Carousel";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import PageNotFound from "./components/PageNotFound";
import Recipe from "./Recipes/Recipe";
import React, { useState, useEffect, useCallback } from "react";
import { client } from "./context/client";
import { useRef } from "react";

function App() {
  const [isCarouselLoading, setIsCarouselLoading] = useState(false);
  const [carouselSlides, setCarouselSlides] = useState([]);

  const ref = useRef(null);

  const cleanupCarouselSlides = useCallback((rawData) => {
    const cleanSlides = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const slideTitle = fields.title;
      const slideDescription = fields.description;
      const slideImage = fields.image.fields.file.url;
      const updatedSlide = {
        id,
        slideTitle,
        slideDescription,
        slideImage,
      };
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

  console.log(carouselSlides);

  return (
    <div className="App">
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/recipe/:id"
          element={
            <Recipe
              title={carouselSlides.slideTitle}
              desciption={carouselSlides.slideDescription}
              img={carouselSlides.slideImage}
              dat={carouselSlides}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
