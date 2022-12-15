import { ImageListItem, ImageListItemBar } from "@mui/material";
import React from "react";

/**
 * this component is concern of rendering a single image but we want to add a ref to handle futures request
 */
const ImageItem = React.forwardRef(function ({ imageOBJ }, ref) {
  // const imageBody = <></>;

  const imageContent = ref ? (
    <ImageListItem ref={ref}>
      <img loading="lazy" src={imageOBJ?.urls?.small} alt={imageOBJ?.title} />
      <ImageListItemBar title={imageOBJ?.links?.download} />
    </ImageListItem>
  ) : (
    <ImageListItem>
      <img loading="lazy" src={imageOBJ?.urls?.small} alt={imageOBJ?.title} />
      <ImageListItemBar title={imageOBJ?.links?.download} />
    </ImageListItem>
  );

  return imageContent;
});

export default ImageItem;
