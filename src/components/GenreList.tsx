import React from "react";
import useGenres from "../hooks/useGenres";
import { List, ListItem } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  if (isLoading) {
    return <p>Loading genres...</p>; // Handle loading state
  }

  if (error) {
    return <p>Error loading genres: {error}</p>; // Handle error state
  }

  return (
    <>
      <List>
        {genres &&
          genres.map((genre) => (
            <ListItem key={genre.id}>{genre.name}</ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
