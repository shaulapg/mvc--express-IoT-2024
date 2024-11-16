export interface Teacher {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  department: string;
}
export interface PaginatedTeacher {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Teacher[];
}
