import { NextSeo } from "next-seo";
import Features from "../src/themeComponents/features/features1";
import FooterSection from "../src/themeComponents/footers/footer1";
import CategoriesSection from "../src/themeComponents/categories-section/categories1";
import MostSell from "../src/themeComponents/mostSell/mostSell1";
import RecentlyAdd from "../src/themeComponents/recently-arrived/recently-arrived1";
import IntroSlider from "../src/themeComponents/banners/banner1";
import OfferSilder from "../src/themeComponents/banners/banner2";
import Header from "../src/themeComponents/headers/header1";
import Brands from "../src/themeComponents/brands/brands1";

export default function Home() {
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
      <Header/>
      <IntroSlider/>
      <CategoriesSection />
      <RecentlyAdd/>
      <OfferSilder/>
      <MostSell />
      <Brands/>
      <Features />
      <FooterSection />
    </>
  );
}
