import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"

const footer = () => {
  return (
    <footer className="text-center text-primary p-4 bg-white w-screen">
      <div className="container w-screen">
        <div className="flex flex-col items-center justify-center w-screen">

          <div className="flex flex-row p-6">
            <a
              href="https://www.facebook.com/sizzlerbbqcatering/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{ height: `35px` }}
                className="px-6 text-primary"
              />
            </a>
            <a
              href="https://www.instagram.com/sizzlerbbqcatering/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ height: `35px` }}
                className="px-6 text-primary"
              />
            </a>
          </div>

          <div className="flex flex-col p-4 ">
            <a href="tel:1-800-805-2227" className="text-primary p-2">
              1-800-805-2227
            </a>
            <a href="mailto:sizzler@eastlink.ca" className="text-primary pb-8">
              sizzler@eastlink.ca
            </a>
            © {new Date().getFullYear()} Sizzler BBQ Catering, All Rights
            Reserved
            <p className="text-xs p-4 font-mono text-black">
              site by{" "}
              <a
                href="https://acbconsulting.tech"
                target="_blank"
                rel="noreferrer"
                className="text-black underline"
              >
                ACB Consulting
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
