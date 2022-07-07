import React from "react";
import { Box, Grid } from "../atoms";
import { Card } from "../molecules";

export default function Home({ data }) {
  return (
    <>
      <div>
        <Box>
          <Grid gridTemplateColumns="1fr 1fr 1fr" gridGap="2rem">
            {data.map((item) => {
              return (
               
                  <Card
                    name={item?.title}
                    description={item?.description}
                    price={item?.price}
                  />
            
              );
            })}
          </Grid>
        </Box>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: { data },
  };
}
