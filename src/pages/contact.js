import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <Seo title="Contact Us" />
      <div className="flex flex-col justify-center h-3/4">
          <h1 className="p-10 text-primary text-center">Contact Information</h1>
          <p className="p-6 text-gray-900">
          Phone Toll Free 1-800-805-2227 for information or to book events in Prince Edward Island, Nova Scotia or New Brunswick. 
          </p>
          <p className="px-6 text-gray-900">
          Contact us by email at <a href="mailto:sizzler@eastlink.ca" className="text-primary">sizzler@eastlink.ca</a> 
          </p>

      </div>
    </Layout>
  )
}

export default contact
