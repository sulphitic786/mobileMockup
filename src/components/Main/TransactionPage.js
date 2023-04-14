import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import Main from "./Main";

const TransactionPage = () => {

  return (
    <React.Fragment>
        <div style={{ width: "100%", alignItems:"center" }}>
            <Box
              d="flex"
              bg="#462d81"
              //bg="#0F3057"
              w={{ base: "85%", md: "33%" }}
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              pt={2}
              my="2"
              mx={"auto"}
              borderRadius="md"
              border="1.5px solid black"
              alignSelf={{ base: "center", md: "flex-start" }}
              //borderBottom="0.8em solid #D53F8C"
              // borderBottom="0.8em solid #805AD5"
            >
              <Main />
            </Box>
        </div>
    </React.Fragment>
  );
};

export default TransactionPage;