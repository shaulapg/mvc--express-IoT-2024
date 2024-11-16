import { z } from "zod";

export const courseSchema = z.object({
  course_name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  credits: z.number().min(1, { message: "Debe tener al menos un crédito" }),
  description: z
    .string()
    .min(10, { message: "La descripción debe tener al menos 10 caracteres" }),
  teacher_id: z.number().min(1, { message: "El id debe tener un caracter" }),
});
