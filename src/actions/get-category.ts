"use server";

import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategory = async (id: string): Promise<Category | null> => {
  const response = await fetch(`${URL}/${id}`, { cache: "no-cache" });
  if (response.ok) {
    return response.json();
  }
  return null;
};
