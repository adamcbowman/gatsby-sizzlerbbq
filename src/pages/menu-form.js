import React, { useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useState } from "react"

const MenuForm = () => {
    
  const [groupSize, setGroupSize] = useState(0)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  
  const [setupFee, setSetupFee] = useState(0)

  const [price, setPrice] = useState(0)
  const [steak, setSteak] = React.useState(0)
  const [chicken, setChicken] = React.useState(0)
  const [chickenPork, setChickenPork] = React.useState(0)
  const [pigRoast, setPigRoast] = React.useState(0)

  const [desertCharge, setDesertCharge] = React.useState(0)
  const [coffeeCharge, setCoffeeCharge] = React.useState(0)
  const [flatwareCharge, setFlatwareCharge] = React.useState(0)
  const [flatware, setFlatware] = React.useState("")

  const [address, setAddress] = useState("")
 

  const handleGroupSize = e => {
    setGroupSize(e.target.value)
  }
  const handleChildren = e => {
    setChildren(e.target.value)
  }
  const handleInfants = e => {
    setInfants(e.target.value)
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
  const handleDesert = e => {
    e.target.value === "Both" ? setDesertCharge(groupSize*.75) : setDesertCharge(0)
  }
  const handleCoffee = e => {
    e.target.value === "Coffee" ? setCoffeeCharge(groupSize*.5) : setCoffeeCharge(0)
  }

  const handleFlatware = e => {
    setFlatware(e.target.value)
    setFlatwareCharge(0)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const menu = getFormDetailsText()
    //navigate to google form link
    window.open(
      `https://docs.google.com/forms/d/e/1FAIpQLScPbMBQmOkvIY0S96sWENhdbeOjS0FZNWVMmkLoRD-YK4bPjA/viewform?usp=pp_url&entry.1196405965=${address}&entry.1275003710=${groupSize}&entry.1857878523=${children}&entry.845645177=${infants}&entry.1605025492=${menu}`,
      "_blank"
    )
  }

  const getFormDetailsText = () => {
    let menu = `
    Steak: ${steak},  
    Chicken: ${chicken},  
    Chicken/Pork: ${chickenPork},  
    Pig Roast: ${pigRoast},  
    Setup Fee: ${setupFee},  
    Total: ${price}
      `
    return menu
  }

  const handleLocation = e => {
    setAddress(e.target.value)
  }
  
  useEffect(() => {
    setPrice(
      (
        parseFloat(steak) +
        parseFloat(chicken) +
        parseFloat(chickenPork) +
        parseFloat(pigRoast) + 
        parseFloat(desertCharge) +
        parseFloat(coffeeCharge) +
        parseFloat(flatwareCharge) +

        (groupSize && groupSize > 0 ? parseFloat(setupFee) : 0)
      ).toFixed(2)
    )
  }, [steak, chicken, chickenPork, pigRoast, setupFee, desertCharge, coffeeCharge, flatwareCharge, groupSize])

  useEffect(() => {
    setSetupFee(
      (
        groupSize < 100 ? (100 - groupSize) * 6 : 0
      ).toFixed(2)
    )
  }, [groupSize])


  return (
    <Layout>
      <Seo title="Menu Selection Form" />

      <div className="flex flex-col items-center p-6">
        <h1 className="text-2xl font-bold text-primary">Menu Selection Form</h1>

      </div>
      <div className="flex flex-col items-left">
        {/* group siz */}
        <div className="flex justify-between border">
          <label htmlFor="group-size" className="p-2">
            Group Size - Adults
          </label>
          <input
            type="number"
            id="group-size"
            className="w-32"
            defaultValue={0}
            onChange={handleGroupSize}
          /> 
          <label htmlFor="children" className="p-2">Children (0-17)</label>
          <input

            type="number"
            id="children"
            className="w-32"
            defaultValue={0}
            onChange={handleChildren}
          />
          <label htmlFor="infants" className="p-2">Infants (0-2)</label>
          <input
            type="number"
            id="infants"
            className="w-32"
            defaultValue={0}
            onChange={handleInfants}
          />
        </div>
        {/* chicken/pork */}
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
        {/* pork */}
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
        {/* chicken */}
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
        {/* pig roast */}
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
        {/* desert */}
        <div className="flex items-center border justify-between">
          <label htmlFor="desert" className="p-2">
            Deserts
          </label>
          <select
            type="select"
            id="desert"
            className="w-6/12"
            onChange={handleDesert}
          >
            <option value="">Select</option>
            <option value="Carrot Cake">Carrot Cake</option>
            <option value="Apple Crisp">Apple Crisp</option>
            <option value="Both">Both (+$0.75/person)</option>
          </select>
        </div>
        {/* coffee */}
        <div className="flex items-center border justify-between">
          <label htmlFor="coffee" className="p-2">
            Coffee/Tea
          </label>
          <select
            type="select"
            id="coffee"
            className="w-6/12"
            onChange={handleCoffee}
          >
            <option value="">Select</option>
            <option value="Coffee">Coffee/Tea (+$0.50/person)</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* flatware */}
        <div>
        <div className="flex items-center border justify-between">
          <label htmlFor="flatware" className="p-2">
            Flatware
          </label>
          <select
            type="select"
            id="flatware"
            className="w-6/12"
            onChange={handleFlatware}
          >
            <option value="">Select</option>
            <option value="Royal">RoyalChinette - disposable</option>
            <option value="Rental"> Flatware Rental (+ $1.75/person & 15% clearing charge)</option>
            <option value="Upgrade"> Flatware Upgrade (+ $3/person)</option>
          </select>
        </div>
        <p className="text-xs">
          { flatware === 'Royal' ? 'RoyalChinette - included in price - PLATE, FORK, KNIFE, SPOON - disposable' : '' }
          { flatware === 'Rental' ? 'Flatware Rental - Stoneware and silverware - Plate, Fork, Knife, Spoon, $1.75 per setting plus 15% clearing charge' : '' }
          { flatware === 'Upgrade' ? 'Disposable Flatware upgrade - real lookbut disposable - PLATE, FORK, KNIFE, SPOON -  $3/person, no clearning charge' : '' }
        </p>
        </div>

        {/* setup fee */}
        {groupSize > 0 && groupSize < 100 ? (
          <>
          <div className="flex items-center justify-between p-2 ">
            <p>Set Up Charge:</p> <p>${setupFee}</p>
          </div>
          <p className="text-xs p-2">Applies to groups under 100</p>
          </>  
        ) : null}
        {/* location */}
        <div className="flex items-center p-2">
          <label htmlFor="location" className="p-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="w-6/12"
            onChange={handleLocation}
            placeholder="Enter Event Location Address"
          />
        </div>
        {/* total */}
        <div className="flex items-center border justify-between">
          <label htmlFor="totalCost" className="p-2">
            Total Cost
          </label>
          <p className="p-2">${price}</p>
        </div>
        <button type="button" className="btn btn-md btn-primary" onClick={handleSubmit}>Continue to Service Outline Form</button>
      </div>

    </Layout>
  )
}

export default MenuForm
