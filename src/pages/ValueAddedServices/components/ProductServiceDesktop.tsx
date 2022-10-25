import React from "react";
import Image from "components/widgets/Image/Image";
import ProductServiceList from "./ProductServicesList";
import { PRODUCT_SERVICE } from "../content";
import { LONG_VERTICAL_LINE, LONG_HORIZONTAL_LINE } from "assets/icons";

const ProductServiceDesktop = () => {
  return (
    <div
      className="hidden md:block container mx-auto bg-white rounded-xl 
      shadow-lg  mt-10 py-12 px-16"
    >
      <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
        {PRODUCT_SERVICE.map(
          ({ id, heading, firstList, secondList, thirdList, fourthList }) => (
            <ProductServiceList
              key={id}
              heading={heading}
              firstList={firstList}
              secondList={secondList}
              thirdList={thirdList}
              fourthList={fourthList}
            />
          )
        )}

        <Image
          parentClassName="absolute lg:left-[370px] top-0"
          imageClassName="h-[570px]"
          image={LONG_VERTICAL_LINE}
        />

        <Image
          parentClassName="absolute lg:right-[370px] top-0"
          imageClassName="h-[570px]"
          image={LONG_VERTICAL_LINE}
        />

        <Image
          parentClassName="absolute right-0 lg:top-10"
          imageClassName="h-[570px]"
          image={LONG_HORIZONTAL_LINE}
        />
      </div>
    </div>
  );
};

export default ProductServiceDesktop;
