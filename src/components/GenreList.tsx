import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const genres = [
    "Action",
    "Indie",
    "Adventure",
    "RPG",
    "Strategy",
    "Shooter",
    "Casual",
    "Simulation",
    "Puzzle",
    "Arcade",
    "Platformer",
    "Racing",
    "Massively Multiplayer",
    "Sports",
    "Fighting",
    "Family",
    "Board Games",
    "Educational",
    "Card",
  ];

  if (isLoading) {
    return (
      <>
        <Heading fontSize={"3xl"} marginBottom={3}>
          Genres
        </Heading>
        <List>
          {genres.map((genre) => (
            <HStack>
              <Skeleton height={8} width={8} borderRadius={10} marginY="6px" />
              <ListItem>
                <Button fontWeight="noraml" fontSize="lg" variant="link">
                  {genre}
                </Button>
              </ListItem>
            </HStack>
          ))}
        </List>
      </>
    ); // Handle loading state
  }

  if (error) {
    return <p>Error loading genres: {error}</p>; // Handle error state
  }

  return (
    <>
      <Heading fontSize={"3xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data &&
          data.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit={"cover"}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  onClick={() => onSelectGenre(genre)}
                  fontSize="lg"
                  variant="link"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
