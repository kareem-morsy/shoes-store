import { NextSeo } from "next-seo";
import Features from "../../src/themeComponents/features/features1";
import FooterSection from "../../src/themeComponents/footers/footer1";
import Header from "../../src/themeComponents/headers/header1";
import Brands from "../../src/themeComponents/brands/brands1";
import { FormattedMessage } from "react-intl";
import SingleBlog from "../../src/themeComponents/single-blog/single-blog1";
import BreadCramb from "../../src/themeComponents/breadcrumbs/breadcrumbs1";

const Blog = () => {
  return (
    <>
      <NextSeo
        title=""
        additionalMetaTags={[
          {
            name: "keywords",
            content: "",
          },
          {
            name: "description",
            content: "",
          },
        ]}
      />

      <Header />
      <BreadCramb pageName={<FormattedMessage id="products" />} />
      <SingleBlog/>
      <Brands />
      <Features />
      <FooterSection />
    </>
  );
};

export default Blog;
