import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { ImgProps } from "@chakra-ui/react";
import useData from "./useData";
import { Genre } from "./useGenres";
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
  }
  

const useGames = (gameQuery: GameQuery) => useData<Game>('/games' , {params: { genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id, ordering: gameQuery?.sortOrder, search: gameQuery.searchText}}, [gameQuery.genre?.id , gameQuery.platform?.id, gameQuery?.sortOrder, gameQuery.searchText]);

export default useGames;