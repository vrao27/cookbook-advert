import empty from "../asset/Empty.png";
export const NotFound = () => {
  return (
    <div className="notfound-container">
      <img className="not-found" src={empty} alt="404 page" />
      <h2>something goes wrong, please refresh your page!</h2>
    </div>
  );
};
