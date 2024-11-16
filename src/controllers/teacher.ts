import { Request, Response } from "express";

import { deleteById, findAll, insert, update } from "../services/teacher";
import { Teacher } from "../interfaces/teacher";

// Obtener todos los profesores
export const getTeacher = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;

    const offset = (page - 1) * limit;
    const teachers = await findAll(limit, offset);
    res.status(200).json(teachers);
  } catch (error) {
    res.status(400).json({ message: "Error al obtener profesores", error });
  }
};
export const createTeacher = async (req: Request, res: Response) => {
  try {
    const teacher: Teacher = req.body;
    await insert(teacher);
    res.status(201).json({ message: "Profesor creado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al crear profesor", error });
  }
};
export const updateTeacher = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    const teacher: Teacher = req.body;
    await update(id, teacher);
    res.status(201).json({ message: "Profesor actualizado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar profesor", error });
  }
};
export const deleteTeacher = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    await deleteById(id);
    res.status(201).json({ message: "Profesor eliminado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar profesor", error });
  }
};
