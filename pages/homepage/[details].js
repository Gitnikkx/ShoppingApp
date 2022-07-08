import React from "react";
import { Box, Grid, Text } from "../../atoms";

export const Details = ({ data }) => {
  return (
    <>
      <Box>
        <Text>PRODUCT INFO PAGE</Text>
        <Grid p="1rem" m="1rem" width="fit-content" bg="#F5EDCC">
          <Box bg="#D3ECH5">
            <Text fontSize="2rem" fontFamily="Verdana" textAlign="center">
              PRODUCT NAME - {data?.title}
            </Text>
          </Box>
          <Box bg="#A2B5AC">
            <Text fontSize="3rem" fontFamily="Verdana" textAlign="center">
              ABOUT- {data?.description}
            </Text>
          </Box>
          <Box bg="#A2B5BC">
            <Text fontSize="4rem" fontFamily="Verdana" textAlign="center" m="auto">
              PRICE-{data?.price} $
            </Text>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  return {
    paths: data.map((items) => ({
      params: { details: items.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${params.details}`);
    const data = await res.json();
    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { data },
    };
  } catch (e) {}
  return {
    notFound: true,
  };
}

export default Details;
