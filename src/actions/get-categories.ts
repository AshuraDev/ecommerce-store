"use server";

import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(URL, { cache: "no-cache" });
  if (response.ok) {
    return response.json();
  }
  return [];
};
