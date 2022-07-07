import React, { forwardRef } from "react";
import { Box } from "../Box";

export const Text = forwardRef(
  ({ children, id, classes, values, ...props }, textRef) => (
    <Box {...props} ref={textRef} className={classes}>
      {children || null}
    </Box>
  )
);
Text.defaultProps = {
  fontSize: "1.6rem",
  id: null,
};
