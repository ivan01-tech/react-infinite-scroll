import { Box, ImageList } from "@mui/material";
import ImageItem from "./ImageItem";

function ImageListComp({ imageList = [], lasImageObserver }) {
  console.log(imageList);
  /**
   *we add a ref  only if it's the last element on the array
   */
  let content =
    imageList.length > 0 &&
    imageList.map((img, ind) => {
      if (ind === imageList.length - 1)
        return (
          <ImageItem ref={lasImageObserver} key={img.id + ind} imageOBJ={img} />
        );
      else return <ImageItem key={img.id + ind} imageOBJ={img} />;
    });

  return (
    <Box sx={{ marginTop: 10, width: "auto", height: "auto" }}>
      <ImageList variant="masonry" cols={4} gap={8}>
        {content}
      </ImageList>
    </Box>
  );
}

export default ImageListComp;
