import { StudentsAttendancesResponse } from '../models/student-with-attendances';

// APIのレスポンスのモック - /students/attendances
export const USERS_ATTENDANCES_MOCK: StudentsAttendancesResponse = {
  students: [
    {
      id: 1,
      studentNumber: "0K01001",
      name: "飯塚大地",
      attendances: [
        { id: 1, status: 2 },
        { id: 2, status: 1 },
        { id: 3, status: 0 },
        { id: 4, status: 0 },
        { id: 5, status: 0 },
      ]
    },
    {
      id: 2,
      studentNumber: "0K01002",
      name: "池拓海",
      attendances: [
        { id: 26, status: 0 },
        { id: 27, status: 0 },
        { id: 28, status: 0 },
        { id: 29, status: 0 },
        { id: 30, status: 0 },
      ]
    },
    {
      id: 2,
      studentNumber: "0K01002",
      name: "トラン・アン・ティエエエエン",
      attendances: [
        { id: 26, status: 0 },
        { id: 27, status: 0 },
        { id: 28, status: 0 },
        { id: 29, status: 0 },
        { id: 30, status: 0 },
      ]
    }
  ]
};

export const USERS_ATTENDANCES_MOCK2: StudentsAttendancesResponse = {
  students: [
    {
      id: 1,
      studentNumber: "0K01001",
      name: "飯塚大地",
      attendances: [
        { id: 1, status: 1 },
        { id: 2, status: 2 },
        { id: 3, status: 3 },
        { id: 4, status: 0 },
        { id: 5, status: 0 },
      ]
    },
    {
      id: 2,
      studentNumber: "0K01002",
      name: "池拓海",
      attendances: [
        { id: 26, status: 1 },
        { id: 27, status: 2 },
        { id: 28, status: 3 },
        { id: 29, status: 0 },
        { id: 30, status: 0 },
      ]
    },
    {
      id: 2,
      studentNumber: "0K01002",
      name: "トラン・アン・ティエエエエン",
      attendances: [
        { id: 26, status: 0 },
        { id: 27, status: 0 },
        { id: 28, status: 0 },
        { id: 29, status: 0 },
        { id: 30, status: 0 },
      ]
    }
  ]
};
