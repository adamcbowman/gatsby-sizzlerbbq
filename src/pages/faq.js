import React from "react"
import Layout from "../components/layout"

const Faqs = [
  {
    question: "How do we book your service?",
    answer: "To hold a date all you need to do is fill in the service form on our website. There is no charge to book. Call any time 1-800-805-2227 or 902-892-6160"
  },
  {
    question: "What is the maximum number of people?",
    answer: "There is no maximum number of people. We have regularly catered to groups of up to 2500 people!",
  },
  {
    question: "What is the minimum number of people?",
    answer: "There is no minumum number of people. Our standard pricing is based on a group size of 100. If your group is less than 100, a setup charge is applied. See booking form for cost details."
  },
  {
    question: "Do you have Vegatarian or Gluten free options?",
    answer: "Yes, we have a vegetarian option and a gluten free option. Please see booking form for details. Any special menu requests or dietary restrictions should be noted in the form."
  },
  {
    question: "We are having a family reunion and were wondering about renting BBQ's. Do you do this?",
    answer: "We can do a BBQ rental fee based on $850.00 plus $50.00 per hour. This BBQ is of adequate size to cater for a group of around 1500 persons. Catering is our main focus so this is dependant on availability as well."
  },
  {
    question: "When do we need to know the final number of people?" ,
    answer: "Total numbers and menu details are requried 2 weeks prior to service date. Final cost is issued at this time. Payment is due 10 days prior to event. "
  },
  {
    question: "How do we send payment?",
    answer: "You can submit by cheque, money order, direct deposit. We do not use Visa or debit. HST # 101302180. Please include the name of the BBQ and the date of the service. See contact form for contact information."
  },
  {
    question: "Can I send a list of the items you would like on the plates for the bride and groom and have them be served at the head table?",
    answer: "Yes! Any special requests can be included in the service request form. We will work with you to try to accomodate your requests for your event." 
  }
  ]

const Faq = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center p-6">
        <h1 className="text-2xl font-bold text-primary">FAQs</h1>
      </div>
      <div className="flex flex-col items-left">
        {Faqs.map(faq => (
          <div className="">
            <p className="p-2 text-primary text-lg">
              {faq.question}
            </p>
            <p className="p-2">{faq.answer}</p>
          </div>
        ))}
      </div>

      
    </Layout>
  )
}

export default Faq
