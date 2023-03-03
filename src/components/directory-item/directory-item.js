import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles.js";

function DirectoryItem({ category }) {
  const { title, imageUrl } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
