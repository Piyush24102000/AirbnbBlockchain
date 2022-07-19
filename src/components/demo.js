import React from "react";
import "./Rentals.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../images/airbnbRed.png";
import { Button, ConnectButton, Icon } from "web3uikit";
import RentalsMap from "../components/RentalsMap";

const Rentals = () => {

  const { state: searchFilters } = useLocation();
  const rentalsList = [
    {
      attributes: {
        city: "New York",
        unoDescription: "3 Guests • 2 Beds • 2 Rooms",
        dosDescription: "Wifi • Kitchen • Living Area",
        imgUrl:
          "https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/3",
        lat: "40.716862",
        long: "-73.999005",
        name: "Apartment in Times Square",
        pricePerDay: "3",
      },
    },
  ];
let cords = []; //array
rentalsList.forEach((e) => {
  cords.push({lat:e.attributes.lat,lng: e.attributes.long});
});

  return (
    <>
      <div className="topBanner">
        <div>
          <Link to="/">
            <img className="logo" src={logo}></img>
          </Link>
        </div>

        <div className="searchReminder">
          <div className="filter">
            {searchFilters.destination}
          </div>

          <div className="vl" />
          <div className="filter">{`
            ${searchFilters.checkIn.toLocaleString("default", { month: "short" })}
            ${searchFilters.checkIn.toLocaleString("default", { month: "2-digit" })}
            -
            ${searchFilters.checkIn.toLocaleString("default", { month: "short" })}
            ${searchFilters.checkIn.toLocaleString("default", { month: "2-digit" })}

          `}
          </div>

          <div className="vl" />
          <div className="filter">
            {searchFilters.guests} Guest
          </div>

          <div className="searchFiltersIcon">
            <Icon fill="#ffffff" size={20} svg="search" />
          </div>
        </div>
        <div className="lrContainers">
          <ConnectButton /> {/*This is used for wallet*/}
        </div>
      </div>

      <hr className="line" ></hr>
      <div className="rentalsContent">
        <div className="rentalsConentL">
          Stays available for your destination
          {rentalsList.map((e,i) => {
            return (
              <>
                <hr className="line2" />
                <div className="rentalDiv">
                  <img className="rentalImg" src={e.attributes.imgUrl}></img>
                  <div className="rentalInfo">
                    <div className="rentalTitle">{e.attributes.name}</div>
                    <div className="rentalDesc">
                      {e.attributes.unoDescription}
                    </div>
                    <div className="rentalDesc">
                      {e.attributes.dosDescription}
                    </div>
                    <div className="bottomButton">
                      <Button text="Stay Here"/>
                      <div className="price">
                        <Icon fill="#808080" size={10} svg="matic" /> {e.attributes.pricePerDay} / Day
                      </div>
                    </div>
                    
                </div>
                </div>
              
              </>
            )
          })}
        </div>
        <div className="rentalsContentR">
          <RentalsMap locations = {cords}/>
        </div>
      </div>
    </>
  );
};

export default Rentals;
