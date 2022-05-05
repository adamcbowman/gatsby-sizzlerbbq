import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
// import Slider from "react-slick/lib/slider";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="flex flex-col items-center justify-center h-3/4 text-justify">
      {/* <p className="p-6 text-gray-900">
        Mobile Catering is our business. We service all of Atlantic Canada,
        providing delicious meals for small or large groups. Our business is
        built on dependability and quality. We have been serving Atlantic
        Canadians since 1980. For all your indoor or outdoor functions, depend
        on <em className="text-primary">Sizzler BBQ Catering.</em>
      </p> */}

      <div className="hero min-h-3/4 bg-base-200">
        <div className="hero-content text-center flex flex-row items-center">
          <div className="max-w-lg">
            <p className="py-6 text-left">Mobile Catering is <em>our business</em>. We service all of Atlantic Canada,
        providing delicious meals for small or large groups. Our business is
        built on dependability and quality. We have been serving Atlantic
        Canadians since 1980. For all your indoor or outdoor functions, depend
        on <em className="text-primary">Sizzler BBQ Catering.</em>.</p>
            <Link to="/menu-form"><button className="btn btn-primary">Book your BBQ</button></Link>

            <div className="carousel w-full rounded-lg py-6">
              <div id="item1" className="carousel-item w-full">
                <img
                  src="https://www.sizzlerbbq.com/gallery/gallery1.jpg"
                  className="w-full"
                />
              </div>
              <div id="item2" className="carousel-item w-full">
                <img
                  src="https://www.sizzlerbbq.com/gallery/gallery2.jpg"
                  className="w-full"
                />
              </div>
              <div id="item3" className="carousel-item w-full">
                <img
                  src="https://www.sizzlerbbq.com/gallery/gallery3.jpg"
                  className="w-full"
                />
              </div>
              <div id="item4" className="carousel-item w-full">
                <img
                  src="https://www.sizzlerbbq.com/gallery/gallery4.jpg"
                  className="w-full"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
