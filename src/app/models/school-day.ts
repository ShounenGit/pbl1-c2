import {Attendance} from './attendance';

export interface SchoolDay {
  date: string;
  attendances?: Attendance[];
}

// APIのレスポンス - /school_days
export interface SchoolDaysResponse {
  schoolDays: SchoolDay[];
}
