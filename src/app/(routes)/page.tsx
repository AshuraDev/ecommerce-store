import React from "react";

import { getProducts } from "@/actions/getProducts";
import Container from "@/components/navbar/container";
import { getBillboard } from "@/actions/get-billboard";
import { Billboard } from "@/components/home/billboard";
import { ProductList } from "@/components/home/product-list";

const Home = async () => {
  const featuredProducts = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("ab83a10b-ea98-4fa3-96ae-f22d462b6dab");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        {billboard ? <Billboard data={billboard} /> : null}

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title={"Produits tendances"} items={featuredProducts} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
