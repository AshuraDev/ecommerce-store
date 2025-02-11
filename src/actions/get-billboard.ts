"use server";

import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboard = async (id: string): Promise<Billboard | null> => {
  const response = await fetch(`${URL}/${id}`, { cache: "no-cache" });
  if (response.ok) {
    return response.json();
  }
  return null;
};
