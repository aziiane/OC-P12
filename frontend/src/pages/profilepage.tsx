import { Box } from "@chakra-ui/react";
import { useParams } from "react-router";

const ProfilePage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Box w={"100%"} background={"white"} color={"black"}>
      ProfilePage
    </Box>
  );
};

export default ProfilePage;
