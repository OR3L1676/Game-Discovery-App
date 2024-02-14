import useGenres, { Genre } from "../hooks/useGenres";
import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => { 
  const { data, isLoading, error } = useGenres();

  if (isLoading) {
    return <Spinner></Spinner>; // Handle loading state
  }

  if (error) {
    return <p>Error loading genres: {error}</p>; // Handle error state
  }

  return (
    <>
      <List>
        {data &&
          data.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)}
                fontSize="lg" variant='link'>{genre.name}</Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
