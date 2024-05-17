import Link from "next/link";
import style from "./styles/BlogSection.module.scss";
import BlogSecCard from "./BlogSecCard";
import { blogSections } from "../../../../data";
import BlogMobSlider from "./BlogMobSlider";
import { FormattedMessage } from "react-intl";

const BlogSection = () => {
  return (
    <>
      <section className={style.blogSec}>
        <div className="container">
          <h2 className="section-title text-center">أحدث التدوينات</h2>
          <div className="blogs-desktop">
            <div className="row">
              {blogSections?.map((blog, index) => {
                return (
                  <div className="col-xl-3 col-lg-4 col-md-6 col-12" key={index}>
                    <BlogSecCard blog={blog} />
                  </div>
                );
              })}
            </div>
          </div>

          <BlogMobSlider />

          <div className="allBlogs">
            <Link href="/blogs">
              <a><FormattedMessage id="news"/></a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
