import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Image from "next/future/image";
import Link from "next/link";
import Rate from "rc-rate";
import BagIcon from "./assets/images/bag.svg";
import LikeIcon from "./assets/images/like.svg";
import CompareIcon from "./assets/images/compare.svg";
import ZoomIcon from "./assets/images/zoom.svg";

const RelatedCard = ({ product }) => {
  return (
    <>
      <div className="slide">
        <div className="main-card">
          <div className="main-card-img">
            <Image src={product.image} alt="moon" />

            <Link href="/single-product">
              <a className="overlay-link"></a>
            </Link>

            <div className="overlay-button">
              <button>
                <BagIcon fill="#2B0000" />
              </button>

              <button>
                <LikeIcon stroke="#2B0000" />
              </button>

              <button onClick={() => setModalShow(true)}>
                <ZoomIcon fill="#2B0000" />
              </button>
            </div>
          </div>

          <div className="main-card-content">
            <div className="stars">
              <Rate value={3.5} allowHalf="true" disabled />
            </div>

            <Link href="/single-product">
              <a className="main-card-title">{product.title}</a>
            </Link>

            <div className="main-card-price">
              <span className="current-price">175 ر.س</span>
              <span className="past-price">250 ر.س</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedCard;
