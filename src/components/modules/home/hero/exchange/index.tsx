
"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import Select from "react-select";

import axiosInstance from "@/lib/axiosInstance";
// import { CountrySelect } from "@/components/common/dropdown";

const customOption = (props: { innerRef: any; innerProps: any; data: any; }) => {
  const { innerRef, innerProps, data } = props;
  return (
    <div ref={innerRef} {...innerProps} style={{ display: 'flex', alignItems: 'center',  }}>
      <img src={data.country_flag} alt={data.country_name} style={{ width: 20, height: 20, marginRight: 10 }} />
      <span>{data.country_name}</span>
      <span style={{ marginLeft: 10 }}>({data.currency_code})</span>
    </div>
  );
};

const customSingleValue = (props: { data: any; }) => {
  const { data } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <img src={data.country_flag} alt={data.country_name} style={{ width: 20, height: 20, marginRight: 10 }} />
      <span>{data.country_name}</span>
      <span style={{ marginLeft: 10 }}>({data.currency_code})</span>
    </div>
  );
};

const Exchange = () => {

  const [countries, setCountries] = useState([]);
 
  const [sendCountries, setSendCountries] = useState([]);
  const [receiveCountries, setReceiveCountries] = useState([])
  const [selectedSendCountry, setSelectedSendCountry] = useState<any>();
  const [selectedReceiveCountry, setSelectedReceiveCountry] = useState<any>();
  const [inputValue, setInputValue] = useState<any>(1); // <--- State added
  const [result, setResult] = useState(0); // <--- State added
  const [receiveAmount, setReceiveAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [sendAmount, setSendAmount] = useState(0);


  const handleFetch = async () => {
    try {
      const response = await axiosInstance.get("/sendingReceivingCountryList");
      setSendCountries(response.data.data.transfer.countries.send);
      setReceiveCountries(response.data.data.transfer.countries.receive);
      console.log(response.data.data.transfer.countries.send);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };

  const exchangeRate = () => {
    console.log('selectedSendCountry',selectedSendCountry)
    console.log('selectedReceiveCountry',selectedReceiveCountry)
    console.log('inputValue',inputValue)

    if (selectedSendCountry && selectedReceiveCountry && inputValue){
      const rate = selectedSendCountry.exchange.find(
        (ex: { currency: any; }) => ex.currency === selectedReceiveCountry.currency_code
      )?.rate;
      setRate(rate || 0);
      setReceiveAmount(inputValue * (rate || 0));
      console.log(inputValue * (rate || 0))
    }
  }

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => { // <--- Input change handler
    setInputValue(e.target.value); // <--- Update input value state
  };




  useEffect(() => {
    handleFetch();
    exchangeRate(),
    console.log(receiveAmount)
  }, [sendCountries,selectedSendCountry,receiveCountries,selectedReceiveCountry]);
  
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
                <label> <input type="number" value={inputValue} onChange={handleInputChange} /></label>
              </div>
              <CountrySelect 
                countries={sendCountries}
                selectedCountry={selectedSendCountry}
                setSelectedCountry={setSelectedSendCountry}
              />
            </div>
            <div className="exchange_cards_card">
              <div>
                <span className="label">Receiver Gets</span>
                <label> <input type="number" value={receiveAmount}/></label>
              </div>
              <CountrySelect 
                countries={receiveCountries}
                selectedCountry={selectedReceiveCountry}
                setSelectedCountry={setSelectedReceiveCountry}
              />
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
//  const CountrySelect = ({countries}: {countries: any}) => {
  

//   const [selectedCountry, setSelectedCountry] = useState({});
//   return (
//     <Select
//       options={countries}
//       value={selectedCountry}
//       onChange={(selectedOption: any) => setSelectedCountry(selectedOption)}
//       getOptionLabel={(option) => `${option.country_flag} ${option.country_name} (${option.currency_code})`}
//       components={{ Option: customOption, SingleValue: customSingleValue }}
//     />
//   );
// };

const CountrySelect = ({ countries, selectedCountry, setSelectedCountry }: { countries: any, selectedCountry: any, setSelectedCountry: any }) => {
  return (
    <Select
    classNamePrefix='filter'
      options={countries}
      value={selectedCountry}
      onChange={(selectedOption: any) => setSelectedCountry(selectedOption)}
      getOptionLabel={(option) => `${option.country_name} (${option.currency_code})`}
      components={{ Option: customOption, SingleValue: customSingleValue }}
    />
  );
};



export default Exchange;
