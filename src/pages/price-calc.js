import React, { useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useState } from "react"

const PriceCalc = () => {
    
  const [groupSize, setGroupSize] = useState(0)
  const [setupFee, setSetupFee] = useState(0)

  const [price, setPrice] = useState(0)
  const [steak, setSteak] = React.useState(0)
  const [chicken, setChicken] = React.useState(0)
  const [chickenPork, setChickenPork] = React.useState(0)
  const [pigRoast, setPigRoast] = React.useState(0)
 

  const handleGroupSize = e => {
    setGroupSize(e.target.value)
  }

  const handleSteak = e => {
    setSteak((e.target.value * 16.45).toFixed(2))
  }
  const handleChicken = e => {
    setChicken((e.target.value * 17.75).toFixed(2))
  }
  const handleChickenPork = e => {
    setChickenPork((e.target.value * 17).toFixed(2))
  }
  const handlePigRoast = e => {
    e.target.value > 0
      ? e.target.value < 75
        ? setPigRoast(75 * 28.45)
        : setPigRoast((e.target.value * 28.45).toFixed(2))
      : setPigRoast(0)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const text = getFormDetailsText()
    //navigate to google form link
    window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSe37aFLsm40IE2BC-DbHM6lFzSPXmU_2r2qFYyovJxMlqWSfA/viewform?usp=pp_url&entry.1533313772="+text,
    "_blank"
    )
  }

  const getFormDetailsText = () => {
    let text = `
    Group Size: ${groupSize}, 
    Steak: ${steak},  
    Chicken: ${chicken},  
    Chicken/Pork: ${chickenPork},  
    Pig Roast: ${pigRoast},  
    Setup Fee: ${setupFee},  
    Total: ${price}
      `
    return text
  }



  useEffect(() => {
    setPrice(
      (
        parseFloat(steak) +
        parseFloat(chicken) +
        parseFloat(chickenPork) +
        parseFloat(pigRoast) + 
        parseFloat(setupFee)
      ).toFixed(2)
    )
  }, [steak, chicken, chickenPork, pigRoast, setupFee])

  useEffect(() => {
    setSetupFee(
      (
        groupSize < 100 ? (100 - groupSize) * 6 : 0
      ).toFixed(2)
    )
  }, [groupSize])


  return (
    <Layout>
      <Seo title="Price Calculator" />

      <div className="flex flex-col items-center p-6">
        <h1 className="text-2xl font-bold text-primary">Price Calculator</h1>

      </div>
      <div className="flex flex-col items-left">
        <div className="flex items-center border p-4">
          <label htmlFor="group-size" className="p-2">
            Group Size
          </label>
          <input
            type="number"
            id="group-size"
            className="w-32"
            defaultValue={0}
            onChange={handleGroupSize}
          />
        </div>

        <div className="flex items-center border justify-between">
          <label htmlFor="chickenPork" className="p-2">
            Chicken(60%) / Pork(40%) @ $17
          </label>
          <input
            type="number"
            id="chickenPork"
            className="w-2/12"
            onChange={handleChickenPork}
            defaultValue={0}
          />
          <p className="p-2">${chickenPork}</p>
        </div>

        <div className="flex items-center border w-full justify-between">
          <label htmlFor="steak" className="p-2">
            Boneless Pork Steak @ $16.45
          </label>
          <input
            type="number"
            id="steak"
            className="w-2/12"
            onChange={handleSteak}
            defaultValue={0}
          />
          <p className="p-2">${steak}</p>
        </div>

        <div className="flex items-center border justify-between">
          <label htmlFor="chicken" className="p-2">
            Chicken Breast (6 oz, boneless) @ $17.75
          </label>
          <input
            type="number"
            id="chicken"
            className="w-2/12"
            onChange={handleChicken}
            defaultValue={0}
          />
          <p className="p-2">${chicken}</p>
        </div>

        <div className="flex items-center pt-2 border justify-between">
          <div>
            <label htmlFor="pig-roast" className="p-2">
              Pork Buffet (whole succulent roast pig) @ $28.45
            </label>
            <br />
            <p className="p-2">
              Includes two desserts. based on minimum 75 person group
            </p>
          </div>
          <input
            type="number"
            id="pig-roast"
            className="w-2/12"
            onChange={handlePigRoast}
            defaultValue={0}
          />
          <p className="p-2">${pigRoast}</p>
        </div>

        {groupSize > 0 && groupSize < 100 ? (
          <>
          <div className="flex items-center justify-between p-2 ">
            <p>Set Up Charge:</p> <p>${setupFee}</p>
          </div>
          <p className="text-xs p-2">Applies to groups under 100</p>
          </>
          
        ) : null}

        <div className="flex items-center border justify-between">
          <label htmlFor="totalCost" className="p-2">
            Total Cost
          </label>
          <p className="p-2">${price}</p>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Continue to Service Outline Form</button>
      </div>
    </Layout>
  )
}

export default PriceCalc
