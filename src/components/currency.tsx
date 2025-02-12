"use client";

import { useEffect, useState } from "react";
import { formatPrice } from "@/lib/price-format";

interface CurrencyProps {
  value?: string | number;
}

export const Currency = ({ value }: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <span className="font-semibold">{formatPrice(Number(value))}</span>;
};
