import { NextSeo } from "next-seo";
import Features from "../../src/themeComponents/features/features1";
import FooterSection from "../../src/themeComponents/footers/footer1";
import Header from "../../src/themeComponents/headers/header1";
import Brands from "../../src/themeComponents/brands/brands1";
import { FormattedMessage } from "react-intl";
import BreadCramb from "../../src/themeComponents/breadcrumbs/breadcrumbs1";
import Salla from "../../src/themeComponents/carts/cart1";

const Cart = () => {
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
      <Salla />
      <Brands />
      <Features />
      <FooterSection />
    </>
  );
};

export default Cart;
