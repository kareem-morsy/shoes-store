import Link from "next/link";
import Image from "next/future/image";
import logo from "./assets/images/logo.png";
import Close from "./assets/images/close.svg";
import Facebook from "./assets/images/face.svg";
import Twitter from "./assets/images/tweter.svg";
import Instagram from "./assets/images/insta.svg";
import Snapchat from "./assets/images/snap.svg";
import Sa from "./assets/images/sa.svg";
import Dropdown from "react-bootstrap/Dropdown";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";


const MobileNav = ({ setShowHiddenSidebars, showHiddenSidebars }) => {
  const { asPath, locale } = useRouter();
  const { formatMessage } = useIntl();

  return (
    <>
      <div
        className={`mobile-navbar  ${
          showHiddenSidebars ? "show-side" : "hide-side"
        }`}
      >
        <div className="mobile-nav-head">
          <div className="navbar-logo">
            <Link href="/">
              <a>
                <Image src={logo} alt="logo image" width={80} height={60} />
              </a>
            </Link>
          </div>

          <button
            className="close-btn"
            onClick={() => setShowHiddenSidebars(!showHiddenSidebars)}
          >
            <Close />
          </button>
        </div>

        <div className="mobile-sidebar-menu">
          <ul>
            <li>
              <Link href="/">
                <a className="">
                  <FormattedMessage id="home" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a className="">
                  <FormattedMessage id="products" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="">
                  <FormattedMessage id="about" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/rules">
                <a className="">
                  <FormattedMessage id="terms" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <a className="">
                  <FormattedMessage id="blog" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="">
                  <FormattedMessage id="contact" />
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-mail">
          <h4>
            <FormattedMessage id="joinNewsLetter" />
          </h4>
          <form>
            <div className="sidebar-form">
              <input type="email" placeholder={formatMessage({
                id: "mailPlacehlder",
              })} />
              <button type="submit">
                <FormattedMessage id="join" />
              </button>
            </div>
          </form>
        </div>

        <div className="sidebar-social">
          <Link href="/">
            <a>
              <Facebook fill="#9C0646" />
            </a>
          </Link>

          <Link href="/">
            <a>
              <Twitter fill="#9C0646" />
            </a>
          </Link>

          <Link href="/">
            <a>
              <Instagram fill="#9C0646" />
            </a>
          </Link>

          <Link href="/">
            <a>
              <Snapchat fill="#9C0646" />
            </a>
          </Link>
        </div>

        <div className="sidebar-lang">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="dropdown-btn">
              <Sa />
              <span>العربية</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link href={asPath} locale="ar">
                <a className="dropdown-item">العربية</a>
              </Link>
              <Link href={asPath} locale="en">
                <a className="dropdown-item">English</a>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
