"use client";

import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import { ProductImage } from "@/types";
import { GalleryTab } from "@/components/product/gallery-tab";
import Image from "next/image";

interface GalleryProps {
  images: ProductImage[];
}

export const Gallery = ({ images }: GalleryProps) => {
  return (
    <TabGroup as="div" className={"flex flex-col-reverse"}>
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className={"grid grid-cols-4 gap-6"}>
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className={"aspect-square w-full"}>
        {images.map((image) => ( 
          <TabPanel key={image.id}>
            <div className="relative aspect-square h-full w-full">
              <Image
                fill
                src={image.url}
                alt="image"
                className="object-cover object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};
