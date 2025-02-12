"use client";

import { ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import { Currency } from "@/components/currency";
import Button from "@/components/button";

interface InfoProps {
  data: Product | null;
}

export const Info = ({ data }: InfoProps) => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-900">{data?.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Taille:</h3>
          <div className="">{data?.size.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Couleur:</h3>
          <div className="flex items-center gap-2">
            <div
              className="h-4 w-4 border rounded-full"
              style={{ backgroundColor: data?.color.value }}
            ></div>
            <span>{data?.color.name}</span>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};
