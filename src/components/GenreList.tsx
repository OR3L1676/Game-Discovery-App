import useGenres, { Genre } from "../hooks/useGenres";
import { List, ListItem } from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) {
    return <p>Loading genres...</p>; // Handle loading state
  }

  if (error) {
    return <p>Error loading genres: {error}</p>; // Handle error state
  }

  return (
    <>
      <List>
        {data &&
          data.map((genre) => <ListItem key={genre.id}>{genre.name}</ListItem>)}
      </List>
    </>
  );
};

export default GenreList;
