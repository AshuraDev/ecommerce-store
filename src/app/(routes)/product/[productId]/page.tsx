import React from "react";

import { Info } from "@/components/product/info";
import { getProducts } from "@/actions/getProducts";
import { getProduct } from "@/actions/get-product";
import Container from "@/components/navbar/container";
import { Gallery } from "@/components/product/gallery";
import { ProductList } from "@/components/home/product-list";

interface ProductPageProps {
  params: Promise<{ productId: string }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId } = await params;

  const product = await getProduct(productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product?.images || []} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Produits similaires" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
