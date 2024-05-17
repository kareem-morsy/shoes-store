import React from "react";
import { NextSeo } from "next-seo";

const NotFound = () => {
  return (
    <>
      <NextSeo
        title="الصفحة المطلوبة غير موجودة"
        additionalMetaTags={[
          {
            name: "description",
            content: "",
          },
          {
            name: "keywords",
            content: "",
          },
        ]}
      />
      ;<div className="errro-wrp">404</div>
    </>
  );
};

export default NotFound;
