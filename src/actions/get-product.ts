"use server";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProduct = async (id: string): Promise<Product | null> => {
  const response = await fetch(`${URL}/${id}`, { cache: "no-cache" });
  if (response.ok) {
    return response.json();
  }
  return null;
};
