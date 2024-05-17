import { NextSeo } from "next-seo";
import Features from "../../../src/themeComponents/features/features1";
import FooterSection from "../../../src/themeComponents/footers/footer1";
import Header from "../../../src/themeComponents/headers/header1";
import Brands from "../../../src/themeComponents/brands/brands1";
import { FormattedMessage } from "react-intl";
import SucessOrder from "../../../src/themeComponents/payment-status/payment-status1";

const SuccessPayment = () => {
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
      <SucessOrder/>
      <Brands />
      <Features />
      <FooterSection />
    </>
  );
};

export default SuccessPayment;
