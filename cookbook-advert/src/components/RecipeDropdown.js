import Dropdown from "react-bootstrap/Dropdown";

function theRecipesDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Recipes
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="Recipe-1">Recipe 1</Dropdown.Item>
        <Dropdown.Item href="Recipe-2">Recipe 2</Dropdown.Item>
        <Dropdown.Item href="Recipe-3">Recipe-3"</Dropdown.Item>
        <Dropdown.Item href="Recipe-4">Recipe-4</Dropdown.Item>
        <Dropdown.Item href="Recipe-5">Recipe-5</Dropdown.Item>
        <Dropdown.Item href="Recipe-6">Recipe-6"</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default theRecipesDropdown;
