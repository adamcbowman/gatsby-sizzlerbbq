import React from "react"
import Layout from "../components/layout"

const serviceForm = () => {
  return (
    <Layout>
      <div className="h-screen">
        <object
          type="text/html"
          data="https://docs.google.com/forms/d/e/1FAIpQLScPbMBQmOkvIY0S96sWENhdbeOjS0FZNWVMmkLoRD-YK4bPjA/viewform?embedded=true"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </Layout>
  )
}

export default serviceForm
