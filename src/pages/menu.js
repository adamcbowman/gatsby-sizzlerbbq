import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Menu = () => {
  return (
    <Layout>
      <Seo title="Our Menu" />
      <div className="container">
        <div className="flex flex-col items-center pt-10">
          <img
            src="https://www.sizzlerbbq.com/images/bbq3.jpg"
            alt="Beef"
            className="rounded-lg shadow-lg"
            style={{ opacity: `95%` }}
          />
        </div>

        <div className=" text-center pt-10">
          <a href="tel:1-800-805-2227">
            <FontAwesomeIcon icon={faPhone} />
            {"  "}
            Call for free Consultation
          </a>
        </div>

        <div className="flex flex-col items-center pt-10">
          <p align="left">
          
              <strong>Appetizers</strong>

          </p>
          
          <table align="center">
            <tbody>
              <tr valign="TOP" bgcolor="#EDF3ED" className="p-2">
                <td bgcolor="#EDF3ED" className="p-2">
                  
                    Steamed Mussels <i>served with melted butter</i>
                 
                </td>
                <td align="RIGHT">
                  $5.95
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC" className="p-2">
                <td bgcolor="#FCF8DC" className="p-2">
                    Bacon-Wrapped Scallops{" "}
                    <i>
                      barbequed and served with honey mustard and seafood sauce
                    </i>
                </td>
                <td align="RIGHT" className="p-2">
                    $11.25
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC" className="p-2">
                <td colspan="2" bgcolor="#EDF3ED" className="p-2">
                    Charge based on full group size.
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC" className="p-2">
                <td colspan="2" className="p-2">
                  
                    Cheeseballs and crackers, mini eggrolls <i>and much more</i>{" "}
                    also available.
                 
                </td>
              </tr>
            </tbody>
          </table>

          <p className="py-2">
            <strong>Main Menu Selections</strong>
          </p>
          <table
            align="center"
          >
            <tbody>
              <tr valign="TOP" bgcolor="#EDF3ED" className="p-2">
                <td>
                    Boneless Pork Steak
                </td>
                <td align="RIGHT" className="p-2">
                    $16.45
                 
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC" className="p-2">
                <td>
                    Chicken Breast
                    <i>(6 oz, boneless)</i>
                 
                </td>
                <td align="RIGHT" className="p-2">
                    $17.75
                  
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED" className="p-2">
                <td>
                    Strip Loin Steak 10oz
                  
                </td>
                <td align="RIGHT" className="p-2">
                  
                    $23.95 <br />
                    + mushrooms $3.25
                    <br />
                    + onions $1.75
                 
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED" className="p-2">
                <td bgcolor="#FCF8DC" className="p-2">
                  
                    Salmon
                  
                </td>
                <td bgcolor="#FCF8DC" align="RIGHT" className="p-2">
                  
                    $23.45
                  
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC" className="p-2">
                <td bgcolor="#EDF3ED" className="p-2">
                 
                    Tofu Veggie Kabob{" "}
                  
                </td>
                <td bgcolor="#EDF3ED" align="RIGHT" className="p-2">
                  
                    $16.45** <br />
                    available without tofu
                    <br />
                 
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED" className="p-2">
                <td bgcolor="#FCF8DC" className="p-2">
                  
                    Lobster
                  
                </td>
                <td bgcolor="#FCF8DC" align="RIGHT" className="p-2">
                 
                    $16.45 <br />
                     + Lobster cost (you set the size and quantity)
                  
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED" className="p-2">
                <td colspan="2">
                  
                    Combinations of any of the above six choices available to
                    groups.
                  
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED" className="p-2">
                <td bgcolor="#FCF8DC" className="p-2">
                  
                    Unlimited Hip of Beef - Includes two desserts
                 
                </td>
                <td bgcolor="#FCF8DC" align="RIGHT" className="p-2">
                  
                    $19.75 <br />
                    + mushrooms $3.25 <br />
                    + onions $1.75
                 
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC" className="p-2">
                <td bgcolor="#EDF3ED" className="p-2">
                  
                    Pork Buffet <i>(whole succulent roast pig) - </i>Includes
                    two desserts
               
                </td>
                <td bgcolor="#EDF3ED" align="RIGHT" className="p-2">
                  
                    <em>(based on min. 75 person group)</em> <br/>
                    $28.45
                  
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED" className="p-2">
                <td bgcolor="#FCF8DC" className="p-2">
                    Chicken(60%) / Pork(40%)
                 
                </td>
                <td bgcolor="#FCF8DC" align="RIGHT" className="p-2">
                  $17.00** most popular item**
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC" className="p-2">
                <td bgcolor="#EDF3ED" >
                    Extra meat portions 
                </td>
                <td bgcolor="#EDF3ED" align="RIGHT" className="p-2">
                + $3.50/portion
                </td>
                <td bgcolor="#EDF3ED" align="RIGHT">
                  &nbsp;
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td bgcolor="#FCF8DC" >
                    Sausages, Chicken breast, Hamburger 6oz fresh,{" "}
                  
                  <br />
                  5oz bacon wrapped sirloin, pulled pork on a bun, Pork steak,
                  BEYOND MEAT Burger or <br />
                  Pork Back Ribs (1/3 rack)
                </td>
                <td bgcolor="#FCF8DC" align="RIGHT">
                  $5.00
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td bgcolor="#FCF8DC">
                  
                    Pork side Ribs{" "}
                
                </td>
                <td bgcolor="#FCF8DC" align="RIGHT">
                 $4.00
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC">
                <td >
                  
                    Ball Park hot dogs
                  
                </td>
                <td align="RIGHT">
                  $3.00
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td bgcolor="#FCF8DC" >
                    10oz Strip Loin Steak or Salmon
                
                </td>
                <td bgcolor="#FCF8DC" align="RIGHT">
                    $10.00
                  
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td bgcolor="#FCF8DC" >
                  &nbsp;
                </td>
                <td bgcolor="#FCF8DC" align="left">
                    ***add $3.50 as a stand alone menu*** without buffet
                  
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC">
                <td bgcolor="#EDF3ED">
                    Children ages 7 - 12 Includes hotdog and adult option.
                 
                </td>
                <td bgcolor="#EDF3ED" align="RIGHT">
                  $9.95
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td bgcolor="#FCF8DC">
                    Infant under 6 <i>(includes hotdog)</i>
                 
                </td>
                <td bgcolor="#FCF8DC" align="RIGHT">
                  $1.00
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED" >
                <td colspan="2" className="pt-4">
                    All of the above items are served with our{" "}
                    <b>all you care to eat salad buffet.</b>{" "}
                    <br />
                    <i>
                      Priced on specific group size - set up fee applied if
                      under 100 people. Infant and children not included for
                      group sizing.{" "} <br />
                    </i>
                    Travel cost may apply. Travel cost from Moncton, NB or Turo,
                    N.S. = hours x 2 x $50.
                    <br />
                    IE - Moncton &amp; Fredricton = 1.5 hours x2 = 3 hr x $50.
                    (round trip) = $150. travel cost.
                  
                </td>
              </tr>
              {/* <tr valign="TOP"> 
            <td colspan="2"><img src="images/bbq6.jpg" width="705" height="397" /></td>
          </tr> */}
              <tr valign="TOP" bgcolor="#FCF8DC">
                <td colspan="2" align="center" className="py-4">
                  <p className="text-primary-lighter">
                    <b>
                      Discounts to Large Groups (1500 adults) and Sunday events
                      over 100 adults.
                    </b>
                    <br />
                    Infants not included in group sizing. Discount does not apply to
                    children.
                    <br />
                    </p>

                </td>
              </tr>
            </tbody>
          </table>

            <br clear="all" />
            <img
              src="https://www.sizzlerbbq.com/images/buffet1.jpg"
              vspace="4"
              height="732"
            />
            <br />
            <b>Salad Buffet items included with the menu features: </b>{" "}
  

          <table cellspacing="10" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td colspan="1" rowspan="1" align="Left">
                  
                    Baked potato
                    <br />
                    Potato Salad
                    <br />
                    Coleslaw <br />
                    Lettuce
                    <br />
                    Lemons
                    <br />
                    Corn Relish
                    <br />
                    Broccoli
                    <br />
                    Mushrooms
                    <br />
                    Green Peppers
                    <br />
                    Horse Radish (with beef)
                    <br />
                    Whole Wheat Rolls
                    <br />
                    French Dressing
                    <br />
                    Thousand Islands <br />
                    Tomatoes
                  
                </td>
                <td colspan="1" rowspan="1" align="Right">
                  
                    Celery
                    <br />
                    Carrots
                    <br />
                    Onions
                    <br />
                    Croutons
                    <br />
                    Cucumber
                    <br />
                    Sour Cream
                    <br />
                    Bacon Bits
                    <br />
                    Cauliflower
                    <br />
                    Hot Peppers
                    <br />
                    White Rolls
                    <br />
                    Butter
                    <br />
                    Ranch Dressing
                    <br />
                    Italian Dressing
                    <br />
                    Ceasar Dressing
                 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Menu
