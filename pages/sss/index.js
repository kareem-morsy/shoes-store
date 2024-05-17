import { NextSeo } from "next-seo";
import Header2 from "../../src/themeComponents/headers/header2";
import FooterSection from "../../src/themeComponents/footers/footer1";

import Features from "../../src/themeComponents/features/features1";
import BreadCramb from "../../src/themeComponents/breadcrumbs/breadcrumbs1";
import ProfileSection from "../../src/themeComponents/profileSection/profileSection1";

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

      <Header2 />
      <BreadCramb />
      <ProfileSection/>
      <Features />
      <FooterSection />
    </>
  );
};

export default Profile;
