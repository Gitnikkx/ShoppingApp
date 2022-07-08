import React from "react";
import Link from "next/link";
import { Box, Grid } from "../../atoms";
import { Card } from "../../molecules";

export const Homepage = ({ data }) => {
  console.log(data);
  return;
  <Box>
    <Grid gridTemplateColumns="1fr 1fr 1fr" gridGap="1.9rem">
      {data?.map((item) => {
        return (
          <Link href={"/homepage/" + data?.id}>
            <Card name={item?.title} description={item?.description} price={item?.price} />
          </Link>
        );
      })}
      ;
    </Grid>
  </Box>;
};

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: { data },
  };
}

export default Homepage;
