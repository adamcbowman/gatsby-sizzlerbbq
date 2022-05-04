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
            <font face="Geneva, Arial, Helvetica, sans-serif">
              <strong>Appetizers</strong>
            </font>
          </p>
          
          <table align="center p-2">
            <tbody>
              <tr valign="TOP" bgcolor="#EDF3ED" className="p-2">
                <td bgcolor="#EDF3ED" className="p-2">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Steamed Mussels <i>served with melted butter</i>
                  </font>
                </td>
                <td align="RIGHT">
                  <font face="Geneva, Arial, Helvetica, sans-serif">$5.95</font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC" className="p-2">
                <td bgcolor="#FCF8DC" className="p-2">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Bacon-Wrapped Scallops{" "}
                    <i>
                      barbequed and served with honey mustard and seafood sauce
                    </i>
                  </font>
                </td>
                <td align="RIGHT" className="p-2">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    $11.25
                  </font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC" className="p-2">
                <td colspan="2" bgcolor="#EDF3ED" className="p-2">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Charge based on full group size.
                  </font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC" className="p-2">
                <td colspan="2" className="p-2">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Cheeseballs and crackers, mini eggrolls <i>and much more</i>{" "}
                    also available.
                  </font>
                </td>
              </tr>
            </tbody>
          </table>

          <font face="Geneva, Arial, Helvetica, sans-serif">
            <strong>Main Menu Selections</strong>
          </font>
          <table
            width="705"
            cellspacing="0"
            cellpadding="6"
            border="0"
            align="center"
          >
            <tbody>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td>
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Boneless Pork Steak
                  </font>
                </td>
                <td align="RIGHT">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    $16.45
                  </font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC">
                <td>
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Chicken Breast
                    <i>(6 oz, boneless)</i>
                  </font>
                </td>
                <td align="RIGHT">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    $17.75
                  </font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td>
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Strip Loin Steak 10oz
                  </font>
                </td>
                <td align="RIGHT">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    $23.95 add mushrooms $3.25
                    <br />
                    add onions $1.75
                  </font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td bgcolor="#FCF8DC">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Salmon
                  </font>
                </td>
                <td bgcolor="#FCF8DC" align="RIGHT">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    $23.45
                  </font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC">
                <td bgcolor="#EDF3ED">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Tofu Veggie Kabob{" "}
                  </font>
                </td>
                <td bgcolor="#EDF3ED" align="RIGHT">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    $16.45** can be done without tofu
                    <br />
                  </font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td bgcolor="#FCF8DC">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Lobster
                  </font>
                </td>
                <td bgcolor="#FCF8DC" align="RIGHT">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    $16.45 + Lobster cost (you set the size and quantity)
                  </font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td colspan="2">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Combinations of any of the above six choices available to
                    groups.
                  </font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td bgcolor="#FCF8DC">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Unlimited Hip of Beef - Includes two desserts
                  </font>
                </td>
                <td bgcolor="#FCF8DC" align="RIGHT">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    $19.75 add mushrooms $3.25 add onions $1.75
                  </font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC">
                <td bgcolor="#EDF3ED">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Pork Buffet <i>(whole succulent roast pig) - </i>Includes
                    two desserts
                  </font>
                </td>
                <td bgcolor="#EDF3ED" align="RIGHT">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    <em>(based on minimum 75 person group)</em>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $28.45
                  </font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td bgcolor="#FCF8DC">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Chicken(60%) / Pork(40%)
                  </font>
                </td>
                <td bgcolor="#FCF8DC" align="RIGHT">
                  $17.00** most popular item**
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC">
                <td bgcolor="#EDF3ED">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Extra meat portions add $3.50 as a stand alone menu
                  </font>
                </td>
                <td bgcolor="#EDF3ED" align="RIGHT">
                  &nbsp;
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td bgcolor="#FCF8DC" align="right">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Sausages, Chicken breast, Hamburger 6oz fresh,{" "}
                  </font>
                  <br />
                  5oz bacon wrapped sirloin, pulled pork on a bun, Pork steak,
                  BEYOND MEAT Burger or <br />
                  Pork Back Ribs (1/3 rack)
                </td>
                <td bgcolor="#FCF8DC" align="RIGHT">
                  <font face="Geneva, Arial, Helvetica, sans-serif">$5.00</font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td bgcolor="#FCF8DC" align="right">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Pork side Ribs{" "}
                  </font>
                </td>
                <td bgcolor="#FCF8DC" align="RIGHT">
                  <font face="Geneva, Arial, Helvetica, sans-serif">$4.00</font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC">
                <td align="right">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Ball Park hot dogs
                  </font>
                </td>
                <td align="RIGHT">
                  <font face="Geneva, Arial, Helvetica, sans-serif">$3.00</font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td bgcolor="#FCF8DC" align="right">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    10oz Strip Loin Steak or Salmon
                  </font>
                </td>
                <td bgcolor="#FCF8DC" align="RIGHT">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    $10.00
                  </font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td bgcolor="#FCF8DC" align="right">
                  &nbsp;
                </td>
                <td bgcolor="#FCF8DC" align="RIGHT">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    ***add $3.50 as a stand alone menu*** without buffet
                  </font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#FCF8DC">
                <td bgcolor="#EDF3ED">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Children ages 7 - 12 Includes hotdog and adult option.
                  </font>
                </td>
                <td bgcolor="#EDF3ED" align="RIGHT">
                  <font face="Geneva, Arial, Helvetica, sans-serif">$9.95</font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td bgcolor="#FCF8DC">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    Infant under 6 <i>(includes hotdog)</i>
                  </font>
                </td>
                <td bgcolor="#FCF8DC" align="RIGHT">
                  <font face="Geneva, Arial, Helvetica, sans-serif">$1.00</font>
                </td>
              </tr>
              <tr valign="TOP" bgcolor="#EDF3ED">
                <td colspan="2">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    All of the above items are served with our{" "}
                    <b>all you care to eat salad buffet.</b>{" "}
                    <i>
                      Priced on specific group size - set up fee applied if
                      under 100 people. Infant and children not included for
                      group sizing.{" "}
                    </i>
                  </font>
                  <font face="Arial, Helvetica, sans-serif">
                    Travel cost may apply. Travel cost from Moncton, NB or Turo,
                    N.S. = hours x 2 x $50.
                    <br />
                    IE - Moncton &amp; Fredricton = 1.5 hours x2 = 3 hr x $50.
                    (round trip) = $150. travel cost.
                  </font>
                </td>
              </tr>
              {/* <tr valign="TOP"> 
            <td colspan="2"><img src="images/bbq6.jpg" width="705" height="397" /></td>
          </tr> */}
              <tr valign="TOP" bgcolor="#FCF8DC">
                <td colspan="2" bgcolor="#CC0000" align="center">
                  <font
                    face="Geneva, Arial, Helvetica, sans-serif"
                    color="#FFFFFF"
                  >
                    <b>
                      Discounts to Large Groups (1500 adults) and Sunday events
                      over 100 adults.
                    </b>
                    <br />
                    Infant not included for group sizing. No discount for
                    children.
                  </font>
                  <font face="Geneva, Arial, Helvetica, sans-serif">
                    <br />
                  </font>
                </td>
              </tr>
            </tbody>
          </table>

          <font face="Geneva, Arial, Helvetica, sans-serif">
            <br clear="all" />
            <img
              src="https://www.sizzlerbbq.com/images/buffet1.jpg"
              width="705"
              vspace="4"
              height="732"
            />
            <br />
            <b>This Salad Buffet is included with the main menu...</b>{" "}
          </font>

          <table width="500" cellspacing="10" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td colspan="1" rowspan="1" align="Left">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
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
                  </font>
                </td>
                <td colspan="1" rowspan="1" align="Right">
                  <font face="Geneva, Arial, Helvetica, sans-serif">
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
                  </font>
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
