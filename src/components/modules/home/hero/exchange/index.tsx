"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import Select from "react-select";

import axiosInstance from "@/lib/axiosInstance";
// import { CountrySelect } from "@/components/common/dropdown";



const Exchange = () => {

  const [countries, setCountries] = useState([]);
 
  const [sendCountries, setSendCountries] = useState([]);
  const [receiveCountries, setReceiveCountries] = useState([])

  const handleFetch = async () => {
    try {
      const response = await axiosInstance.get("/sendingReceivingCountryList");
      setSendCountries(response.data.data.transfer.countries.send);
      setReceiveCountries(response.data.data.transfer.countries.receive);
      console.log(response);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };
  return (
    <aside className="exchange-section">
      <header className="exchange-section_header">
        <span>Exchange Rate</span>
        <p>1 CAD ≈ 1,090.21 NGN</p>
      </header>
      <div className="exchange-section_details">
        <div className="exchange-section_details_content">
          <h2>Calculate Rates</h2>
          <div className="exchange_cards">
            <div className="exchange_cards_card">
              <div>
                <span className="label">You Send</span>
                <label>$ <input type="number" /></label>
              </div>
              <CountrySelect  countries={sendCountries}/>
            </div>
            <div className="exchange_cards_card">
              <div>
                <span className="label">Receiver Gets</span>
                <label>$ <input type="number" /></label>
              </div>
              <CountrySelect countries={receiveCountries}/>
            </div>
           
           
            <p className="exchange-section_footer">
              Exchange Rate: 1 GBP = 158.48 Ksh <br />
              Transfer fees: 0.00 GBP
            </p>
          </div>
        </div>
      </div>
    </aside>
  );

};
 const CountrySelect = ({countries}: {countries: any}) => {
  

  const [selectedCountry, setSelectedCountry] = useState({});

  // useEffect(() => {
  //   fetch(
  //     "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.countries);
  //       setCountries(data.countries );
  //       setSelectedCountry(data.userSelectValue);
  //     });
  // }, []);
  return (
    <Select
      options={countries}
      value={selectedCountry}
      onChange={(selectedOption: any) => setSelectedCountry(selectedOption)}
    />
  );
};

export default Exchange;
