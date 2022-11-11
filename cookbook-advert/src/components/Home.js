import Group4Slide from "../Group4/Group4Slide";
export const Home = ({ group4Slides }) => {
  return (
    <>
      <div>
        {group4Slides.map((item) => {
          const { id, slideBg, slideTitle, slideDescription } = item;
          return (
            <>
              <Group4Slide
                key={id}
                slideTitle={slideTitle}
                slideBg={slideBg}
                slideDescription={slideDescription}
              />
            </>
          );
        })}
      </div>
    </>
  );
};
