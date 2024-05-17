import React from "react";
import WishListCard from "./WishListCard";
import { productsSection } from "../../../../data";

const WishList = () => {
  return (
    <>
      <div className="wishlist-section">
        <div className="row">
          {productsSection?.map((product, index) => {
            return (
              <div className="col-xl-6 col-md-6 col-12" key={index}>
                <WishListCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WishList;
