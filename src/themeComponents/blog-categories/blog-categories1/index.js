import style from "./styles/Blogs.module.scss";
import BlogCard from "./BlogCard";
import { blogDate } from "../../../../data";
import { Col } from "react-bootstrap";

const BlogCategories = () => {


  return (
    <section className={style.blogs}>
      <div className="container">
        <div className="row">
          {blogDate?.map((blog, index) => {
            return(
              <Col xl={3} lg={3} md={6} key={index}>
                <BlogCard blog={blog} />
              </Col>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;
