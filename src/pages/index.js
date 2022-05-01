import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <div className="flex flex-col items-center justify-center h-3/4">
      <p className="p-6 text-gray-900">
        Mobile Catering is our business. We service all of Atlantic Canada,
        providing delicious meals for small or large groups. Our business is
        built on dependability and quality. We have been serving Atlantic
        Canadians since 1980. For all your indoor or outdoor functions, depend
        on <span className="text-primary">Sizzler BBQ Catering.</span>
      </p>
      <div className="w-1/2">
        <StaticImage
          src="https://www.sizzlerbbq.com/gallery/gallery1.jpg"
          alt="Sizzler Trucks"
        />
      </div>
      <p className="p-6">
        <span className="font-bold">History</span><br />
        In 1980 Herb and Janet were asked by the PEI Pork Board to cater an
        event, from that was born{" "}
        <span className="italic">"The Pork Sizzler"</span> known today as{" "}
        <span className="italic text-primary">
          Sizzler BBQ Catering Since 1980
        </span>.
      </p>
      <p className="px-6">
         As the popularity grew they added two more catering units to do more
        events by 1983. Also during this year the menu was expanded to include
        Chicken, beef, and sea food. By 1985 they were doing events in NB and
        NS. The bussiness grew steadily over the next 7 years and many
        improvements were made in refrigeration on all trucks. From 1993 to 1997
        they were joined by their son Bruce who runs the Sizzler today. In 1997
        Herb and Janet took the season off to travel. In 1998 Herb returned to
        the Sizzler to help with staff training and party catering, you may find
        him cooking at some functions today. In 1999 we added two more catering
        units bringing the fleet of temperature controlled trucks and bbq's to
        5. By 2003 the added Catering units were found to be busy and over the
        next two years we expanded our trucks to 7 temperature controlled units.
        In 2005 we moved into a new facility to do our prep work and have
        noticed many new efficiencies from doing so. In 2016 we are in our 36th
        Year of operation , thank you to our long term customers and new clients
        as well.
      </p>
    </div>
  </Layout>
)

export default IndexPage
