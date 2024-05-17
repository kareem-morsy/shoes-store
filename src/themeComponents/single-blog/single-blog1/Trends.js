import React from "react";
import Title from "./assets/images/title.svg";
import { trendsBlogs } from "../../../../data";
import BlogCard from "./BlogCard";
import BlogsSlider from './BlogSwiper'

const Trends = () => {
  return (
    <>
      <div className="trends">
        <div className="section-title">
          <h2>أحدث المنتجات</h2>
          <div className="title-img">
            <Title />
          </div>
        </div>

        <div className="trends-container">
          <div className="row">
            {trendsBlogs?.map((blog, index) => {
              return (
                <div className=" col-lg-3 col-md-6 col-12" key={index}>
                  <BlogCard blog={blog} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <BlogsSlider/>
    </>
  );
};

export default Trends;
