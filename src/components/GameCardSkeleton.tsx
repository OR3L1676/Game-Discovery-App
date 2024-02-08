import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <div>
      <Card borderRadius={10} overflow="hidden">
        <Skeleton
          height={{ sm: "450px", md: "300px", lg: "250px", xl: "300px" }}
          width={{ sm: "200px", md: "300px", lg: "400px", xl: "400px" }}
        />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCardSkeleton;
