import {StudentWithSchoolDays} from '../models/student-with-school-days';

export const STUDENT_SCHOOL_DAYS_MOCK: StudentWithSchoolDays = {
  id: 1,
  studentNumber: '0K02001',
  name: '山田太郎',
  schoolDays: [
    {
     date: '2018-05-10',
     attendances: [
       {
         id: 1,
         status: 1,
       },
       {
         id: 2,
         status: 1,
       },
        {
          id: 3,
         status: 1,
       },
       {
         id: 4,
         status: 1,
       },
       {
         id: 5,
         status: 1,
       }
      ]
    },
    {
      date: '2018-05-11',
      attendances: [
        {
          id: 1,
          status: 1,
        },
        {
          id: 2,
          status: 1,
        },
        {
          id: 3,
          status: 1,
        },
        {
          id: 4,
          status: 1,
        },
        {
          id: 5,
          status: 1,
        }
      ]
    }
  ]
};
