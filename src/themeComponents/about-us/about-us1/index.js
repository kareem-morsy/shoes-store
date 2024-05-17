import style from "./styles/AboutUs.module.scss";
import aboutImg1 from "./assets/images/about1.png";
import aboutImg2 from "./assets/images/about2.png";
import Image from "next/future/image";
import { FormattedMessage } from "react-intl";

const AboutUs = () => {
  return (
    <>
      <section className={style.aboutUs}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="about-content">
                <h4>عنوان مميز لوصف المنتج .</h4>
                <p>
                  شوز ستور: يوفر لك الآن الوصول الى أحدث تشكيلات الأحذية
                  العالمية من حول العالم من خلال شوز ستور! لدينا الأحذية للرجال
                  والنساء، وتضمن لك أسعار مقبولة وجودة عالية. يمكن لك الآن
                  الاستفادة من العروض الخاصة التي يقدمها لك شوز ستور لتجد
                </p>
                <p>
                  شوز ستور: يوفر لك الآن الوصول الى أحدث تشكيلات الأحذية
                  العالمية من حول العالم من خلال شوز ستور! لدينا الأحذية للرجال
                  والنساء، وتضمن لك أسعار مقبولة وجودة عالية. يمكن لك الآن
                  الاستفادة من العروض الخاصة التي يقدمها لك شوز ستور لتجد
                </p>
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div className="about-img">
                <Image src={aboutImg1} alt="about-img" />
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div className="about-img">
                <Image src={aboutImg2} alt="about-img" />
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div className="about-content">
                <h4>عنوان مميز لوصف المنتج .</h4>
                <p>
                  شوز ستور: يوفر لك الآن الوصول الى أحدث تشكيلات الأحذية
                  العالمية من حول العالم من خلال شوز ستور! لدينا الأحذية للرجال
                  والنساء، وتضمن لك أسعار مقبولة وجودة عالية. يمكن لك الآن
                  الاستفادة من العروض الخاصة التي يقدمها لك شوز ستور لتجد
                </p>
                <p>
                  شوز ستور: يوفر لك الآن الوصول الى أحدث تشكيلات الأحذية
                  العالمية من حول العالم من خلال شوز ستور! لدينا الأحذية للرجال
                  والنساء، وتضمن لك أسعار مقبولة وجودة عالية. يمكن لك الآن
                  الاستفادة من العروض الخاصة التي يقدمها لك شوز ستور لتجد
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
