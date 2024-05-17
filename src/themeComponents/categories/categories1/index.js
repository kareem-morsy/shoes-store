import React from "react";
import styles from "./styles/Style.module.scss";
import CategoryCard from "./CategoryCard";
import { categoriesData } from "./../../../../data";

const Categories = () => {
  return (
    <>
      <section className={styles.Categories}>
        <div className="container">
          <div className="row">
            {categoriesData.map((category, index) => {
              return (
                <div className="col-xl-4 col-md-6 col-12" key={index}>
                  <CategoryCard category={category} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
