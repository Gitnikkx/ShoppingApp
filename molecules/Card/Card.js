import React from "react";
import { Box, Grid, Text } from "../../atoms";

export const Card = ({ name, description, price }) => {
  return (
    <>
      <Grid bg="#80ced6" border="1px solid black" justifyContent="center">
        <Box
          bg="#d6cbd3"
          width="5rem"
          height="5rem"
          border="2px dotted black"
          mx="auto"
        ></Box>
        <Grid p="1rem" m="1rem" bg="#d5e1df">
          <Box>
            <Text fontSize="1.5rem" fontFamily="Verdana" textAlign="center">
              {name}
            </Text>
          </Box>
          <Box>
            <Text fontSize="1rem" fontFamily="Verdana" textAlign="center">
              {description}
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="1.5rem"
              fontFamily="Verdana"
              textAlign="center"
              m="auto"
            >
              PRICE -{price} $
            </Text>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
