import React, { useState, useEffect } from "react";
import { client } from "../client";

const Group4 = () => {
  const [isGrop4Loading, setGroup4Loading] = useState(false);
  const [group4Slides, setGroup4Slides] = useState([]);

  const getGroup4Slides = async () => {
    try {
      const response = await client.getEntries({
        content_type: "kitchenGroup4",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGroup4Slides();
  }, []);

  return (
    <div>
      <h1>Kitchen Group4</h1>
    </div>
  );
};

export default Group4;
