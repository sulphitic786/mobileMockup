import React, { useContext } from "react";
import { Box, } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import { BudgetContext } from "../../context/budget-context";
import Form from "./Form/Form";
import { Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import TransactionList from "../TransactionList";
import { Select } from "@chakra-ui/react/dist/chakra-ui-react.cjs";
// import TbSend from "react-icons";
import { FaHistory } from "react-icons/fa";
// import IoQrCodeSharp from "react-icons";

const Main = () => {
  const { balance } = useContext(BudgetContext);
  return (
    <Box
      d="flex"
      flexDir="column"
      // justifyContent="center"
      // alignItems="center"
      gap="1em"
      //justifyContent="space-between"
      //bg="yellow.200"
      width="98%"
      pt={2}
    >
    <Select
        id="type"
        alignItems="left"
        textAlign="left"
        justifyContent="left"
        color="white"
        value="Type"
        width="30%"
        onChange={34}
        //bg="purple"
        fontWeight="bold"
        cursor="pointer"
        border="2px solid red"
        // focusBorderColor="white.500"
      >Edric JayeBB
        <option
          value="Income"
          cursor="pointer"
          style={{ background: "#462d81", color: "white" }}
        >
          Edric Jaye
        </option>
        <option
          value="Expense"
          style={{ background: "#462d81", color: "white" }}
        >
          Logout
        </option>
      </Select>

    <Text 
      p={0} 
      color="gray.100"
      size="lg"
      fontWeight="normal"
      >
      Available Balance
    </Text>
      <Heading
        //ref={main}
        textAlign="center"
        // padding={2}
        as="h6"
        size="lg"
        color="gray.100"
        // border="2px solid #A0AEC0"
        width="97%"
        mt={0}
      >
        ${balance}
      </Heading>

      <Box
       d="flex"
       justifyContent="space-around"
       alignItems="center"
       width="90%"
       bg="#232234"
       py="3"
       mx="auto"
       >
        <Box>
        <Icon color="gray.100" as={FaHistory} />
        {/* <Icon as={TbSend} /> */}
          <Text
          size="lg"
          color="gray.100"
          >
          Send</Text>
        </Box>
       <Box>
       <Icon color="gray.100" as={FaHistory} />
        <Text
        size="lg"
        color="gray.100"
        >
        Recieved</Text>
       </Box>
       <Box>
        <Icon color="gray.100" as={FaHistory} />
        <Text
        size="lg"
        color="gray.100"
        >
        History</Text>
       </Box>

      </Box>
      <Box width="100%" ><TransactionList /></Box>
    </Box>
  );
};

export default Main;


