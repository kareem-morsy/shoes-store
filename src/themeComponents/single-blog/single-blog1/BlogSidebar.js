import newblog1 from "./assets/images/newblog1.png";
import newblog2 from "./assets/images/newblog2.png";
import newblog3 from "./assets/images/newblog3.png";
import newblog4 from "./assets/images/newblog3.png";
import Calendar from "./assets/images/calendar.svg";
import Link from "next/link";
import Image from "next/future/image";
import { FormattedMessage, useIntl } from "react-intl";

const BlogSidebar = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <div className="blog-sidebar">
        <div className="new-blogs">
          <h4>
            <FormattedMessage id="newArticles" />
          </h4>
          <Link href="/">
            <a className="new-blogs-card">
              <div className="new-blog-img">
                <Image src={newblog1} alt="blog-img" />
              </div>
              <div className="new-blog-details">
                <h5>عنوان المقال يكتب هنا بشكل كامل</h5>
                <p>
                  <Calendar />
                  May 20, 2022
                </p>
              </div>
            </a>
          </Link>

          <Link href="/">
            <a className="new-blogs-card">
              <div className="new-blog-img">
                <Image src={newblog2} alt="blog-img" />
              </div>
              <div className="new-blog-details">
                <h5>عنوان المقال يكتب هنا بشكل كامل</h5>
                <p>
                  <Calendar />
                  May 20, 2022
                </p>
              </div>
            </a>
          </Link>

          <Link href="/">
            <a className="new-blogs-card">
              <div className="new-blog-img">
                <Image src={newblog3} alt="blog-img" />
              </div>
              <div className="new-blog-details">
                <h5>عنوان المقال يكتب هنا بشكل كامل</h5>
                <p>
                  <Calendar />
                  May 20, 2022
                </p>
              </div>
            </a>
          </Link>

          <Link href="/">
            <a className="new-blogs-card">
              <div className="new-blog-img">
                <Image src={newblog4} alt="blog-img" />
              </div>
              <div className="new-blog-details">
                <h5>عنوان المقال يكتب هنا بشكل كامل</h5>
                <p>
                  <Calendar />
                  May 20, 2022
                </p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
