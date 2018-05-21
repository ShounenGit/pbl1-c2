export interface SchoolDay {
  date: string;
  periodCount: number;
}

// APIのレスポンス - /school_days
export interface SchoolDaysResponse {
  schoolDays: SchoolDay[];
}
