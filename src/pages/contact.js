import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <Seo title="Contact Sizzler BBQ Catering" />
      <div className="flex flex-col justify-center h-3/4">
        <h1 className="p-10 text-primary text-center">Contact Sizzler</h1>
        <p className="p-6 text-gray-900 text-center">
          Phone Toll Free 1-800-805-2227 or local phone 902-892-6160 for information or to book events in
          Prince Edward Island, Nova Scotia or New Brunswick.
        </p>
        <p className="px-6 text-gray-900 text-center">
          Contact us by email at{" "}
          <a href="mailto:sizzler@eastlink.ca" className="text-primary">
            sizzler@eastlink.ca
          </a>
          <br />
        <br />
        </p>
       
        {/* <p className="px-6 text-gray-900">
          <strong>Sizzler B-B-Q Catering <br /></strong>
          396 Trans Canada Highway,
          <br />
          Cornwall, PO Box 912
          <br />
          Prince Edward Island, Canada C0A1H0
          <br />
          Phone Toll Free 1-800-805-2227
          <br />
          Phone (local) 902-892-6160 Voice
          <br />
          <br />
          In Nova Scotia
          <br />
          c/o Bruce MacPherson
          <br />
          4044 Highway 236,
          <br />
          Lower Truro, NS B6L 1J9
          <br />
          Phone Toll Free 1-800-805-2227
          <br />
          Phone (local) 902-892-6160 Voice
          <br />
          <br />
          In New Brunswick
          <br />
          c/o Bruce MacPherson, Moncton
          <br />
          Phone Toll Free 1-800-805-2227
          <br />
          Phone (local) 902-892-6160 Voice <br />
        </p> */}
      </div>
    </Layout>
  )
}

export default contact
