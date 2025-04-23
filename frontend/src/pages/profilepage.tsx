import { fetchProfileDataById } from "@/services/fetchProfileData";
import { ResponseUserType } from "@/types";
import { Box, Flex, Heading, Highlight, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProfilePage = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState<ResponseUserType>({});
  useEffect(() => {
    fetchProfileDataById(id).then((data) => {
      setUserData(data);
    });
  }, [id]);

  return (
    <Flex
      w={"100%"}
      background={"white"}
      color={"black"}
      height={"100%"}
      flexDirection={"column"}
      padding={"64px 32px"}
      alignItems={"center"}
      gap={"16px"}
    >
      <Heading alignSelf={"start"} as={"h1"} fontSize={"48px"} fontWeight={500}>
        Bonjour{" "}
        <Text display={"inline"} color={"red"}>
          {userData.user?.userInfos.firstName}
        </Text>
      </Heading>
    </Flex>
  );
};

// font-family: Roboto;
// font-weight: 500;
// font-size: 48px;
// line-height: 24px;
// letter-spacing: 0px;

export default ProfilePage;
