import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ExploreIcon from "@mui/icons-material/Explore";

export default function Home() {
  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: "center",
        py: 10,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <ExploreIcon sx={{ fontSize: 80, color: "primary.main", mb: 3 }} />
      <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold" }}>
        Galaxy Finder
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Descubra as maravilhas do universo. Explore galáxias, aprenda sobre suas
        características e viaje pelas estrelas.
      </Typography>

      <Button
        component={Link}
        to="/galaxies"
        variant="contained"
        size="large"
        sx={{ borderRadius: "2rem", px: 4 }}
      >
        Explorar Galáxias
      </Button>
    </Container>
  );
}
