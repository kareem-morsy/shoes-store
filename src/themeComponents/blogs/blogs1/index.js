import style from "./styles/Blogs.module.scss";
import BlogCard from "./BlogCard";
import { blogData } from "../../../../data";
import { Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const BlogsComponent = () => {
  return (
    <section className={style.blogs}>
      <div className="container">
        <Tabs defaultActiveKey="shoes1" id="filll-tab-example" className="mb-3">
          <Tab eventKey="shoes1" title="أحذية رياضية">
            <div className="row">
              {blogData?.map((blog, index) => {
                return (
                  <Col xl={3} lg={3} md={6} key={index}>
                    <BlogCard blog={blog} />
                  </Col>
                );
              })}
            </div>
          </Tab>

          <Tab eventKey="shoes2" title="أحذية مناسبات">
            <div className="row">
              {blogData?.map((blog, index) => {
                return (
                  <Col xl={3} lg={3} md={6} key={index}>
                    <BlogCard blog={blog} />
                  </Col>
                );
              })}
            </div>
          </Tab>

          <Tab eventKey="shoes3" title="سليبر">
            <div className="row">
              {blogData?.map((blog, index) => {
                return (
                  <Col xl={3} lg={3} md={6} key={index}>
                    <BlogCard blog={blog} />
                  </Col>
                );
              })}
            </div>
          </Tab>

          <Tab eventKey="shoes4" title="أحذية الكعب العالى">
            <div className="row">
              {blogData?.map((blog, index) => {
                return (
                  <Col xl={3} lg={3} md={6} key={index}>
                    <BlogCard blog={blog} />
                  </Col>
                );
              })}
            </div>
          </Tab>

          <Tab eventKey="shoes5" title="أحذية نسائية">
            <div className="row">
              {blogData?.map((blog, index) => {
                return (
                  <Col xl={3} lg={3} md={6} key={index}>
                    <BlogCard blog={blog} />
                  </Col>
                );
              })}
            </div>
          </Tab>

          <Tab eventKey="shoes6" title="أحذية خفيفة">
            <div className="row">
              {blogData?.map((blog, index) => {
                return (
                  <Col xl={3} lg={3} md={6} key={index}>
                    <BlogCard blog={blog} />
                  </Col>
                );
              })}
            </div>
          </Tab>

          <Tab eventKey="shoes7" title="أحذية رجال">
            <div className="row">
              {blogData?.map((blog, index) => {
                return (
                  <Col xl={3} lg={3} md={6} key={index}>
                    <BlogCard blog={blog} />
                  </Col>
                );
              })}
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default BlogsComponent;
