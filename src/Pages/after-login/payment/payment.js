import React from "react";
import Styles from './payment.module.scss';
import { Layout } from "../../../components/common";
import { Text, Button, RadioBtn, Image} from "../../../components/shared";
import { Link } from "react-router-dom";

const Payment = () => {
  
  return (
    <Layout>
        <div className={`${Styles.paymentWrapper}`}>
           <div className={`${Styles.center}`}>
            <div className={`${Styles.paymentRow} ${Styles.dFlex}`}>
                <div className={`${Styles.paymentMethodCol}`}>
                  <div className={`${Styles.card}`}>
                     <Text strong="strong7" color="black" className={`${Styles.pageTitel}`}>
                        Logged in
                     </Text>
                     <Text className={`${Styles.dBlock} ${Styles.userInfo}`}>Shaiwan | 9131720244</Text>
                  </div>

                  <div className={`${Styles.card}`}>
                     <div className={`${Styles.alignBetween}`}>
                        <Text strong="strong7" color="black" className={`${Styles.pageTitel}`}>
                           Delivery address
                        </Text>
                        <Button variant="textBtn" className={`${Styles.redBtn}`}>Change</Button>
                     </div>
                     <div className={`${Styles.addressWrapper}`}>
                        <Text strong="strong6" variant="mdText" color="black" className={`${Styles.dBlock}`}>Home</Text>
                        <Text strong="strong5" variant="smText" color="black" className={`${Styles.dBlock} ${Styles.address}`}>
                           30, 3, Narayan Sing Saput Marg, Shivaji Market, Nagar Nigam, Indore, Madhya Pradesh 452007, India 
                        </Text>
                     </div>
                     <Text variant="lgText" color="black" strong="strong5" className={`${Styles.dBlock}`}>27 Mins</Text>
                  </div>

                  <div className={`${Styles.card}`}>
                     <Text strong="strong7" color="black" className={`${Styles.pageTitel} ${Styles.metehodText}`}>
                        Choose payment method
                     </Text>
                     <div className={`${Styles.alignBetween} ${Styles.methodWrapper}`}>
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
                     <div className={`${Styles.alignBetween} ${Styles.methodWrapper}`}>
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
                     <div className={`${Styles.alignBetween} ${Styles.methodWrapper}`}>
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
                     </div>
                </div>
                <div className={`${Styles.paymentCol}`}>
                  <div className={`${Styles.card}`}>
                     <div className={`${Styles.dFlex} ${Styles.productImgWrapper}`}>
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
                     </div>

                     <Link to="#" className={`${Styles.dFlex} ${Styles.alignItemsCenter} ${Styles.coupan}`}>
                         <Image src="assets/image/icon/discount.png" alt="discount" className={`${Styles.discount}`} />
                         <Text strong="strong5" variant="lgText" color="black">Apply Coupan</Text>
                     </Link>

                     <Text variant="lgText" strong="strong6" color="black">Bill Details</Text>
                     <div className={`${Styles.productInfoWrapper}`}>
                        <div className={`${Styles.alignBetween} ${Styles.mb10}`}>
                           <Text className={`${Styles.pr5}`}>Item Total</Text>
                           <Text>$154.00</Text>
                        </div>
                        <div className={`${Styles.alignBetween} ${Styles.pb5}`}>
                           <Text className={`${Styles.pr5}`}>Delivery Fee | 3.7 kms</Text>
                           <Text>$14.00</Text>
                        </div>

                        <div className={`${Styles.alignBetween} ${Styles.serviceCharges}`}>
                           <Text className={`${Styles.pr5}`}>GST and Restaurant Charges</Text>
                           <Text>$10.00</Text>
                        </div>
                     </div>
                     
                     <div className={`${Styles.alignBetween}`}>
                        <Text color="black" strong="strong7" variant="mdText">Total Pay</Text>
                        <Text color="black" strong="strong7" variant="mdText">$150.00</Text>
                     </div>
                     
                  </div>
                </div>
            </div>
             <div className={`${Styles.payBtnWrapper}`}>
               <Button variant="redBtn"> 
                  Proceed to Pay
               </Button>
             </div>
             
              
           </div>
        </div>
        
   </Layout>
  );
};

export default Payment;