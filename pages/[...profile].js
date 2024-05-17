import { NextSeo } from "next-seo";
import Features from "../src/themeComponents/features/features1";
import FooterSection from "../src/themeComponents/footers/footer1";
import Header from "../src/themeComponents/headers/header1";
import Brands from "../src/themeComponents/brands/brands1";
import { FormattedMessage } from "react-intl";
import BreadCramb from "../src/themeComponents/breadcrumbs/breadcrumbs1";
import ProfileSection from "../src/themeComponents/profile/profile1";

const Profile = () => {
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
      <ProfileSection/>
      <Brands />
      <Features />
      <FooterSection />
    </>
  );
};

export default Profile;
