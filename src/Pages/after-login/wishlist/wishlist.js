import React from "react";
import Styles from './wishlist.module.scss';
import { Layout } from "../../../components/common";
import { Text, Button, CategoryCard} from "../../../components/shared";

const Wishlist = () => {
  
  return (
    <Layout>
        <div className={`${Styles.wishlist}`}>
           <div className={`${Styles.center}`}>
            <div className={`${Styles.wishlistWrapper} ${Styles.alignBetween} ${Styles.alignItemsCenter}`}>
               <Text strong="strong7" color="black" className={`${Styles.pageTitel}`}>
                 Wishlist (4)
               </Text>
               <Button  variant="primaryOutline" className={`${Styles.moveToBag}`}>
                  Move All To Bag
               </Button>
            </div>
              
              <div className={`${Styles.row} ${Styles.categoryRow}`}>
                <CategoryCard
                   to="#"
                   src="assets/image/category/watchx.png" 
                   productname="TIMEX"
                   rating="4.9"
                   productinfo="Analog Watch  - For Men TW0TG7304"
                   variant="wishlist"
                />
                <CategoryCard
                   to="#"
                   src="assets/image/category/sonata.png" 
                   productname="SONATA"
                   rating="4.5"
                   productinfo="Analog Watch  - For Men TW0TG7304"
                   variant="wishlist"
                />
                <CategoryCard
                   to="#"
                   src="assets/image/category/fastrack.png" 
                   productname="Fastrack"
                   rating="4.2"
                   productinfo="Analog Watch  - For Men TW0TG7304"
                   variant="wishlist"
                />

               <CategoryCard
                   to="#"
                   src="assets/image/category/watchx.png" 
                   productname="TIMEX"
                   rating="4.9"
                   productinfo="Analog Watch  - For Men TW0TG7304"
                   variant="bestProduct"
                   price="$260"
                   strikePrice="$360"
                />
                <CategoryCard
                   to="#"
                   src="assets/image/category/sonata.png" 
                   productname="SONATA"
                   rating="4.5"
                   productinfo="Analog Watch  - For Men TW0TG7304"
                   variant="bestProduct"
                   price="$260"
                   strikePrice="$360"
                />
                <CategoryCard
                   to="#"
                   src="assets/image/category/fastrack.png" 
                   productname="Fastrack"
                   rating="4.2"
                   productinfo="Analog Watch  - For Men TW0TG7304"
                   variant="bestProduct"
                   price="$260"
                   strikePrice="$360"
                />

               <CategoryCard
                   to="#"
                   src="assets/image/category/watchx.png" 
                   productname="TIMEX"
                   rating="4.9"
                   productinfo="Analog Watch  - For Men TW0TG7304"
                   variant="bestProduct"
                   price="$260"
                   strikePrice="$360"
                />
                <CategoryCard
                   to="#"
                   src="assets/image/category/sonata.png" 
                   productname="SONATA"
                   rating="4.5"
                   productinfo="Analog Watch  - For Men TW0TG7304"
                   variant="bestProduct"
                   price="$260"
                   strikePrice="$360"
                />
                <CategoryCard
                   to="#"
                   src="assets/image/category/fastrack.png" 
                   productname="Fastrack"
                   rating="4.2"
                   productinfo="Analog Watch  - For Men TW0TG7304"
                   variant="bestProduct"
                   price="$260"
                   strikePrice="$360"
                />
              </div>
           </div>
        </div>
        
   </Layout>
  );
};

export default Wishlist;