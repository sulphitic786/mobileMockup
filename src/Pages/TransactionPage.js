import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import HeaderBar from "../components/HeaderBar";
import Details from "../components/Details/Details";
import Main from "../components/Main/Main";
import { BudgetContext } from "../context/budget-context";
//import { useNavigate } from "react-router-dom";
import Alerts from "../components/Alerts";

const TransactionPage = () => {
  const { user } = useContext(BudgetContext);

  //const navigate = useNavigate();

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
              m={3}
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
