import { useState, useEffect, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Paper,
  List,
  ListItemButton,
  ListItemText,
  Chip,
  InputAdornment,
  CircularProgress,
  Stack,
} from "@mui/material";
import {
  Search as SearchIcon,
  Star as StarIcon,
  Explore as ExploreIcon,
} from "@mui/icons-material";
import type { Galaxy, GalaxiesResponse } from "./types/galaxy-type";

const formatNumber = (num: number): string => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  if (num >= 1e12) {
    return `${formatter.format(num / 1e12)} trilhões`;
  }
  if (num >= 1e9) {
    return `${formatter.format(num / 1e9)} bilhões`;
  }
  if (num >= 1e6) {
    return `${formatter.format(num / 1e6)} milhões`;
  }

  return new Intl.NumberFormat("pt-BR").format(num);
};

export default function Galaxies() {
  const [galaxies, setGalaxies] = useState<Galaxy[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGalaxy, setSelectedGalaxy] = useState<Galaxy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalaxies = async () => {
      try {
        setLoading(true);
        const response = await fetch("/galaxies.json");
        if (!response.ok) throw new Error("Erro ao carregar dados");
        const data: GalaxiesResponse = await response.json();
        setGalaxies(data.galaxies);
        setSelectedGalaxy(data.galaxies[0]);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };
    fetchGalaxies();
  }, []);
  const normalize = (str: string) =>
    str
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase();

  const filteredGalaxies = useMemo(
    () =>
      galaxies.filter((g) => normalize(g.name).includes(normalize(searchTerm))),
    [galaxies, searchTerm]
  );

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflowY: "auto",
        background: "linear-gradient(to bottom, #0f172a, #312e81)",
      }}
    >
      <Container maxWidth="xl" sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
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
            <ExploreIcon fontSize="large" sx={{ color: "slateblue" }} />
            Galaxy Finder
          </Typography>
        </Box>
        <Box
          sx={{
            width: "400px",
            gap: 3,
            minWidth: { md: "350px" },
          }}
        >
          <Stack sx={{ flex: 1 }}>
            <TextField
              variant={"outlined"}
              placeholder="Buscar galáxias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 3,
                width: "390px",
                gap: 3,
                minWidth: {
                  md: "350px",
                  display: "flex",
                  flexDirection: "column",
                },
              }}
            />
          </Stack>
        </Box>

        <Stack direction={"row"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              height: { xs: "auto", md: "70vh" },
            }}
          >
            <Stack>
              <Paper
                elevation={3}
                sx={{
                  width: { xs: "100%", md: "400px" },
                  minWidth: { md: "350px" },
                  display: "flex",
                  flexDirection: "column",
                  height: { xs: "400px", md: "100%" },
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    borderBottom: 1,
                    borderColor: "divider",
                    backgroundColor: "rgba(108, 92, 231, 0.1)",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontSize: { xs: "1.1rem", sm: "1.25rem" },
                    }}
                  >
                    <StarIcon /> Galáxias ({filteredGalaxies.length})
                  </Typography>
                </Box>

                <Box sx={{ flex: 1, overflowY: "auto" }}>
                  <List disablePadding>
                    {filteredGalaxies.map((galaxy) => (
                      <ListItemButton
                        key={galaxy.id}
                        onClick={() => setSelectedGalaxy(galaxy)}
                        selected={selectedGalaxy?.id === galaxy.id}
                        sx={{
                          py: 1.5,
                          "&.Mui-selected": {
                            backgroundColor: "rgba(108, 92, 231, 0.2)",
                            borderLeft: "4px solid #6c5ce7",
                          },
                          "&:hover": {
                            backgroundColor: "rgba(108, 92, 231, 0.1)",
                          },
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 600,
                                fontSize: { xs: "0.95rem", sm: "1rem" },
                              }}
                            >
                              {galaxy.name}
                            </Typography>
                          }
                          secondary={
                            <Box sx={{ mt: 0.5 }}>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                  mb: 0.5,
                                  fontSize: { xs: "0.8rem", sm: "0.875rem" },
                                }}
                              >
                                Estimado: {formatNumber(galaxy.stars)} estrelas
                              </Typography>
                              <Chip
                                label={galaxy.type}
                                size="small"
                                variant="outlined"
                                color="secondary"
                                sx={{
                                  fontSize: { xs: "0.7rem", sm: "0.75rem" },
                                }}
                              />
                            </Box>
                          }
                        />
                      </ListItemButton>
                    ))}
                  </List>

                  {filteredGalaxies.length === 0 && (
                    <Box sx={{ p: 3, textAlign: "center" }}>
                      <Typography variant="body1" color="text.secondary">
                        Nenhuma galáxia encontrada
                      </Typography>
                      {searchTerm && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 1 }}
                        >
                          Termo: "{searchTerm}"
                        </Typography>
                      )}
                    </Box>
                  )}
                </Box>
              </Paper>
            </Stack>

            {/* Detalhes da galáxia */}
            <Stack>
              {selectedGalaxy ? (
                <Paper
                  elevation={3}
                  sx={{
                    flex: 1,
                    p: { xs: 2, sm: 3 },
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ overflowY: "auto" }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
                          mb: 1,
                        }}
                      >
                        {selectedGalaxy.name}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          mb: 2,
                          flexWrap: "wrap",
                        }}
                      >
                        <Chip
                          icon={<StarIcon />}
                          label={`Estimam-se: ${formatNumber(
                            selectedGalaxy.stars
                          )} estrelas`}
                          color="default"
                          variant="outlined"
                        />
                        <Chip
                          label={selectedGalaxy.type}
                          color="secondary"
                          variant="outlined"
                        />
                      </Box>

                      <Typography
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                        }}
                      >
                        📍 {selectedGalaxy.distance}
                      </Typography>
                    </Box>

                    <Box
                      component="img"
                      src={selectedGalaxy.image}
                      alt={selectedGalaxy.name}
                      sx={{
                        width: "100%",
                        height: { xs: "250px", sm: "300px", md: "350px" },
                        objectFit: "cover",
                        borderRadius: 2,
                        mb: 2,
                        boxShadow: 2,
                      }}
                    />

                    <Box sx={{ flex: 1, overflowY: "auto" }}>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 2,
                          lineHeight: 1.7,
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                        }}
                      >
                        {selectedGalaxy.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              ) : (
                <Paper
                  elevation={3}
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    p: 4,
                  }}
                >
                  <Box>
                    <ExploreIcon
                      sx={{ fontSize: "4rem", color: "text.secondary", mb: 2 }}
                    />
                    <Typography variant="h6" color="text.secondary">
                      Selecione uma galáxia para explorar
                    </Typography>
                  </Box>
                </Paper>
              )}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
