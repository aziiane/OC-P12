import { Outlet } from "react-router";
import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

function App() {
  return (
    <Flex direction="column" height="100vh">
      <Navbar />
      <Flex direction={"row"} height={"100%"} width="100%">
        <Sidebar />
        <Outlet />
      </Flex>
    </Flex>
  );
}

export default App;
