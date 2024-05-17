import { useState } from "react";
import Link from "next/link";
import Mail from "./assets/images/mail.svg";
import Mobile from "./assets/images/mobile.svg";
import Global from "./assets/images/global.svg";
import Moon from "./assets/images/moon.svg";
import Arrow from "./assets/images/arrow-down.svg";
import Dropdown from "react-bootstrap/Dropdown";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

const HeaderTop = (props) => {
  const { asPath, locale } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="main-header">
            <div className="header-contact">
              <div>
                <Link href="mailto:info@ejjadh.sa">
                  <a className="mail">
                    <Mail />
                    <span>info@ejjadh.sa</span>
                  </a>
                </Link>
              </div>

              <div className="up-line"></div>

              <div>
                <Link href="tel:00(966)595180519">
                  <a className="phone">
                    <Mobile />
                    <span>+(966)507778630</span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="header-global">
              <div className="dark-mode">
                <input type="checkbox" id="darkmode-toggle" />
                <label
                  htmlFor="darkmode-toggle"
                  aria-label="dark mode"
                  className="darkSwitcher"
                  onClick={props.themeSwitcher}
                >
                  <Moon />
                </label>
              </div>

              <div className="up-line"></div>

              <div className="lang-menu">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className="dropdown-btn">
                    <Global />
                    <span>Ar</span>
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

              <div className="up-line"></div>

              <div className="support">
                <Link href="/">
                  <a>
                    <FormattedMessage id="support" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
