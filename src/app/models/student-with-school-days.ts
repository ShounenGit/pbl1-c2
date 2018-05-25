import { Student } from './student';
import { SchoolDay } from './school-day';

export interface StudentWithSchoolDays extends Student {
  schoolDays: SchoolDay[];
}
