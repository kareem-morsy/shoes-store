import { NextSeo } from "next-seo";
import Features from "../../src/themeComponents/features/features1";
import FooterSection from "../../src/themeComponents/footers/footer1";
import Header from "../../src/themeComponents/headers/header1";
import { FormattedMessage } from "react-intl";
import BreadCramb from "../../src/themeComponents/breadcrumbs/breadcrumbs1";

import ForgetPass from "../../src/themeComponents/forget-password/forget-password1";

const ForgetPassword = () => {
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
    <ForgetPass />
    <Features />
    <FooterSection />
  </>
  );
};

export default ForgetPassword;
