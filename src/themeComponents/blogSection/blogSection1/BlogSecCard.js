import Image from "next/future/image";
import User from "./assets/images/user.svg";
import Calendar from "./assets/images/calendar.svg";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const BlogSecCard = ({ blog }) => {
  return (
    <>
      <div className="blogSec-card">
        <div className="blogSec-card-img">
          <Image src={blog?.image} alt="blog-img" />
          <Link href="/blogs/1">
            <a className="img-overlay"></a>
          </Link>
        </div>

        <div className="blog-card-content">
          <div className="blog-card-details">
            <div className="writer">
              <User />
              <p>{blog?.userName}</p>
            </div>

            <div className="blog-date">
              <Calendar />
              <p>August 3, 2022</p>
            </div>
          </div>

          <Link href="/blogs/1">
            <a className="blog-title">{blog?.title}</a>
          </Link>

          <Link href="/blogs/1">
            <a><FormattedMessage id="readMore"/></a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogSecCard;
