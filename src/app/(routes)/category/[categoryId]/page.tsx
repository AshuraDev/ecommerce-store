import React from "react";

import { getProducts } from "@/actions/getProducts";
import { getSizes } from "@/actions/get-sizes";
import { getColors } from "@/actions/get-colors";
import { getCategory } from "@/actions/get-category";
import Container from "@/components/navbar/container";
import { Billboard } from "@/components/home/billboard";
import { Filter } from "@/components/category/filters";
import { NoResult } from "@/components/no-result";
import { ProductCard } from "@/components/product-card";
import MobileFilters from "@/components/category/mobile-filters";

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>;
  searchParams: Promise<{ colorId: string; sizeId: string }>;
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const { categoryId } = await params;
  const { colorId, sizeId } = await searchParams;

  const products = await getProducts({
    categoryId: categoryId,
    colorId: colorId,
    sizeId: sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category?.billboard || null} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Tailles" data={sizes} />
              <Filter valueKey="colorId" name="Couleurs" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResult />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
