export const Recipe = ({ item }) => {
  // console.log(item);

  return (
    <div className="recipe-container">
      <h1>{item.slideTitle}</h1>
      <p>{item.slideDescription}</p>

      <img src={item.slideBg} alt={item.slideTitle} />
      <h2>Ingredients</h2>
      <pre>{item.ingredients}</pre>
      <br />
      <h2>Directions</h2>
      <div>
        <pre>{item.directions}</pre>
      </div>
    </div>
  );
};
