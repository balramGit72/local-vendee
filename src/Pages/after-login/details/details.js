import React from "react";
import Styles from './details.module.scss';
import { Layout } from "../../../components/common";
import { Heading,Text, Image, Button} from "../../../components/shared";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const Details = () => {

  return (
    <Layout>
      <div className={`${Styles.center} ${Styles.detailsPageWrapper}`}>
         <div className={`${Styles.card} ${Styles.alignBetween}`}>
            <div className={`${Styles.productDetailwWrapper}`}>
               <Heading headingType="h2" headingText="La Pino'z Pizza" color="black" className={`${Styles.pageTitel}`}/>
               <Text strong="strong4" variant="lgText" className={`${Styles.productDetail} ${Styles.dBlock}`}>
                  Pizzas, Pastas
               </Text>
               <div className={`${Styles.locationDetail} ${Styles.dFlex} ${Styles.alignItemsCenter}`}>
                  <Image src="assets/image/icon/location.svg" alt="location" className={`${Styles.mr10} ${Styles.cardImg}`}/>
                  <Text strong="strong4" variant="lgText" className={`${Styles.location}`}>South Tukoganj 3.4 km</Text>
               </div>
               <div className={`${Styles.deliveryDetail} ${Styles.dFlex} ${Styles.alignItemsCenter}`}>
                  <Image src="assets/image/icon/fast-delivery.png" alt="location" className={`${Styles.mr10} ${Styles.cardImg}`}/>
                  <Text strong="strong5" color="black" variant="lgText" className={`${Styles.deliveryInfo}`}>
                     3.3 kms | $30 Delivery fee will apply
                  </Text>
               </div>
            </div>

            <div className={`${Styles.alignBetween} ${Styles.alignItemsCenter} ${Styles.ratingBox}`}>
               <Image src="assets/image/icon/star.svg" alt="star" className={`${Styles.ratingIcon}`} />
               <Text color="black" strong="strong6" className={`${Styles.rating}`}>4.9</Text>
            </div>
            
         </div>

         <div className={`${Styles.productType} ${Styles.dFlex} ${Styles.alignItemsCenter}`}>
            <Image src="assets/image/veg.png" alt="veg"/>
            <Text color="black" variant="lgText" strong="strong6">PURE VEG</Text>
         </div>
         
         <div className={`${Styles.card} ${Styles.productCardSection} detailAcordion`}>
            <Accordion >
               <AccordionSummary
                  expandIcon={<span class="material-symbols-rounded">expand_more</span>}
                  aria-controls="panel1-content"
                  id="panel1-header"
               >
                  <Text 
                  color="black" 
                  strong="strong6" 
                  className={`${Styles.inter} ${Styles.acordionHeader}`}
                  >
                     Combo (2)
                  </Text>
               </AccordionSummary>
               <AccordionDetails>
                  <div className={`${Styles.alignBetween} ${Styles.alignItemsCenter} ${Styles.productCardWrapper}`}>
                     <div className={`${Styles.dFlex} ${Styles.productCard}`}>
                         <div className={`${Styles.productImg}`}>
                            <Image src="assets/image/category/pinoz-pizza.jpg"  alt="product"/>
                         </div>
                         <div className={`${Styles.productInfo}`}>
                           <Text 
                              color="black" 
                              strong="strong5" 
                              className={`${Styles.productName} ${Styles.dBlock} ${Styles.inter}`}
                           >
                              Combo Of Chocolava & Coke
                           </Text>
                           <Text 
                             strong="strong4"
                             variant="mdText"
                             className={`${Styles.productCombo} ${Styles.dBlock} ${Styles.inter}`}
                           >
                              Chocolava + Coke
                           </Text>
                           <Text 
                             color="black" 
                             strong="strong7" 
                             variant="mdText"
                             className={`${Styles.productPrice} ${Styles.dBlock} ${Styles.inter}`}
                           >
                              $20,0
                           </Text>
                         </div>
                     </div>
                     <Button variant="redBtn" className={`${Styles.productAddBtn}`}>
                        1 <span class="material-symbols-rounded">add</span>
                     </Button>
                  </div>
                  <div className={`${Styles.alignBetween} ${Styles.alignItemsCenter} ${Styles.productCardWrapper}`}>
                     <div className={`${Styles.dFlex} ${Styles.productCard}`}>
                         <div className={`${Styles.productImg}`}>
                            <Image src="assets/image/category/pinoz-pizza.jpg"  alt="product"/>
                         </div>
                         <div className={`${Styles.productInfo}`}>
                           <Text 
                              color="black" 
                              strong="strong5" 
                              className={`${Styles.productName} ${Styles.dBlock} ${Styles.inter}`}
                           >
                              Combo Of Chocolava & Coke
                           </Text>
                           <Text 
                             strong="strong4"
                             variant="mdText"
                             className={`${Styles.productCombo} ${Styles.dBlock} ${Styles.inter}`}
                           >
                              Chocolava + Coke
                           </Text>
                           <Text 
                             color="black" 
                             strong="strong7" 
                             variant="mdText"
                             className={`${Styles.productPrice} ${Styles.dBlock} ${Styles.inter}`}
                           >
                              $20,0
                           </Text>
                         </div>
                     </div>
                     <Button variant="redBtn" className={`${Styles.productAddBtn}`}>
                        Add
                     </Button>
                  </div>
               </AccordionDetails>
            </Accordion>

         </div>

         <div className={`${Styles.card} ${Styles.productCardSection} detailAcordion`}>
            <Accordion >
               <AccordionSummary
                  expandIcon={<span class="material-symbols-rounded">expand_more</span>}
                  aria-controls="panel1-content"
                  id="panel1-header"
               >
                  <Text 
                  color="black" 
                  strong="strong6" 
                  className={`${Styles.inter} ${Styles.acordionHeader}`}
                  >
                     Personal Slice Veg Pizza. (33)
                  </Text>
               </AccordionSummary>
               <AccordionDetails>
                  <div className={`${Styles.alignBetween} ${Styles.alignItemsCenter} ${Styles.productCardWrapper}`}>
                     <div className={`${Styles.dFlex} ${Styles.productCard}`}>
                         <div className={`${Styles.productImg}`}>
                            <Image src="assets/image/category/pinoz-pizza.jpg"  alt="product"/>
                         </div>
                         <div className={`${Styles.productInfo}`}>
                           <Text 
                              color="black" 
                              strong="strong5" 
                              className={`${Styles.productName} ${Styles.dBlock} ${Styles.inter}`}
                           >
                              Combo Of Chocolava & Coke
                           </Text>
                           <Text 
                             strong="strong4"
                             variant="mdText"
                             className={`${Styles.productCombo} ${Styles.dBlock} ${Styles.inter}`}
                           >
                              Chocolava + Coke
                           </Text>
                           <Text 
                             color="black" 
                             strong="strong7" 
                             variant="mdText"
                             className={`${Styles.productPrice} ${Styles.dBlock} ${Styles.inter}`}
                           >
                              $20,0
                           </Text>
                         </div>
                     </div>
                     <Button variant="redBtn" className={`${Styles.productAddBtn}`}>
                        1 <span class="material-symbols-rounded">add</span>
                     </Button>
                  </div>
                  <div className={`${Styles.alignBetween} ${Styles.alignItemsCenter} ${Styles.productCardWrapper}`}>
                     <div className={`${Styles.dFlex} ${Styles.productCard}`}>
                         <div className={`${Styles.productImg}`}>
                            <Image src="assets/image/category/pinoz-pizza.jpg"  alt="product"/>
                         </div>
                         <div className={`${Styles.productInfo}`}>
                           <Text 
                              color="black" 
                              strong="strong5" 
                              className={`${Styles.productName} ${Styles.dBlock} ${Styles.inter}`}
                           >
                              Combo Of Chocolava & Coke
                           </Text>
                           <Text 
                             strong="strong4"
                             variant="mdText"
                             className={`${Styles.productCombo} ${Styles.dBlock} ${Styles.inter}`}
                           >
                              Chocolava + Coke
                           </Text>
                           <Text 
                             color="black" 
                             strong="strong7" 
                             variant="mdText"
                             className={`${Styles.productPrice} ${Styles.dBlock} ${Styles.inter}`}
                           >
                              $20,0
                           </Text>
                         </div>
                     </div>
                     <Button variant="redBtn" className={`${Styles.productAddBtn}`}>
                        Add
                     </Button>
                  </div>
               </AccordionDetails>
            </Accordion>

         </div>
        
            
      </div>
   </Layout>
  );
};

export default Details;