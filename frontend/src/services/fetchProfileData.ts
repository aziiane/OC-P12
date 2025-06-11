import {
  ActivityType,
  AverageSessionType,
  CompleteUserType,
  PerformanceType,
  ResponseUserType,
  UserType,
} from "@/types";
import axios from "axios";

export async function fetchProfileDataById(
  idString?: string
): Promise<ResponseUserType | null> {
  if (!idString) {
    throw new Error("ID is required");
  }
  const id = Number(idString);
  try {
    const userData = await axios.get<{ data: UserType }>(
      `http://localhost:3123/user/${id}`
    );
    const activityData = await axios.get<{ data: ActivityType }>(
      `http://localhost:3123/user/${id}/activity`
    );
    const averageSessionData = await axios.get<{ data: AverageSessionType }>(
      `http://localhost:3123/user/${id}/average-sessions`
    );
    const performanceData = await axios.get<{ data: PerformanceType }>(
      `http://localhost:3123/user/${id}/performance`
    );
    if (
      !userData.data ||
      !activityData.data ||
      !averageSessionData.data ||
      !performanceData.data
    ) {
      throw new Error("Data not found");
    }
    return {
      user: userData.data.data,
      activity: activityData.data.data,
      averageSession: averageSessionData.data.data,
      performance: performanceData.data.data,
    };
  } catch {
    const response = await axios.get<CompleteUserType>(
      `/src/services/profileData.json`
    );
    const userData = response.data.USER_MAIN_DATA.find(
      (user) => user.id === id
    );
    if (!userData) {
      return null;
    }

    const activityData = response.data.USER_ACTIVITY.find(
      (activity) => activity.userId === id
    );
    const averageSessionData = response.data.USER_AVERAGE_SESSIONS.find(
      (session) => session.userId === id
    );
    const performanceData = response.data.USER_PERFORMANCE.find(
      (performance) => performance.userId === id
    );

    return {
      user: userData,
      activity: activityData,
      averageSession: averageSessionData,
      performance: performanceData,
    };
  }
}
