import React, { useState, useEffect, useCallback } from "react";
import { client } from "../../services/Client";
import "../Recipes/Recipe.css";
import RecipeSlide from "../RecipeSlide";

const Recipes = () => {
  const [isRecipeLoading, setIsRecipeLoading] = useState(false);
  const [recipeSlides, setrecipeSlides] = useState([]);

  //the function below fetches the data from contentful

  //clean up data

  const cleanUprecipeSlides = useCallback((rawData) => {
    const cleanSlides = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const slideTitle = fields.title;
      const slideDescription = fields.description;
      const slideBg = fields.image.fields.file.url;
      const updatedSlide = { id, slideTitle, slideDescription, slideBg };
      return updatedSlide;
    });
    setrecipeSlides(cleanSlides);
  }, []);

  const getRecipeSlides = useCallback(async () => {
    setIsRecipeLoading(true);
    try {
      const response = await client.getEntries({
        content_type: "kitchenGroup4",
      });
      //return response;
      //response data spits out at an array with the 6 different recipe entries
      const responseData = response.items;
      //console.log(responseData);
      //use ternary condition here
      responseData ? cleanUprecipeSlides(responseData) : setrecipeSlides([]);
      setIsRecipeLoading(false);
    } catch (error) {
      console.log(error);
      setIsRecipeLoading(false);
    }
  }, [cleanUprecipeSlides]);

  useEffect(() => {
    getRecipeSlides();
  }, [getRecipeSlides]);

  if (isRecipeLoading) {
    return <h2>Recipe Loading...</h2>;
  }

  return (
    <div>
      {recipeSlides.map((item) => {
        const { id, slideBg, slideTitle, slideDescription } = item;
        return (
          <RecipeSlide
            slideTitle={slideTitle}
            slideBg={slideBg}
            slideDescription={slideDescription}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default Recipes;
