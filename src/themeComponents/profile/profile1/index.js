import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import style from "./styles/Profile.module.scss";
import User from "./assets/images/profileUser.svg";
import Fav from "./assets/images/favourite.svg";
import Logout from "./assets/images/logout.svg";
import Location from "./assets/images/location.svg";
import Orders from "./assets/images/orders.svg";
import Info from "./assets/images/account-info.svg";
import Edit from "./assets/images/edit.svg";
import Compare from "./assets/images/compare.svg";
import FormTab from "./FormTab";
import { useRouter } from "next/router";
import Link from "next/link";
import AccountInfo from "./AccountInfo";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import OrdersSection from "./OrdersSection";
import WishList from "./WishList";
import LocationSection from "./Locations";
import OrderDetails from "./OrderDetails";
import CompareSection from "./CompareSection";
import { FormattedMessage } from "react-intl";

const ProfileSection = () => {
  const { query } = useRouter();
  const { profile } = query;

  return (
    <>
      <section className={style.Profilesec}>
        <div className="container">
          <Row>
            <Col xs={12} lg={3} xl={3}>
              <div className="profile-indicators">
                <div className="nav-pills">
                  <Link href="/profile">
                    <a className="nav-link">
                      <div className="tab-link">
                        <Info width={35} height={35} />
                        <h5>
                          <FormattedMessage id="profileInfo" />
                        </h5>
                      </div>
                    </a>
                  </Link>

                  <Link href="/profile/edit-profile">
                    <a className="nav-link">
                      <div className="tab-link">
                        <Edit width={35} height={35} />
                        <h5>
                          <FormattedMessage id="editProfile" />
                        </h5>
                      </div>
                    </a>
                  </Link>

                  <Link href="/profile/change-password">
                    <a className="nav-link">
                      <div className="tab-link">
                        <Edit width={35} height={35} />
                        <h5>
                          <FormattedMessage id="changePass" />
                        </h5>
                      </div>
                    </a>
                  </Link>

                  <Link href="/profile/orders">
                    <a className="nav-link">
                      <div className="tab-link">
                        <Orders width={35} height={35} />
                        <h5>
                          <FormattedMessage id="orders" />
                        </h5>
                      </div>
                    </a>
                  </Link>

                  <Link href="/profile/wishlist">
                    <a className="nav-link">
                      <div className="tab-link">
                        <Fav width={35} height={35} />
                        <h5>
                          <FormattedMessage id="wishlist" />
                        </h5>
                      </div>
                    </a>
                  </Link>

                  <Link href="/profile/compare-list">
                    <a className="nav-link">
                      <div className="tab-link">
                        <Compare width={35} height={35} />
                        <h5>
                          <FormattedMessage id="compareList" />
                        </h5>
                      </div>
                    </a>
                  </Link>

                  <Link href="/profile/address">
                    <a className="nav-link">
                      <div className="tab-link">
                        <Location width={35} height={35} />
                        <h5>
                          <FormattedMessage id="addresses" />
                        </h5>
                      </div>
                    </a>
                  </Link>
                  <button
                    type="button"
                    className="nav-link"
                    onClick={() => console.log("out")}
                  >
                    <div className="tab-link">
                      <Logout width={35} height={35} />
                      <h5>
                        <FormattedMessage id="logout" />
                      </h5>
                    </div>
                  </button>
                </div>
              </div>
            </Col>

            <Col xs={12} lg={9} xl={9}>
              <div className="profile-tabs">
                {profile &&
                  profile.length === 1 &&
                  profile?.[0] === "profile" && <AccountInfo />}
                {profile?.[1] === "edit-profile" && <EditProfile />}
                {profile?.[1] === "change-password" && <ChangePassword />}
                {profile?.length === 2 && profile?.[1] === "orders" && (
                  <OrdersSection />
                )}
                {profile?.[1] === "orders" &&
                  profile?.[2] === "orders-details" && <OrderDetails />}
                {profile?.[1] === "wishlist" && <WishList />}
                {profile?.[1] === "compare-list" && <CompareSection />}
                {profile?.[1] === "address" && <LocationSection />}
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default ProfileSection;
