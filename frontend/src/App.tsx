import { Outlet } from "react-router";
import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

function App() {
  return (
    <Flex
      background={"black"}
      direction="column"
      height={"100%"}
      overflow={"scroll"}
    >
      <Navbar />
      <Flex
        direction={"row"}
        height={"fill-available"}
        width="100%"
        minHeight={"calc(100% - 61px)"}
      >
        <Sidebar />
        <Outlet />
      </Flex>
    </Flex>
  );
}

export default App;
