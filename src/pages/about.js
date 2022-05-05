import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const about = () => {
  return (
    <Layout>
      <Seo title="About Sizzler Bbq Catering" />
    <div>
    <h1 className="font-bold text-xl pt-6 self-start px-6">About Sizzler Bbq</h1>
        <p className="p-6">
        In 1980 Herb and Janet were asked by the PEI Pork Board to cater an
        event, from that was born{" "}
        <em>"The Pork Sizzler"</em> known today as{" "}
        <em className="text-primary">
          Sizzler BBQ Catering Since 1980
        </em>.
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
}

export default about