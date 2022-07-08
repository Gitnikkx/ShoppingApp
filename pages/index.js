import React from "react";
import { useState } from "react";
import Formik, { useFormik } from "formik";
import { Box, Text } from "atoms";

// function saveData(value) {
//   var input = document.getElementById("saveServer").value;
//   localStorage.setItem("output", input);
//   var input = document.getElementById("saveServer");
//   localStorage.setItem("server", input.value);
//   var storedValue = localStorage.getItem("server");
// }
export const Home = ({ val }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      var input = document.getElementById("email");
      localStorage.setItem("outputKey", input.value);
      console.log(outputKey);

      //   const val;
      //  localStorage.setItem(val,{values});
      //  console.log(val);
    },
  });
  const text = "new value";
  const [ButtonText, setButtonText] = useState(text);
  function handleClick() {
    setButtonText(localStorage.getItem("outputKey"));
  }
  return (
    <>
      <Box>
        <Text>New Form</Text>

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <button type="submit">Submit</button>
        </form>
        <Box mt="2rem">
          <button onClick={handleClick}>Check entered value </button>
          <Box border="0.5px solid black" width="fit-content" p="0.5rem">
            <Text fontSize="1rem">{ButtonText}</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
