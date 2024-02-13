import React, {useState, useEffect} from "react";
import Styles from './category.module.scss';
import { Layout } from "../../../components/common";
import { Heading,Text, Button, CategoryCard, ListGroup, ListItem, RadioBtn } from "../../../components/shared";

const Category = () => {
  
  const[getModal, setModal] = useState(false)
  useEffect(() => {
     if (getModal === false) {
      document.body.style.overflow = 'unset';
     } else {
      document.body.style.overflow = 'hidden';
     }
  }, [getModal]);

  return (
    <Layout>
        <div className={`${Styles.category}`}>
           <div className={`${Styles.center}`}>
              <Heading headingType="h2" headingText="Pizza" color="black" className={`${Styles.pageTitel}`}/>
              <Text color="black" variant="lgText" strong="strong4" className={`${Styles.mt10} ${Styles.dBlock}`}>Cheesilicious pizzas to make every day extraordinary.</Text>
              <div className={`${Styles.tabWrapper} ${Styles.dFlex} ${Styles.flexWrap}`}>
                  <Button variant="tabBtn"
                   onClick={()=>setModal(!getModal)}
                  >Filter
                    <span class="material-symbols-rounded">page_info</span>
                  </Button>
                  <Button variant="tabBtn">Sort By</Button>
                  <Button variant="tabBtn">Pure Veg</Button>
                  <Button variant="tabBtn">Less than 30 mins</Button>
                  <Button variant="tabBtn">$300 - $300</Button>
                  <Button variant="tabBtn">Less than $300</Button>
              </div>
              <Text color="black" strong="strong6" className={`${Styles.categoryTitle} ${Styles.dBlock}`}>Restaurants to explore</Text>
              <div className={`${Styles.row} ${Styles.categoryRow}`}>
                <CategoryCard
                   to="#"
                   src="assets/image/category/pinoz-pizza.jpg" 
                   off="25% Off"
                   time="49 Mins"
                   productname="La Pino'z Pizza"
                   rating="4.9"
                   productinfo="Pizzas, Pastas, Desserts, Fast Food....."
                   address="Bhawar Kuan"
                />
                <CategoryCard
                   to="#"
                   src="assets/image/category/chilli-pizza.png" 
                   off="20% Off"
                   time="30 Mins"
                   productname="Italian Pizza"
                   rating="4.5"
                   productinfo="The spiced double chicken, 5 chicken feast pizza, and Indo Fusion chicken pizza"
                   address="Bhawar Kuan"
                />
                <CategoryCard
                   to="#"
                   src="assets/image/category/FOI-pizza.png" 
                   off="30% Off"
                   time="40 Mins"
                   productname="Sicilian Pizza"
                   rating="4.2"
                   productinfo="A pizza paratha has a generous amount of onions, mozzarella cheese, capsicum, and many other ingredients as the main filling."
                   address="Bhawar Kuan"
                />

                <CategoryCard
                   to="#"
                   src="assets/image/category/pinoz-pizza.jpg" 
                   off="25% Off"
                   time="49 Mins"
                   productname="La Pino'z Pizza"
                   rating="4.9"
                   productinfo="Pizzas, Pastas, Desserts, Fast Food....."
                   address="Bhawar Kuan"
                />
                <CategoryCard
                   to="#"
                   src="assets/image/category/chilli-pizza.png" 
                   off="20% Off"
                   time="30 Mins"
                   productname="Italian Pizza"
                   rating="4.5"
                   productinfo="The spiced double chicken, 5 chicken feast pizza, and Indo Fusion chicken pizza"
                   address="Bhawar Kuan"
                />
                <CategoryCard
                   to="#"
                   src="assets/image/category/FOI-pizza.png" 
                   off="30% Off"
                   time="40 Mins"
                   productname="Sicilian Pizza"
                   rating="4.2"
                   productinfo="A pizza paratha has a generous amount of onions, mozzarella cheese, capsicum, and many other ingredients as the main filling."
                   address="Bhawar Kuan"
                />

                <CategoryCard
                   to="#"
                   src="assets/image/category/pinoz-pizza.jpg" 
                   off="25% Off"
                   time="49 Mins"
                   productname="La Pino'z Pizza"
                   rating="4.9"
                   productinfo="Pizzas, Pastas, Desserts, Fast Food....."
                   address="Bhawar Kuan"
                />
                <CategoryCard
                   to="#"
                   src="assets/image/category/chilli-pizza.png" 
                   off="20% Off"
                   time="30 Mins"
                   productname="Italian Pizza"
                   rating="4.5"
                   productinfo="The spiced double chicken, 5 chicken feast pizza, and Indo Fusion chicken pizza"
                   address="Bhawar Kuan"
                />
                <CategoryCard
                   to="#"
                   src="assets/image/category/FOI-pizza.png" 
                   off="30% Off"
                   time="40 Mins"
                   productname="Sicilian Pizza"
                   rating="4.2"
                   productinfo="A pizza paratha has a generous amount of onions, mozzarella cheese, capsicum, and many other ingredients as the main filling."
                   address="Bhawar Kuan"
                />
              </div>
           </div>
        </div>
       
       {getModal &&
          <div className={`${Styles.modalOverlay}`}>
          <div className={`${Styles.modalBody}`}>
            <div className={`${Styles.modalHeader} ${Styles.textCenter}`}>
                <Text color="black" strong="strong6" className={`${Styles.inter} ${Styles.modalHeading}`}>Filters</Text>
                <div className={`${Styles.closeBtn}`} onClick={()=>setModal(!getModal)}><span class="material-symbols-rounded">close</span></div>
            </div>
            <div className={`${Styles.dFlex}`}>
                <div className={`${Styles.filterList}`}>
                  <ListGroup>
                    <ListItem className={`${Styles.filters} ${Styles.active}`}>
                       Sort
                    </ListItem>
                    <ListItem className={`${Styles.filters}`}>
                       Veg/Non-Veg
                    </ListItem>
                    <ListItem className={`${Styles.filters}`}>
                       Delivery Time
                    </ListItem>
                    <ListItem className={`${Styles.filters}`}>
                       Cost For Two
                    </ListItem>
                  </ListGroup>
                </div>
                <div className={`${Styles.filterCheckWrapper}`}>
                   <RadioBtn 
                      labelName="Relevance (Default)" 
                      className={`${Styles.filterCheck}`}
                      id="relevance"
                      name="fiter"
                   />
                   <RadioBtn 
                      labelName="Delivery Time" 
                      className={`${Styles.filterCheck}`}
                      id="deliver"
                      name="fiter"
                   />
                   <RadioBtn 
                      labelName="Rating" 
                      className={`${Styles.filterCheck}`}
                      id="rating"
                      name="fiter"
                   />
                   <RadioBtn 
                      labelName="Cost: Low to High" 
                      className={`${Styles.filterCheck}`}
                      id="cost"
                      name="fiter"
                   />
                   <RadioBtn 
                      labelName="Cost: High to Low" 
                      className={`${Styles.filterCheck}`}
                      id="value"
                      name="fiter"
                   />
                </div>
            </div>
          </div>
        </div>
       }
        
   </Layout>
  );
};

export default Category;