export const Recipe = ({ item }) => {
  // console.log(item);
  return (
    <div>
      <h1>{item.slideTitle}</h1>
      <p>{item.slideDescription}</p>
      <img src={item.slideBg} alt={item.slideTitle} />
      <pre>{item.ingredients}</pre>
      <br />
      <pre>{item.directions}</pre>
    </div>
  );
};

/* <p>
        {item.ingredients
          .split("-")
          .filter((ingredient) => ingredient !== "")
          .map((ingredient) => (
            <div key={ingredient}> - {ingredient}</div>
          ))}
      </p> */
