"use server";

import { db } from "@/config/db";
import { redirect } from "next/navigation";

export const contactAction = async (fullName, email, message) => {
  // console.log("previousState", previousState);
  try {
    // const { fullName, email, message } = Object.fromEntries(formData.entries());
    // console.log(fullName, email, message);
    await db.execute(
      `insert into contact_form (full_name, email, message) values (?, ? , ?)`,
      [fullName, email, message]
    );
    return { success: true, message: "form submitted successfully" };
    // redirect("/");
  } catch (error) {
    if (error.message === "NEXT_REDIRECT") throw error;
    return { success: false, message: "error while submitting" };
  }
};

// redirect() is a server-only function. It throws a special Next.js response to perform a server-side redirect — which only works during server-side rendering (SSR), server actions, or loaders.
