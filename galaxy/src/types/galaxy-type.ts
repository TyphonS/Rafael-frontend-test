export interface Galaxy {
  id: number;
  name: string;
  stars: number;
  type: "Espiral" | "Elíptica" | "Irregular" | "Lenticular";
  distance: string;
  description: string;
  image: string;
}

export interface GalaxiesResponse {
  galaxies: Galaxy[];
}

export interface GalaxyExplorerState {
  galaxies: Galaxy[];
  searchTerm: string;
  selectedGalaxy: Galaxy | null;
  loading: boolean;
  error: string | null;
}
