export interface Card {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; linkLocation: string };
  location: { name: string; linkLocation: string };
  image: string;
  episode: [];
  url: string;
  created: string;
}
