import React, { useState, useEffect } from "react";
import { client } from "../../services/Client";
import { createClient } from "contentful";

const Recipes = () => {
  const [isRecipeLoading, setIsRecipeLoading] = useState(false);
  const [recipeSlides, setrecipeSlides] = useState([]);

  //the function below fetches the data from contentful


  const getRecipeSlides = async () => {
    try {
      const response = await client.getEntries({
        content_type: "kitchenGroup4",
      });
      //return response;
      //response data spits out at an array with the 6 different recipe entries
      const responseData = response.items;
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipeSlides();
  }, [getRecipeSlides]);

  return (
    <div>
      <h1>MyRecipes</h1>
    </div>
  );
};

export default Recipes;
