import React, { useState, useEffect, useCallback } from "react";
import { client } from "../client";

// console.log(client);

const Group4 = () => {
  const [isGrop4Loading, setGroup4Loading] = useState(false);
  const [group4Slides, setGroup4Slides] = useState([]);

  const getGroup4Slides = useCallback(async () => {
    try {
      const response = await client.getEntries({
        content_type: "kitchenGroup4",
      });
      // console.log(response);
      const responseData = response.items;
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getGroup4Slides();
  }, [getGroup4Slides]);

  return (
    <div>
      <h1>Kitchen Group4</h1>
    </div>
  );
};

export default Group4;
