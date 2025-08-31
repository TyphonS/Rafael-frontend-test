import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ExploreIcon from "@mui/icons-material/Explore";

export default function Home() {
  return (
    <Box
      sx={{
        with: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: "url('/src/assets/galaxy-background.jpg')",
        backgroundSize: "cover",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          textAlign: "center",
          py: 10,
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Stack
          direction={"row"}
          spacing={3}
          alignItems={"center"}
          justifyContent="center"
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(to left,  #fefeffff, #1e2f67ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
          <ExploreIcon sx={{ fontSize: 80, color:"slateblue",  mb: 1 }} />

            Galaxy Finder
          </Typography>
        </Stack>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Descubra as maravilhas do universo. Explore galáxias, aprenda sobre
          suas características e viaje pelas estrelas.
        </Typography>

        <Button
          component={Link}
          to="/galaxies"
          variant="contained"
          size="medium"
          sx={{ borderRadius: "2rem", px: 4 }}
        >
          Explorar Galáxias
        </Button>
      </Container>
    </Box>
  );
}
