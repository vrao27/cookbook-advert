import Group4Slide from "../Group4/Group4Slide";

export const Home = ({ group4Slides }) => {
  return (
    <>
      <div>
        {group4Slides.map((item) => {
          const { id, slideBg, slideTitle, slideDescription } = item;
          return (
            <div key={id}>
              <Group4Slide
                slideTitle={slideTitle}
                slideBg={slideBg}
                slideDescription={slideDescription}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
