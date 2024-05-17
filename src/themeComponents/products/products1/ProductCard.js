import Image from "next/future/image";
import Link from "next/link";
import React, { useState } from "react";
import BagIcon from "./assets/images/bag.svg";
import LikeIcon from "./assets/images/like.svg";
import CompareIcon from "./assets/images/compare.svg";
import ZoomIcon from "./assets/images/zoom.svg";
import Rate from "rc-rate";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import SharedModal from "./SharedModal";

const ProductCard = ({ product }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
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

            <button onClick={() => setShow(true)}>
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
      <SharedModal show={show} handleClose={handleClose} />
    </>
  );
};

export default ProductCard;
