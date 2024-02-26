import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CiticScore = ({ score }: Props) => {
  let color =
    score > 85 ? "green" : score > 70 ? "yellow" : score > 0 ? "red" : "";
  return (
    <>
      <Badge colorScheme={color} fontSize="14px" padding={2} borderRadius="4px">
        {score ? score : "NO SCORE"}
      </Badge>
    </>
  );
};

export default CiticScore;
