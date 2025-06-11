import AverageSessionChart from "@/components/charts/averageSessionChart";
import PerformanceChart from "@/components/charts/performanceChart";
import ScoreChart from "@/components/charts/scoreChart";
import UserActivityChart from "@/components/charts/userActivityChart";
import InformationCard from "@/components/ui/information-card";
import { fetchProfileDataById } from "@/services/fetchProfileData";
import { ResponseUserType } from "@/types";
import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const ProfilePage = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState<ResponseUserType | null>({});
  const navigate = useNavigate();
  useEffect(() => {
    fetchProfileDataById(id).then((data) => {
      if (!data) {
        navigate("/404");
        return;
      }
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
      pl={{ base: "32px", xl: "75px" }}
      gap={"32px"}
      overflowY={"auto"}
    >
      <Heading alignSelf={"start"} as={"h1"} fontSize={"48px"} fontWeight={500}>
        Bonjour{" "}
        <Text display={"inline"} color={"red"}>
          {userData?.user?.userInfos.firstName}
        </Text>
      </Heading>

      <Text>Félicitation ! Vous avez explosé vos objectifs hier 👏</Text>
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        gap={"32px"}
        paddingTop={"32px"}
      >
        <Flex flexDirection={"column"} width={"835px"} gap={"32px"}>
          <UserActivityChart data={userData?.activity?.sessions} />
          <Grid gridTemplateColumns={"repeat(3, 1fr)"} gap={4}>
            <GridItem>
              <AverageSessionChart data={userData?.averageSession?.sessions} />
            </GridItem>
            <GridItem>
              <PerformanceChart
                data={userData?.performance?.data}
                kind={userData?.performance?.kind}
              />
            </GridItem>
            <GridItem>
              <ScoreChart data={userData?.user?.todayScore} />
            </GridItem>
          </Grid>
        </Flex>
        <Flex
          flexDir={{ base: "row", xl: "column" }}
          gap={{ base: "16px", xl: "0" }}
          justifyContent={"space-between"}
        >
          <InformationCard
            label="Calories"
            data={userData?.user?.keyData.calorieCount}
            color="#FF0000"
            icon="energy"
            unit="kCal"
          />
          <InformationCard
            label="Porteines"
            data={userData?.user?.keyData.proteinCount}
            color="#4AB8FF"
            icon="chicken"
            unit="g"
          />
          <InformationCard
            label="Porteines"
            data={userData?.user?.keyData.carbohydrateCount}
            color="#F9CE23"
            icon="apple"
            unit="g"
          />
          <InformationCard
            label="Porteines"
            data={userData?.user?.keyData.lipidCount}
            color="#FD5181"
            icon="burger"
            unit="g"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfilePage;
