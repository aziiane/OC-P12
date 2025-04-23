import { CompleteUserType, ResponseUserType } from "@/types";
import axios from "axios";

export async function fetchProfileDataById(
  idString?: string
): Promise<ResponseUserType> {
  if (!idString) {
    throw new Error("ID is required");
  }
  const id = Number(idString);
  try {
    const response = await axios.get(`http://localhost:3000/api/users/${id}`);
    return response.data;
  } catch {
    const response = await axios.get<CompleteUserType>(
      `/src/services/profileData.json`
    );
    console.log(response.data.USER_MAIN_DATA);
    const userData = response.data.USER_MAIN_DATA.find(
      (user) => user.id === id
    );
    const activityData = response.data.USER_ACTIVITY.find(
      (activity) => activity.userId === id
    );
    const averageSessionData = response.data.USER_AVERAGE_SESSIONS.find(
      (session) => session.userId === id
    );
    const performanceData = response.data.USER_PERFORMANCE.find(
      (performance) => performance.userId === id
    );

    console.log({
      user: userData,
      activity: activityData,
      averageSession: averageSessionData,
      performance: performanceData,
    });

    return {
      user: userData,
      activity: activityData,
      averageSession: averageSessionData,
      performance: performanceData,
    };
  }
}
