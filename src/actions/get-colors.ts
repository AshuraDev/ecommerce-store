"use server";

import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export const getColors = async (): Promise<Color[]> => {
  const response = await fetch(URL, { cache: "no-cache" });
  if (response.ok) {
    return response.json();
  }
  return [];
};
