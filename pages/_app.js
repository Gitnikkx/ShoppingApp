import React from "react";

function MyApp({ Component, pageProps }) {
  const lang = "en";
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
