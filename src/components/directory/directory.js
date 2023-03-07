import DirectoryItem from "../directory-item/directory-item";
import { DirectoryContainer } from "./directory.styles.js";
import { CategoriesContext } from "../../contexts/categories.context";
import { useContext } from "react";

function Directory() {
  const { categories } = useContext(CategoriesContext);

  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
}

export default Directory;
