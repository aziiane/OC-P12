export interface UserType {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  todayScore: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
}

export interface ActivityType {
  userId: number;
  sessions: {
    day: string;
    kilogram: number;
    calories: number;
  }[];
}

export interface AverageSessionType {
  userId: number;
  sessions: {
    day: number;
    sessionLength: number;
  }[];
}

export interface PerformanceType {
  userId: number;
  kind: {
    [key: number]: string;
  };
  data: {
    value: number;
    kind: number;
  }[];
}

export interface CompleteUserType {
  USER_MAIN_DATA: UserType[];
  USER_ACTIVITY: ActivityType[];
  USER_AVERAGE_SESSIONS: AverageSessionType[];
  USER_PERFORMANCE: PerformanceType[];
}

export interface ResponseUserType {
  user?: UserType;
  activity?: ActivityType;
  averageSession?: AverageSessionType;
  performance?: PerformanceType;
}

export interface RechartsTickType {
  className: string;
  fill: string;
  height: number;
  index: number;
  orientation: string;
  payload: {
    index: number;
    coordinate: number;
    isShow: boolean;
    offset: number;
    tickCoord: number;
    value: number;
  };
  stroke: string;
  textAnchor: string;
  tickFormatter: string;
  verticalAnchor: string;
  visibleTicksCount: number;
  width: number;
  x: number;
  y: number;
}
