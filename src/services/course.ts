import { Course } from "../interfaces/course";
import {
  findAllCourses,
  insertCourse,
  updateCourse,
  deleteCourse,
} from "../models/course";

// Obtener todos los alumnos
export const findAll = async (limit: number, offset: number) => {
  return await findAllCourses(limit, offset);
};
export const insert = async (teacher: Course) => {
  return await insertCourse(teacher);
};
export const update = async (id: number, teacher: Course) => {
  return await updateCourse(id, teacher);
};
export const deleteById = async (id: number) => {
  return await deleteCourse(id);
};
