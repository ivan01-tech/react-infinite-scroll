import { useCallback, useRef, useState } from "react";
import ImageListComp from "./Components/ImageListComp";
import MUINabar from "./Components/MUINabar";
import useFetch from "./Hooks/useFetch";
import { Alert, CircularProgress, Stack } from "@mui/material";

function App() {
  const [page, setPage] = useState(1);

  const URL = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_KEY}&page=${page}`;

  const { data, loading, isError, error, hasNextpage } = useFetch(URL);

  // console.log({ data, error, isError, loading, hasNextpage });

  // will content our observer
  const initObserver = useRef(null);

  const lasImageObserver = useCallback(
    (elt) => {
      if (loading) return;
      if (initObserver.current) initObserver.current.disconnect();

      initObserver.current = new IntersectionObserver(
        function (entries) {
          if (entries[0].isIntersecting) {
            // means that we are near the last element
            if (hasNextpage) setPage((prev) => prev + 1);
            else return;

            console.log("We are near the last post");
          }
        },
        {
          rootMargin: "100px",
        }
      );
      console.log(initObserver.current);
      if (elt) initObserver.current.observe(elt);
    },
    [loading, hasNextpage]
  );

  // if (loading) return "Loading...";

  if (isError)
    return (
      <Stack m={5} display="flex" justifyContent={"center"} alignItems="center">
        <Alert severity="error">{error.toString()}</Alert>
      </Stack>
    );

  return (
    <>
      <MUINabar />
      <ImageListComp lasImageObserver={lasImageObserver} imageList={data} />
      {loading && (
        <Stack
          m={5}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
        >
          <CircularProgress />
        </Stack>
      )}
    </>
  );
}

export default App;
