"use server";

import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getSizes = async (): Promise<Size[]> => {
  const response = await fetch(URL, { cache: "no-cache" });
  if (response.ok) {
    return response.json();
  }
  return [];
};
