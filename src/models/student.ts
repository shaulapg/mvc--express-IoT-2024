import { ResultSetHeader, RowDataPacket } from "mysql2";
import { Student } from "../interfaces/student";
import pool from "../db";

export const findAllStudents = async (): Promise<Student[]> => {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM students");
  return rows as Student[];
};

export const insertStudent = async (student: Student): Promise<Student> => {
  const {
    first_name,
    last_name,
    date_of_birth,
    email,
    address,
    phone,
    gender,
    grade_level,
  } = student;
  const [result] = await pool.query<ResultSetHeader>(
    `INSERT INTO students (first_name, last_name, date_of_birth, email, address, phone, gender, grade_level) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      first_name,
      last_name,
      date_of_birth,
      email,
      address,
      phone,
      gender,
      grade_level,
    ],
  );
  const { insertId } = result;
  return { id: insertId, ...student };
};
export const updateStudent = async (
  id: number,
  student: Student,
): Promise<Student> => {
  const {
    first_name,
    last_name,
    date_of_birth,
    email,
    address,
    phone,
    gender,
    grade_level,
  } = student;
  await pool.query<ResultSetHeader>(
    `UPDATE students
     SET first_name = ?, 
         last_name = ?, 
         date_of_birth = ?, 
         email = ?, 
         address = ?, 
         phone = ?, 
         gender = ?, 
         grade_level = ?
     WHERE id = ?;`,
    [
      first_name,
      last_name,
      date_of_birth,
      email,
      address,
      phone,
      gender,
      grade_level,
      id,
    ],
  );

  return { id, ...student };
};

export const deleteStudent = async (id: number): Promise<number> => {
  await pool.query<ResultSetHeader>(
    `DELETE FROM students WHERE id =
  ?`,
    [id],
  );
  return id;
};
