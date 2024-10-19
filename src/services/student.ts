//services
import { Student } from "../interfaces/student";
import {
  findAllStudents,
  insertStudent,
  updateStudent,
  deleteStudent,
} from "../models/student";

export const findAll = async () => {
  return await findAllStudents();
};
export const insert = async (student: Student) => {
  return await insertStudent(student);
};
export const update = async (id: number, student: Student) => {
  return await updateStudent(id, student);
};
export const deleteById = async (id: number) => {
  return await deleteStudent(id);
};
