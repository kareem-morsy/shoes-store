import Image from "next/future/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <>
      <div className="categories-card">
        <div className="category-image">
          <Image src={category.image} alt="glasses" />
        </div>

        <Link href="/products">
          <a className="categories-card-overlay"></a>
        </Link>

        <div className="category-title">
          <p>{category.title}</p>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
