import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

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
          <a href="tel:1-800-805-2227" >
            <FontAwesomeIcon icon={faPhone} /> 
            {"  "}
            Call for free Consultation
          </a>
        </div>

        <div className="flex flex-col items-center pt-10">
        <p align="left"><font face="Geneva, Arial, Helvetica, sans-serif"><strong>Appetizers</strong></font> 
        </p>

        <table align="center p-2">
          <tbody>
            <tr valign="TOP" bgcolor="#EDF3ED" className="p-2"> 
            <td bgcolor="#EDF3ED" className="p-2"><font face="Geneva, Arial, Helvetica, sans-serif">Steamed 
              Mussels <i>served with melted butter</i></font></td>
            <td align="RIGHT"><font face="Geneva, Arial, Helvetica, sans-serif">$5.95</font></td>
          </tr>
          <tr valign="TOP" bgcolor="#FCF8DC" className="p-2"> 
            <td bgcolor="#FCF8DC"className="p-2"><font face="Geneva, Arial, Helvetica, sans-serif">Bacon-Wrapped 
              Scallops <i>barbequed and served with honey mustard and seafood 
              sauce</i></font></td>
            <td align="RIGHT"className="p-2"><font face="Geneva, Arial, Helvetica, sans-serif">$11.25</font></td>
          </tr>
          <tr valign="TOP" bgcolor="#FCF8DC"className="p-2"> 
            <td colspan="2" bgcolor="#EDF3ED"className="p-2"><font face="Geneva, Arial, Helvetica, sans-serif">Charge 
              based on full group size.</font></td>  
          </tr>
          <tr valign="TOP" bgcolor="#FCF8DC"className="p-2"> 
            <td colspan="2"className="p-2"><font face="Geneva, Arial, Helvetica, sans-serif">Cheeseballs 
              and crackers, mini eggrolls <i>and much more</i> also available. 
              </font></td>
          </tr>
        </tbody>
        </table>


        </div>


      </div>
    </Layout>
  )
}

export default Menu
