import { Product } from "@/types";
import { NoResult } from "@/components/no-result";
import { ProductCard } from "@/components/product-card";

interface ProductListProps {
  title: string;
  items: Product[];
}

export const ProductList = ({ items, title }: ProductListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>

      {items.length === 0 && <NoResult />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
