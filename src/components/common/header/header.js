import React from "react";
import Styles from "./header.module.scss";
import { Button, Text, Image } from "../../shared";
import { Link } from "react-router-dom";
import ImageWithText from "../../ImageWithText";
import { useSelector } from "react-redux";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div className={Styles.headerWraper}>
      <div className={`${Styles.statusBarSection}`}>
        <div
          className={`${Styles.statusBarwrapper} ${Styles.w100} ${Styles.alignBetween} ${Styles.mAuto} ${Styles.alignItemsCenter}`}
        >
          <Text color="white">
            Summer Sale For Suits And Free Express Delivery - OFF 50%!
          </Text>
          <div>
            <Button className={`${Styles.shopNowBtn}`}>ShopNow</Button>
          </div>
        </div>
      </div>
      <div className={`${Styles.center}`}>
        <div
          className={`${Styles.row} ${Styles.alignBetween} ${Styles.alignItemsCenter}`}
        >
          <div className={`${Styles.logoBrand} `}>
            <Link to="/">
              <Image src="assets/image/Logo.png" />
            </Link>
          </div>
          <div className={`${Styles.headerBtnWrapper} ${Styles.centerAlign}`}>
            {auth.token === "" ? (
              <Link
                to="#"
                className={`${Styles.loginRegister} ${Styles.centerAlign}`}
              >
                <span class="material-symbols-rounded">person</span>
                <Link to="/login" style={{ color: "red" }}>
                  Login
                </Link>{" "}
                /
                <Link to="/signup" style={{ color: "red" }}>
                  signup
                </Link>
              </Link>
            ) : (
              <ImageWithText name={auth?.user?.name || 'Demo'} />
            )}

            {/* <Link to={"#"} className={`${Styles.loginRegister} ${Styles.centerAlign}`}>
                  <div className={`${Styles.userDP}`}>
                    <Image src="assets/image/user-image.png" alt="user profile" /> 
                  </div>
                  Johan Doe
                </Link> */}
            <Button className={`${Styles.favBtn}`}>
              <span class="material-symbols-rounded">favorite</span>
            </Button>
            <Button>
              <span class="material-symbols-rounded">shopping_cart</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
