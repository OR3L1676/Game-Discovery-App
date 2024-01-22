import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const GridTest = () => {
  return (
    <>
      <Grid templateAreas={`"head head" "assest main" "assest foot"`} gap={1}>
        <GridItem
          area="head"
          bg="yellow"
          border="2px solid black"
          borderRadius="5px"
        >
          head
        </GridItem>
        <GridItem
          area="assest"
          bg="green"
          border="2px solid black"
          borderRadius="5px"
        >
          assest
        </GridItem>
        <GridItem
          area="main"
          bg="blue"
          border="2px solid black"
          borderRadius="5px"
          w="100%"
        >
          main
        </GridItem>
        <GridItem
          area="foot"
          bg="grey"
          border="2px solid black"
          borderRadius="5px"
          w="100%"
        >
          foot
        </GridItem>
      </Grid>
    </>
  );
};

export default GridTest;
