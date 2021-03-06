import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import ReviewCarousel from "../components/ReviewCarousel"


const IndexPage = () => (
  <Layout>
    <Seo title="Home - Sizzler BBQ Catering" />
    <div className="flex flex-col items-center justify-center h-full md:h-3/4 text-justify">

      <div className="hero h-full md:min-h-3/4 bg-base-100 flex flex-col">

        <div className="p-4 hero-content text-center flex flex-row items-center">
          <div className="w-screen md:max-w-xl">
            <h1 class="text-xl font-bold text-primary pt-4">
              Mobile Catering is <em>our business</em>.
            </h1>
            <p className="text-center p-6 md:text-justify">
              {" "}
              Providing delicious meals throughout Atlantic Canada, 
              small or large groups. Built on dependability and quality, Sizzler has
              been serving Atlantic Canadians for over 40 years! 
              For any size event, any time, indoors or out, you can always
              depend on us.<br />
            </p>
            <div className="flex flex-row justify-center p-6">
            <Link to="/menu-form">
              <button className="btn btn-primary">Plan your BBQ</button>
            </Link>
            </div>
            
            {/* photo carousel */}
            <div>
            <div className="carousel w-full rounded-lg py-6">
              <div id="item1" className="carousel-item w-full">
                <StaticImage
                  className="w-full"
                  src="../images/gallery1.jpg"
                  alt="Sizzler BBQ Catering Trucks"
                />
              </div>
              <div id="item2" className="carousel-item w-full">
                 <StaticImage
                  className="w-full"
                  src="../images/gallery2.jpg"
                  alt="Sizzler BBQ Catering Staff carving beef"
                />
              </div>
              <div id="item3" className="carousel-item w-full">
                <StaticImage
                  className="w-full"
                  src="../images/gallery3.jpg"
                  alt="Sizzler BBQ Catering buffet tables"
                />
              </div>
              <div id="item4" className="carousel-item w-full">
                <StaticImage
                  className="w-full"
                  src="../images/gallery4.jpg"
                  alt="Sizzler BBQ Catering pig roast"
                />
              </div>
              <div id="item5" className="carousel-item w-full">
                <StaticImage
                  className="w-full"
                  src="../images/gallery5.jpg"
                  alt="Sizzler BBQ Catering - Bruce in action"
                />
              </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#item1" className="btn btn-xs">
                1
              </a>
              <a href="#item2" className="btn btn-xs">
                2
              </a>
              <a href="#item3" className="btn btn-xs">
                3
              </a>
              <a href="#item4" className="btn btn-xs">
                4
              </a>
              <a href="#item5" className="btn btn-xs">
                5
              </a>
            </div>
            </div>
            
            {/* review slider */}
            <div className="flex flex-row justify-center pt-12 p-6 bg-base-200">
            <ReviewCarousel />
            </div>

          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
