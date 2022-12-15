import { AppBar, Stack, Toolbar, Typography } from "@mui/material";

function MUINabar() {
  return (
    <AppBar position="fixed">
      <Toolbar size="large" edge="center">
        <Stack
          sx={{
            width: "100%",
            fontFamily: "Poppins",
            textAlign: "center",

            textTransform: "uppercase",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
            }}
            color="inherit"
          >
            React Infinite Scroll & MUI
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default MUINabar;
