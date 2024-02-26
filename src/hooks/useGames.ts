
import useData from "./useData";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    icon: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
  }
  

const useGames = (gameQuery: GameQuery) => useData<Game>('/games' , {params: { genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id, ordering: gameQuery?.sortOrder, search: gameQuery.searchText}}, [gameQuery.genre?.id , gameQuery.platform?.id, gameQuery?.sortOrder, gameQuery.searchText]);

export default useGames;