import React from "react";
import Image from "next/image";
import { Box, Flex, Text } from "atoms";

export const BannerCard = ({ title, src, alt }) => {
  return (
    <>
      <Box bg="pink" p="1rem">
        <Flex bg="pink">
          <Box width="4rem" height="4rem">
            <Image src={src} alt={alt} height={40} width={40} />
          </Box>
          <Text>{title}</Text>
        </Flex>
      </Box>
    </>
  );
};
