"use server";

import { db } from "@/config/db";
import { revalidatePath } from "next/cache";

export const createHospitalAction = async (formData) => {
  try {
    // Assuming formData is of type FormData
    const data = Object.fromEntries(formData);
    const { name, city, state, department, established_year } = data;

    await db.execute(
      `INSERT INTO hospital (name, city, state, department, established_year) VALUES (?, ?, ?, ?, ?)`,
      [name, city, state, department, established_year]
    );

    revalidatePath("/hospitals");

    // return { success: true, message: "Hospital data submitted successfully" };
  } catch (error) {
    if (error.message === "NEXT_REDIRECT") throw error;
    console.log(error);

    return { success: false, message: "Error while submitting hospital data" };
  }
};
