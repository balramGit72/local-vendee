import React, { useEffect, useState } from "react";
import Styles from "./payment.module.scss";
import { Layout } from "../../../components/common";
import { Text, Button, RadioBtn, Image, ListGroup } from "../../../components/shared";
import { Link } from "react-router-dom";
import { getCartListApi, handleAddAddressApi } from "../../../service/payment";
import { useSelector } from "react-redux";
import { getAddressListApi, getCouponsApi } from "../../../service/home";
import { Input, ListItem } from "@mui/material";
import { toast } from "react-toastify";

const Payment = () => {
  const [cardList, setCardList] = useState([]);
  console.log('cardList: xxxxxxxxxxxx', cardList);
  const auth = useSelector((state) => state.auth);
  const [copen, setCopen] = useState({});
  const [address, setAddress] = useState({});

  const[getModal, setModal] = useState(false)
  useEffect(() => {
     if (getModal === false) {
      document.body.style.overflow = 'unset';
     } else {
      document.body.style.overflow = 'hidden';
     }
  }, [getModal]);

  const getCartList = async () => {
    try {
      const { data } = await getCartListApi(auth?.user?.id);
      if (data.success) {
        setCardList(data.data);
      }
    } catch (error) {}
  };

  const getCoupons = async () => {
    try {
      const { data } = await getCouponsApi();
      if (data.success) {
        setCopen(data.data[0]);
      }
    } catch (error) {}
  };

  const getAddressList = async () => {
    try {
      const { data } = await getAddressListApi( auth.user.id);
      if (data.success) {
        setAddress(data.data);
      }
    } catch (error) {}
  };

  const [address1, setAddress1] = useState('');
  const [phone, setphone] = useState('');
  const handleAddAddress = async (event) => {
  event.preventDefault();
    try {
      // Call your API with the address data
      // Replace 'yourApiFunction' with the actual function to call your API
      const {data} = await handleAddAddressApi({ address:address1, phone }, auth);
      console.log('data: ', data);
      
      // Check the response and handle accordingly
      if (data.success) {
        getAddressList();
        // Handle success, e.g., close the modal, show a success message, etc.
        setModal(false);
        toast.success(data.message, { autoClose: 2000 });
        // Additional actions...
      } else {
        // Handle API error, set an error message or perform other actions
        toast.error(data.message, { autoClose: 2000 });
      }
    } catch (error) {
      console.error('Error calling API:', error);
      // Handle other errors if needed
    }
  };

  useEffect(() => {
    getCartList();
    getCoupons();
    getAddressList();
  }, []);
  return (
    <Layout>
      <div className={`${Styles.paymentWrapper}`}>
        <div className={`${Styles.center}`}>
          <div className={`${Styles.paymentRow} ${Styles.dFlex}`}>
            <div className={`${Styles.paymentMethodCol}`}>
              <div className={`${Styles.card}`}>
                <Text
                  strong="strong7"
                  color="black"
                  className={`${Styles.pageTitel}`}
                >
                  Logged in
                </Text>
                <Text className={`${Styles.dBlock} ${Styles.userInfo}`}>
                  {auth.user.name} | {auth.user.phone}
                </Text>
              </div>

              <div className={`${Styles.card}`}>
                <div className={`${Styles.alignBetween}`}>
                  <Text
                    strong="strong7"
                    color="black"
                    className={`${Styles.pageTitel}`}
                  >
                    Delivery address
                  </Text>
                  <Button variant="textBtn" onClick={()=>setModal(!getModal)} className={`${Styles.redBtn}`}>
                    Change
                  </Button>
                </div>
                <div className={`${Styles.addressWrapper}`}>
                  <Text
                    strong="strong6"
                    variant="mdText"
                    color="black"
                    className={`${Styles.dBlock}`}
                  >
                    Home
                  </Text>
                  <Text
                    strong="strong5"
                    variant="smText"
                    color="black"
                    className={`${Styles.dBlock} ${Styles.address}`}
                  >
                     {
                        address[0]?.address
                     }
                     {" "} 
                     <br />
                     {
                       address[0]?.phone
                     }
                    {/* 30, 3, Narayan Sing Saput Marg, Shivaji Market, Nagar Nigam,
                    Indore, Madhya Pradesh 452007, India */}
                  </Text>
                </div>
                <Text
                  variant="lgText"
                  color="black"
                  strong="strong5"
                  className={`${Styles.dBlock}`}
                >
                  27 Mins
                </Text>
              </div>

              {/* <div className={`${Styles.card}`}>
                <Text
                  strong="strong7"
                  color="black"
                  className={`${Styles.pageTitel} ${Styles.metehodText}`}
                >
                  Choose payment method
                </Text>
                <div
                  className={`${Styles.alignBetween} ${Styles.methodWrapper}`}
                >
                  <div className={`${Styles.radioBtnbox}`}>
                    <RadioBtn
                      labelName="Pay by any UPI App"
                      subLabel="You need to have a registered UPI ID"
                      className={`${Styles.filterCheck}`}
                      id="upi"
                      name="payment"
                      variant="multiLabel"
                    />
                  </div>
                  <Button variant="redBtn" className={`${Styles.plusBtn}`}>
                    <span class="material-symbols-rounded">add</span>
                  </Button>
                </div>
                <div
                  className={`${Styles.alignBetween} ${Styles.methodWrapper}`}
                >
                  <div className={`${Styles.radioBtnbox}`}>
                    <RadioBtn
                      labelName="Credit & Debit Cards"
                      subLabel="Save and Pay via Cards."
                      className={`${Styles.filterCheck}`}
                      id="creaditCard"
                      name="payment"
                      variant="multiLabel"
                    />
                  </div>
                  <Button variant="redBtn" className={`${Styles.plusBtn}`}>
                    <span class="material-symbols-rounded">add</span>
                  </Button>
                </div>
                <div
                  className={`${Styles.alignBetween} ${Styles.methodWrapper}`}
                >
                  <div className={`${Styles.radioBtnbox}`}>
                    <RadioBtn
                      labelName="Cash"
                      subLabel="Cash on delivery"
                      className={`${Styles.filterCheck}`}
                      id="cash"
                      name="payment"
                      variant="multiLabel"
                    />
                  </div>
                </div>
              </div> */}
            </div>
            <div className={`${Styles.paymentCol}`}>
              <div className={`${Styles.card}`}>
                {cardList?.items?.map((item) => {
                  return (
                    <div
                      className={`${Styles.dFlex} ${Styles.productImgWrapper}`}
                    >
                      <Image
                        src={item?.image}
                        alt="product"
                        className={`${Styles.productImg}`}
                      />
                      <div>
                        <Text
                          color="black"
                          variant="mdText"
                          strong="strong6"
                          className={`${Styles.dBlock} ${Styles.productName}`}
                        >
                          {item?.title}
                        </Text>
                        <div
                          className={`${Styles.alignBetween} ${Styles.alignItemsCenter}`}
                        >
                          <Text
                            strong="strong7"
                            variant="lgText"
                            className={`${Styles.payment}`}
                          >
                            ${item?.sale_price}
                          </Text>
                          <div
                            className={`${Styles.productBtnWrapper} ${Styles.dFlex}`}
                          >
                            <Button>
                              <span class="material-symbols-rounded">
                                remove
                              </span>
                            </Button>
                            <Button>1</Button>
                            <Button>
                              <span class="material-symbols-rounded">add</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* <div className={`${Styles.dFlex} ${Styles.productImgWrapper}`}>
                         <Image src="assets/image/category/pinoz-pizza.jpg" alt="product" className={`${Styles.productImg}`} />
                         <div>
                           <Text color="black" variant="mdText" strong="strong6" className={`${Styles.dBlock} ${Styles.productName}`}>
                              Combo Of Chocolava & Coke
                           </Text>
                           <div className={`${Styles.alignBetween} ${Styles.alignItemsCenter}`}>
                              <Text strong="strong7" variant="lgText" className={`${Styles.payment}`}>$20</Text>
                              <div className={`${Styles.productBtnWrapper} ${Styles.dFlex}`}>
                                 <Button><span class="material-symbols-rounded">remove</span></Button>
                                 <Button>1</Button>
                                 <Button><span class="material-symbols-rounded">add</span></Button>
                              </div>
                           </div>
                         </div>
                     </div> */}

                <Link
                  to="#"
                  className={`${Styles.dFlex} ${Styles.alignItemsCenter} ${Styles.coupan}`}
                >
                  <Image
                    src={copen.image || "assets/image/icon/discount.png"}
                    alt="discount"
                    className={`${Styles.discount}`}
                  />
                  <Text strong="strong5" variant="lgText" color="black">
                    Apply Coupan
                  </Text>
                </Link>

                <Text variant="lgText" strong="strong6" color="black">
                  Bill Details
                </Text>
                <div className={`${Styles.productInfoWrapper}`}>
                  <div className={`${Styles.alignBetween} ${Styles.mb10}`}>
                    <Text className={`${Styles.pr5}`}>Item Total</Text>
                    <Text>$154.00</Text>
                  </div>
                  <div className={`${Styles.alignBetween} ${Styles.pb5}`}>
                    <Text className={`${Styles.pr5}`}>
                      Delivery Fee | 3.7 kms
                    </Text>
                    <Text>$14.00</Text>
                  </div>

                  <div
                    className={`${Styles.alignBetween} ${Styles.serviceCharges}`}
                  >
                    <Text className={`${Styles.pr5}`}>
                      GST and Restaurant Charges
                    </Text>
                    <Text>$10.00</Text>
                  </div>
                </div>

                <div className={`${Styles.alignBetween}`}>
                  <Text color="black" strong="strong7" variant="mdText">
                    Total Pay
                  </Text>
                  <Text color="black" strong="strong7" variant="mdText">
                    $150.00
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className={`${Styles.payBtnWrapper}`}>
            <Button variant="redBtn">Proceed to Pay</Button>
          </div>
        </div>
      </div>
      {getModal && (
        <div className={`${Styles.modalOverlay}`}>
          <div className={`${Styles.modalBody}`}>
            <div className={`${Styles.modalHeader} ${Styles.textCenter}`}>
              <Text color="black" strong="strong6" className={`${Styles.inter} ${Styles.modalHeading}`}>
                Add Address
              </Text>
              <div className={`${Styles.closeBtn}`} onClick={() => setModal(!getModal)}>
                <span className="material-symbols-rounded">close</span>
              </div>
            </div>
            <div className={`${Styles.dFlex}`}>
            <div className={`${Styles.filterCheckWrapper}`}>
              <form onSubmit={handleAddAddress}>
                  <Input
                    type="text"
                    name="address"
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                    placeholder="Enter your address"
                  />
                    <Input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    placeholder="Enter your phone"
                  />
                  <Button type="submit" variant="redBtn">
                    Add Address
                  </Button>
              </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Payment;
