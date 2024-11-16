export interface Professor {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  department: string;
}
export interface PaginatedProfessor {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Professor[];
}
