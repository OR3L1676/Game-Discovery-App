import useGenres, { Genre } from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
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
                <Text fontSize="lg">{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
