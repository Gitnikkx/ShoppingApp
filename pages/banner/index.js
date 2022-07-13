import React from "react";
import { Box } from "atoms";
import { BannerCard } from "molecules";

export const Banner = ({ dataApi }) => {
  console.log(dataApi?.data[0]?.attributes?.name);
  return (
    <>
      <Box>
        <BannerCard
          title={dataApi?.data[0]?.attributes?.name}
          src={dataApi?.data[0]?.attributes?.image?.data?.attributes?.url}
          alt={dataApi?.data[0]?.attributes?.image?.data?.attributes?.alternativeText}
        />
      </Box>
      {/* chage integrtion in title acc to populate */}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/cards?populate=*");
  const dataApi = await res.json();
  return {
    props: {
      dataApi,
    },
  };
}
export default Banner;
