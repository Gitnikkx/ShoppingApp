import React from "react";
import { Box, Text, Flex } from "atoms";

export const Banner = () => {
  return (
    <>
      <Box>
        <Box bg="pink" width="25rem" p="1rem">
          <Flex>
            <Box width="2rem" height="2rem" bg="blue"></Box>
            <Text></Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

// export async function getStaticProps() {
//   const res = await fetch("https:localhost:1337/api/banners");
//   const data = await res.json();
//   return {
//     props: { data },
//   };
// }

export default Banner;
