import { NextSeo } from "next-seo";
import Features from "../../src/themeComponents/features/features1";
import FooterSection from "../../src/themeComponents/footers/footer1";
import Header from "../../src/themeComponents/headers/header1";
import Brands from "../../src/themeComponents/brands/brands1";
import { FormattedMessage } from "react-intl";
import BreadCramb from "../../src/themeComponents/breadcrumbs/breadcrumbs1";
import Products from "../../src/themeComponents/products/products1";

const ProductsPage = () => {
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
      <Products/>
      <Brands />
      <Features />
      <FooterSection />
    </>
  );
};

export default ProductsPage;
