import React from "react";
import blogImg from "./assets/images/blogImg.png";
import style from "./styles/SingleBlog.module.scss";
import User from "./assets/images/user.svg";
import Facebook from "./assets/images/face.svg";
import Insta from "./assets/images/insta.svg";
import Snap from "./assets/images/snap.svg";
import Right from "./assets/images/rightArrow.svg";
import Left from "./assets/images/leftArrow.svg";
import Twitter from "./assets/images/tweter.svg";
import Calendar from "./assets/images/calendar.svg";
import Link from "next/link";
import Image from "next/future/image";
import Comments from "./Comments";
import CommentsGroup from "./CommentsGroup";
import BlogSidebar from "./BlogSidebar";
import { FormattedMessage } from "react-intl";
import Trends from "./Trends";

const SingleBlog = () => {
  return (
    <>
      <section className={style.singleBlog}>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-12">
              <div className="blog-img">
                <Image src={blogImg} alt="blog-img" />
              </div>

              <div className="blog-title">
                <h2>عنوان التدوينة يكتب هنا بشكل كامل</h2>
                <div className="date-user">
                  <div className="writer">
                    <User />
                    <p>Admin</p>
                  </div>
                  <div className="blog-date">
                    <Calendar />
                    <p>August 3, 2022</p>
                  </div>
                </div>
              </div>

              <p className="blog-content">
                النظارة بين التصميم العصري والوظائف المتقدمة لتحقيق تجربة رائعة
                للشمسية الخاصة بك
              </p>

              <p className="blog-content">
                تتميز هذه النظارة بإطارها الأنيق المصنوع من مواد عالية الجودة،
                مما يمنحها المتانة والقوة لتدوم طويلاً. بفضل التصميم الأنيق
                والألوان المتنوعة، ستتمكن من اختيار النظارة التي تناسب أسلوبك
                الشخصي وتضفي لمسة من الأناقة على مظهرك.
              </p>

              <p className="blog-content">
                تتميز العدسات بتقنية حماية 100% من الأشعة فوق البنفسجية، مما
                يحمي عينيك من الأشعة الضارة ويقلل من تأثير الوهج. بالإضافة إلى
                ذلك، توفر العدسات الواقية من الخدش والتي تعكس الضوء الزائد رؤية
                واضحة حتى في ظروف الإضاءة المشرقة.
              </p>

              <p className="blog-content">
                توفر النظارة الشمسية أيضًا راحة فائقة، حيث تم تصميم الأذرع
                بعناية لتناسب الوجه بشكل مثالي وتوفر لك ملاءمة مريحة طوال اليوم.
                كما أن الوزن الخفيف والتصميم الانسيابي يجعلان النظارة مثالية
                للارتداء اليومي والأنشطة الخارجية.
              </p>

              <div className="quote-section">
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                  التى يولدها التطبيق. ع.
                </p>

                <p>
                  إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى
                  زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء
                  لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص،
                  حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية
                  لتصميم الموق
                </p>
              </div>

              <p className="blog-content">
                توفر النظارة الشمسية أيضًا راحة فائقة، حيث تم تصميم الأذرع
                بعناية لتناسب الوجه بشكل مثالي وتوفر لك ملاءمة مريحة طوال اليوم.
                كما أن الوزن الخفيف والتصميم الانسيابي يجعلان النظارة مثالية
                للارتداء اليومي والأنشطة الخارجية.
              </p>

              <p className="blog-content">
                توفر النظارة الشمسية أيضًا راحة فائقة، حيث تم تصميم الأذرع
                بعناية لتناسب الوجه بشكل مثالي وتوفر لك ملاءمة مريحة طوال اليوم.
                كما أن الوزن الخفيف والتصميم الانسيابي يجعلان النظارة مثالية
                للارتداء اليومي والأنشطة الخارجية.
              </p>

              <div className="pagination">
                <Link href="/">
                  <a className="prev">
                    <Right />
                    <FormattedMessage id="prevBlog" />
                  </a>
                </Link>

                <Link href="/">
                  <a className="next">
                    <FormattedMessage id="nextBlog" />
                    <Left />
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-xl-4 col-12">
              <BlogSidebar />
            </div>
          </div>

          <Trends />

          <section className="comments-section">
            <CommentsGroup />
            <Comments />
          </section>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
