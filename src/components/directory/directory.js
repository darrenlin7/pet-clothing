import DirectoryItem from "../category-item/directory-item";
import { DirectoryContainer } from "./directory.styles.js";

function Directory({ categories }) {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
}

export default Directory;
