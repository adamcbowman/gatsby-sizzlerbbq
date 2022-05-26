import React, { useEffect } from "react"
import MapboxAutocomplete from "react-mapbox-autocomplete"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useState } from "react"
import { Link } from "gatsby"

const MenuForm = () => {
  const [groupSize, setGroupSize] = useState(0)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)

  const [setupFee, setSetupFee] = useState(0)

  const [price, setPrice] = useState(0)

  const [porkSteak, setPorkSteak] = React.useState(0)
  const [porkSteakQty, setPorkSteakQty] = React.useState(0)
  const [chicken, setChicken] = React.useState(0)
  const [chickenQty, setChickenQty] = React.useState(0)
  const [chickenPork, setChickenPork] = React.useState(0)
  const [chickenPorkQty, setChickenPorkQty] = React.useState(0)
  const [pigRoast, setPigRoast] = React.useState(0)
  const [pigRoastQty, setPigRoastQty] = React.useState(0)
  const [steak, setSteak] = React.useState(0)
  const [steakQty, setSteakQty] = React.useState(0)
  const [salmon, setSalmon] = React.useState(0)
  const [salmonQty, setSalmonQty] = React.useState(0)
  const [vegKabob, setVegKabob] = React.useState(0)
  const [vegKabobQty, setVegKabobQty] = React.useState(0)
  const [lobster, setLobster] = React.useState(0)
  const [lobsterQty, setLobsterQty] = React.useState(0)
  const [roastBeef, setRoastBeef] = React.useState(0)
  const [roastBeefQty, setRoastBeefQty] = React.useState(0)

  const [desertCharge, setDesertCharge] = React.useState(0)
  const [desert, setDesert] = React.useState("")
  const [coffeeCharge, setCoffeeCharge] = React.useState(0)
  const [flatwareCharge, setFlatwareCharge] = React.useState(0)
  const [flatware, setFlatware] = React.useState("")

  const [address, setAddress] = useState("")
  const [province, setProvince] = useState("")
  const [latLong, setLatLong] = useState([])
  const [travelFee, setTravelFee] = useState(0)

  const handleGroupSize = e => {
    setGroupSize(e.target.value)
  }
  const handleChildren = e => {
    setChildren(e.target.value)
  }
  const handleInfants = e => {
    setInfants(e.target.value)
  }

  const handlePorkSteak = e => {
    setPorkSteak((e.target.value * 16.45).toFixed(2))
    setPorkSteakQty(e.target.value)
  }
  const handleChicken = e => {
    setChicken((e.target.value * 17.75).toFixed(2))
    setChickenQty(e.target.value)
  }
  const handleChickenPork = e => {
    setChickenPork((e.target.value * 17).toFixed(2))
    setChickenPorkQty(e.target.value)
  }
  const handlePigRoast = e => {
    e.target.value > 0
      ? e.target.value < 75
        ? setPigRoast(75 * 28.45)
        : setPigRoast((e.target.value * 28.45).toFixed(2))
      : setPigRoast(0)
    setPigRoastQty(e.target.value)

    setDesert("Both")
    setDesertCharge(0)
  }
  const handleSteak = e => {
    setSteakQty(parseInt(e.target.value))
    setSteak((e.target.value * 23.95).toFixed(2))
  }
  const handleSteakMushrooms = e => {
    e.target.checked
      ? setSteak((parseInt(steak) + steakQty * 3.25).toFixed(2))
      : setSteak((parseInt(steak) - steakQty * 3.25).toFixed(2))
  }
  const handleSteakOnions = e => {
    e.target.checked
      ? setSteak((parseInt(steak) + steakQty * 1.75).toFixed(2))
      : setSteak((parseInt(steak) - steakQty * 1.75).toFixed(2))
  }
  const handleSalmon = e => {
    setSalmon((e.target.value * 23.45).toFixed(2))
    setSalmonQty(e.target.value)
  }
  const handleVegKabob = e => {
    setVegKabob((e.target.value * 16.45).toFixed(2))
    setVegKabobQty(e.target.value)
  }
  const handleLobster = e => {
    setLobster((e.target.value * 16.45).toFixed(2))
    setLobsterQty(e.target.value)
  }
  const handleRoastBeef = e => {
    setRoastBeef((e.target.value * 19.75).toFixed(2))
    setRoastBeefQty(e.target.value)

    setDesert("Both")
    setDesertCharge(0)
  }
  const handleRoastBeefMushrooms = e => {
    e.target.checked
      ? setRoastBeef((parseInt(roastBeef) + roastBeefQty * 3.25).toFixed(2))
      : setRoastBeef((parseInt(roastBeef) - roastBeefQty * 3.25).toFixed(2))
  }
  const handleRoastBeefOnions = e => {
    e.target.checked
      ? setRoastBeef((parseInt(roastBeef) + roastBeefQty * 1.75).toFixed(2))
      : setRoastBeef((parseInt(roastBeef) - roastBeefQty * 1.75).toFixed(2))
  }

  const handleDesert = e => {
    e.target.value === "Both" 
      ? setDesertCharge(groupSize * 0.75)
      : setDesertCharge(0)

    setDesert(e.target.value)
  }
  const handleCoffee = e => {
    e.target.value === "Coffee"
      ? setCoffeeCharge((groupSize * 0.5).toFixed(2))
      : setCoffeeCharge(0)
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

    let menu = 
    `
    Steak: ${steakQty} @$${steak},
    Chicken: ${chickenQty} @$${chicken}, 
    Salmon: ${salmonQty} @$${salmon},
    Tofu Veg Kabob: ${vegKabobQty} @$${vegKabob}, 
    Lobster: ${lobsterQty} @$${lobster},
    Chicken/Pork: ${chickenPorkQty} @$${chickenPork},  
    Roast Beef: ${roastBeefQty} @$${roastBeef},
    Pig Roast: ${pigRoastQty} @$${pigRoast}, 
    Desert: ${desert} @$${desertCharge},
    Coffee: $${coffeeCharge},
    Flatware: ${flatware} @$${flatwareCharge}
    Setup Fee: $${setupFee},  
    Travel Fee: $${travelFee},
    Total: $${price}
      `
    return menu
  }

  const handleLocation = async e => {
    setAddress(e)
  }

  //get address/travel time from api
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYWRhbWNib3dtYW4iLCJhIjoiY2s3YWZndHJjMHY3bzNkbXlsY2oxdm0zbyJ9.NU4o56BdtvFhpVXVRCmn5g`
    )
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        let region = data.features[0]
          ? data.features[0].context.find(obj => obj.id.includes("region"))
          : null
        setProvince(region.text)
        setLatLong(data.features[0].center)
      })
      .catch(err => console.log(err))

    // set travel fee to 0 for Prince Edward Island
    if (province === "Prince Edward Island") {
      setTravelFee(0)
    }

    //if Province is New Brunswick, get travel time from address to Moncton
    // Moncton [-64.80011,46.097995]
    else if (province === "New Brunswick") {
      fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${latLong[0]},${latLong[1]};-64.80011,46.097995?access_token=pk.eyJ1IjoiYWRhbWNib3dtYW4iLCJhIjoiY2s3YWZndHJjMHY3bzNkbXlsY2oxdm0zbyJ9.NU4o56BdtvFhpVXVRCmn5g`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setTravelFee(
            Math.round((data.routes[0].duration / 60 / 60) * 2 * 50).toFixed(2)
          )
        })
        .catch(err => console.log(err))
    }

    //if province is Nova Scotia, get travel time from address to Truro
    // truro latlong [-63.300006,45.366668]
    else if (province === "Nova Scotia") {
      fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${latLong[0]},${latLong[1]};-63.300006,45.366668?access_token=pk.eyJ1IjoiYWRhbWNib3dtYW4iLCJhIjoiY2s3YWZndHJjMHY3bzNkbXlsY2oxdm0zbyJ9.NU4o56BdtvFhpVXVRCmn5g`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setTravelFee(
            Math.round((data.routes[0].duration / 60 / 60) * 2 * 50).toFixed(2)
          )
        })
        .catch(err => console.log(err))
    }

    // else set travel fee to 0
    else {
      setTravelFee(0)
    }
  }, [address, province, latLong])

  useEffect(() => {
    setPrice(
      (
        children * 9.95 +
        infants * 1 +
        parseFloat(porkSteak) +
        parseFloat(steak) +
        parseFloat(chicken) +
        parseFloat(chickenPork) +
        parseFloat(pigRoast) +
        parseFloat(salmon) +
        parseFloat(vegKabob) +
        parseFloat(lobster) +
        parseFloat(roastBeef) +
        parseFloat(desertCharge) +
        parseFloat(coffeeCharge) +
        parseFloat(flatwareCharge) +
        parseFloat(travelFee) +
        (groupSize && groupSize > 0 ? parseFloat(setupFee) : 0)
      ).toFixed(2)
    )
  }, [
    children,
    infants,
    porkSteak,
    steak,
    chicken,
    chickenPork,
    salmon,
    vegKabob,
    lobster,
    roastBeef,
    pigRoast,
    setupFee,
    desertCharge,
    coffeeCharge,
    flatwareCharge,
    groupSize,
    travelFee,
    setupFee,
  ])

  useEffect(() => {
    setSetupFee((groupSize < 100 ? (100 - groupSize) * 6 : 0).toFixed(2))
  }, [groupSize])

  return (
    <Layout>
      <Seo title="Sizzler BBQ Catering Menu Selection Form" />

      <div className="flex flex-col items-center p-6">
        <h1 className="text-2xl font-bold text-primary">Menu Selection Form</h1>
      </div>

      <div className=" text-center pt-2">
          <a href="tel:1-800-805-2227">
            <FontAwesomeIcon icon={faPhone} />
            {"  "}
            Call for free Consultation
          </a>
        </div>

      <div className="flex flex-col items-left">
        {/* group size */}
        <p className="p-2 pt-4 text-xs">
          Select the total number of guests in your group.
        </p>
        <div className="flex flex-col w-full md:flex-row items-center justify-items-center border">
          <label htmlFor="group-size" className="p-2  label">
            Group Size - Adults
          </label>
          <input
            type="number"
            id="group-size"
            className="p-2 input input-bordered input-primary"
            defaultValue={0}
            onChange={handleGroupSize}
          />

          <label htmlFor="children" className="p-2  label">
            Children (0-17)
          </label>
          <input
            type="number"
            id="children"
            className="p-2 input input-bordered input-primary"
            defaultValue={0}
            onChange={handleChildren}
          />
          <label htmlFor="infants" className="p-2 label">
            Infants (0-2)
          </label>
          <input
            type="number"
            id="infants"
            className="p-2 input input-bordered input-primary"
            defaultValue={0}
            onChange={handleInfants}
          />
        </div>

        <p className="p-2 text-xs">
          Select the number of servings for each menu choice below. Buffet
          included with all menu options. <Link to="/menu">See menu</Link> for
          details
        </p>

        {/* chicken/pork */}
        <div className="flex flex-col md:flex-row items-center border justify-between">
          <div className="w-full md:w-1/3">
            <label htmlFor="chickenPork" className="p-2 label">
              Chicken(60%) / Pork(40%) @ $17
            </label>
            <p className="px-2 pt-2 text-xs font-semibold">
              Most popular menu choice.
            </p>
            <p className="p-2 text-xs">
              A combination of our 2 most popular items, Chicken Breast & Pork
              Steak!
            </p>
          </div>
          <input
            type="number"
            id="chickenPork"
            className="px-2 input input-bordered input-primary"
            onChange={handleChickenPork}
            defaultValue={0}
          />
          <p className="p-2">${chickenPork}</p>
        </div>

        {/* pork steak */}
        <div className="flex flex-col md:flex-row items-center border justify-between">
          <div className="w-full md:w-1/3">
            <label htmlFor="porkSteak" className="p-2 label">
              Boneless Pork Steak @ $16.45
            </label>
          </div>
          <input
            type="number"
            id="porkSteak"
            className="p-2 input input-bordered input-primary "
            onChange={handlePorkSteak}
            defaultValue={0}
          />
          <p className="p-2">${porkSteak}</p>
        </div>

        {/* chicken */}
        <div className="flex flex-col md:flex-row items-center border justify-between">
          <div className="w-full md:w-1/3">
            <label htmlFor="chicken" className="p-2 label">
              Chicken @ $17.75
            </label>
            <p className="p-2 text-xs">6oz Boneless Chicken Breast</p>
          </div>
          <input
            type="number"
            id="chicken"
            className="p-2 input input-bordered input-primary"
            onChange={handleChicken}
            defaultValue={0}
          />
          <p className="p-2">${chicken}</p>
        </div>

        {/* steak */}
        <div className="flex flex-col md:flex-row items-center border justify-between">
          <div className="w-full md:w-1/3">
            <label htmlFor="steak" className="p-2 label">
              Steak@ $23.95
            </label>
            <p className="p-2 text-xs">10oz Strip Loin Steak </p>
            <div className="flex px-2">
              <input
                type="checkbox"
                id="steak-mushrooms"
                onChange={handleSteakMushrooms}
              />
              <label htmlFor="steak-mushrooms" className="p-2 label text-xs">
                Add mushrooms @ $3.25
              </label>
            </div>
            <div className="flex px-2">
              <input
                type="checkbox"
                id="steak-onions"
                onChange={handleSteakOnions}
              />
              <label htmlFor="steak-onions" className="p-2 label text-xs">
                Add onions @ $1.75
              </label>
            </div>
          </div>
          <input
            type="number"
            id="steak"
            className="p-2 input input-bordered input-primary"
            onChange={handleSteak}
            defaultValue={0}
          />
          <p className="p-2">${steak}</p>
        </div>

        {/* Salmon */}
        <div className="flex flex-col md:flex-row items-center border justify-between">
          <div className="w-full md:w-1/3">
            <label htmlFor="salmon" className="p-2 label">
              Salmon @ $23.45
            </label>
            <p className="p-2 text-xs"></p>
          </div>
          <input
            type="number"
            id="salmon"
            className="p-2 input input-bordered input-primary"
            onChange={handleSalmon}
            defaultValue={0}
          />
          <p className="p-2">${salmon}</p>
        </div>

        {/* Tofu Veggie Kabob  */}
        <div className="flex flex-col md:flex-row items-center border justify-between">
          <div className="w-full md:w-1/3">
            <label htmlFor="vegKabob" className="p-2 label">
              Tofu Veggie Kabob @ $16.45
            </label>
            <p className="p-2 text-xs">Available without tofu on request. </p>
          </div>
          <input
            type="number"
            id="vegKabob"
            className="p-2 input input-bordered input-primary"
            onChange={handleVegKabob}
            defaultValue={0}
          />
          <p className="p-2">${vegKabob}</p>
        </div>

        {/* Lobster  */}

        <div className="flex flex-col md:flex-row items-center border justify-between">
          <div className="w-full md:w-1/3">
            <label htmlFor="lobster" className="p-2 label">
              Lobster @ $16.45
            </label>
            <p className="p-2 text-xs">
              {" "}
              + Lobster cost (you set the size and quantity){" "}
            </p>
          </div>
          <input
            type="number"
            id="lobster"
            className="p-2 input input-bordered input-primary"
            onChange={handleLobster}
            defaultValue={0}
          />
          <p className="p-2">${lobster}</p>
        </div>

        {/* pig roast */}
        <div className="flex flex-col md:flex-row items-center border justify-between">
          <div className="w-full md:w-1/3">
            <label htmlFor="pig-roast" className="p-2 label">
              Pork Buffet (whole succulent roast pig) @ $28.45
            </label>
            <br />
            <p className="p-2 text-xs">
              Price based on min 75 person group. Includes both desserts.
            </p>
          </div>
          <input
            type="number"
            id="pig-roast"
            className="p-2 input input-bordered input-primary"
            onChange={handlePigRoast}
            defaultValue={0}
          />
          <p className="p-2">${pigRoast}</p>
        </div>

        {/* Unlimited Hip of Beef  */}
        <div className="flex flex-col md:flex-row items-center border justify-between">
          <div className="w-full md:w-1/3">
            <label htmlFor="roastBeef" className="p-2 label">
              Unlimited Hip of Beef @ $19.75
            </label>
            <br />
            <p className="p-2 text-xs">Includes both desserts</p>
            <div className="flex px-2">
              <input
                type="checkbox"
                id="roastbeef-mushrooms"
                onChange={handleRoastBeefMushrooms}
              />
              <label
                htmlFor="roastbeef-mushrooms"
                className="p-2 label text-xs"
              >
                Add mushrooms @ $3.25
              </label>
            </div>
            <div className="flex px-2">
              <input
                type="checkbox"
                id="roastbeef-onions"
                onChange={handleRoastBeefOnions}
              />
              <label
                htmlFor="roastbeef-mushrooms"
                className="p-2 label text-xs"
              >
                Add onions @ $1.75
              </label>
            </div>
          </div>
          <input
            type="number"
            id="roastBeef"
            className="p-2 input input-bordered input-primary"
            onChange={handleRoastBeef}
            defaultValue={0}
          />
          <p className="p-2">${roastBeef}</p>
        </div>

        {/* desert */}
        <div className="flex flex-col md:flex-row items-center border justify-between">
          <div className="w-full md:w-1/3">
            <label htmlFor="desert" className="p-2 label">
              Deserts
            </label>
            <p className="text-xs p-2 w-full">
              Buffet includes choice of 1 desert at no additional charge. Both
              deserts available for $0.75/person.
            </p>
          </div>
          <select
            type="select"
            id="desert"
            className="p-2 input input-bordered input-primary"
            defaultValue="Carrot Cake"
            onChange={handleDesert}
          >
            {/* TODO - setting both for pigroast/beef not working */}
            <option value="">Select</option>
            <option value="Carrot Cake">Carrot Cake</option>
            <option value="Apple Crisp">Apple Crisp</option>
            <option value="Both">Both (+$0.75/person)</option>
          </select>
          <p className="p-2">${desertCharge}</p>
        </div>
        {/* coffee */}
        <div className="flex flex-col md:flex-row items-center border justify-between">
          <div className="w-full md:w-1/3">
            <label htmlFor="coffee" className="p-2 label">
              Coffee/Tea
            </label>
            <p className="text-xs p-2 w-full">
              power required - electrical outlets must be 15 amp for each
              coffee/tea unit
            </p>
          </div>
          <select
            type="select"
            id="coffee"
            className="p-2 input input-bordered input-primary"
            onChange={handleCoffee}
          >
            <option value="">Select</option>
            <option value="Coffee">Coffee/Tea (+$0.50/person)</option>
            <option value="No">No</option>
          </select>
          <p className="p-2">${coffeeCharge}</p>
        </div>

        {/* flatware */}
        <div className="">
          <div className="flex flex-col md:flex-row items-center border justify-between">
            <div className="w-full md:w-1/3">
              <label htmlFor="flatware" className="p-2 label">
                Flatware
              </label>
            </div>
            <select
              type="select"
              id="flatware"
              className="p-2 input input-bordered input-primary w-full"
              defaultValue="Royal"
              onChange={handleFlatware}
            >
              <option value="">Select</option>
              <option value="Royal">RoyalChinette - disposable</option>
              <option value="Rental">
                {" "}
                Flatware Rental (+ $1.75/person & 15% clearing charge)
              </option>
              <option value="Upgrade">
                {" "}
                Dispoable Flatware Upgrade (+ $3/person)
              </option>
            </select>
            <p className="p-2">${flatwareCharge}</p>
          </div>
          <p className="text-xs">
            <ul>
              <li>
                RoyalChinette - included in price - Plate, Fork, Knife, Spoon -
                disposable{" "}
              </li>
              <li>
                Flatware Rental - Stoneware and silverware - Plate, Fork, Knife,
                Spoon, $1.75 per person plus 15% clearing charge{" "}
              </li>
              <li>
                Disposable Flatware upgrade - real lookbut disposable - PLATE,
                FORK, KNIFE, SPOON - $3 per person. No clearning charge
              </li>
            </ul>
          </p>
        </div>

        {/* setup fee */}
        {groupSize > 0 && groupSize < 100 ? (
          <>
            {/* <div className="flex items-center justify-between p-2 "> */}
            <div className="py-2 flex flex-col md:flex-row md:items-center border justify-between">
              <p>Set Up Charge:</p> <p>${setupFee}</p>
            </div>
            <p className="text-xs p-2">Applies to groups under 100</p>
          </>
        ) : null}

        {/* location */}
        <div className="items-center justify-between border">
          <div className="flex flex-col md:flex-row items-center border justify-between">
            <div className="md:w-1/3">
              <label htmlFor="location" className="label p-2">
                Event Location (address)
              </label>
            </div>
            <div className=" w-full md:w-2/3 py-2">
              <MapboxAutocomplete
                publicKey="pk.eyJ1IjoiYWRhbWNib3dtYW4iLCJhIjoiY2wzaXFnZ2ZpMDZpNjNpbzhibzc2ZDE1NyJ9.w8mpu3OmuE-Vl2koZ_-OWg"
                inputClass="form-control input input-bordered input-primary w-full mt-3"
                onSuggestionSelect={handleLocation}
                country="ca"
                placeholder="Enter Event Location Address"
                resetSearch={false}
              />
            </div>
            <p className="p-2">${travelFee}</p>
          </div>
          <p className="text-xs">
            Travel cost may apply. Travel cost from Moncton, NB or Turo, N.S. =
            hours x 2 x $50.00 <br />
          </p>
        </div>
        {/* total */}
        <div className="mt-8 mb-4 flex items-center border justify-between">
          <label htmlFor="totalCost" className="p-2 text-xl">
            Total Cost
          </label>
          <p className="p-2 text-xl">${price}</p>
        </div>
        <div className="flex justify-center">
          <p className="text-xs">
            Total Cost price displayed represents an initial estimate only based on the provided details. Final price will be
            calculated based on any additional requirements, and will be confirmed prior to request for payment after booking is finalized.
            Any additional menu requests can be noted in the Service Request Form. 
            Form.<br />
            See <Link to="/menu">Menu page</Link> for additional menu options that may be available. <br />
          </p>
        </div>
        <button
          type="button"
          className="btn btn-md btn-primary"
          onClick={handleSubmit}
        >
          Continue to Service Request Form
        </button>
      </div>
    </Layout>
  )
}

export default MenuForm
