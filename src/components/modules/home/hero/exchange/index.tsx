"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Select from "react-select";
import axiosInstance from "@/lib/axiosInstance";

const customOption = (props: { innerRef: any; innerProps: any; data: any; }) => {
  const { innerRef, innerProps, data } = props;
  return (
    <div ref={innerRef} {...innerProps} style={{ display: 'flex', alignItems: 'center', }}>
      <img src={data.country_flag} alt={data.country_name} style={{ width: 20, height: 20, marginRight: 10 }} />
      <span>{data.country_name}</span>
      <span style={{ marginLeft: 10 }}>({data.currency_code})</span>
    </div>
  );
};

const customSingleValue = (props: { data: any; }) => {
  const { data } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={data.country_flag} alt={data.country_name} style={{ width: 20, height: 20, marginRight: 10 }} />
      <span>({data.currency_code})</span>
    </div>
  );
};

const Exchange = () => {
  const [sendCountries, setSendCountries] = useState([]);
  const [receiveCountries, setReceiveCountries] = useState([]);
  const [selectedSendCountry, setSelectedSendCountry] = useState<any>();
  const [selectedReceiveCountry, setSelectedReceiveCountry] = useState<any>();
  const [inputSendValue, setInputSendValue] = useState<any>(1);
  const [inputReceiveValue, setInputReceiveValue] = useState<any>(0);
  const [rate, setRate] = useState(0);

  const handleFetch = async () => {
    try {
      const response = await axiosInstance.get("/sendingReceivingCountryList");
      const sendCountriesList = response.data.data.transfer.countries.send;
      const receiveCountriesList = response.data.data.transfer.countries.receive;
      setSendCountries(sendCountriesList);
      setReceiveCountries(receiveCountriesList);

      if (sendCountriesList.length > 0) {
        setSelectedSendCountry(sendCountriesList[0]);
      }
      if (receiveCountriesList.length > 0) {
        setSelectedReceiveCountry(receiveCountriesList[0]);
      }
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };

  const exchangeRate = () => {
    if (selectedSendCountry && selectedReceiveCountry) {
      const rate = selectedSendCountry.exchange.find(
        (ex: { currency: any; }) => ex.currency === selectedReceiveCountry.currency_code
      )?.rate;
      setRate(rate || 0);
      setInputReceiveValue(inputSendValue * (rate || 0));
    }
  }

  const handleSendInputChange = (e: { target: { value: React.SetStateAction<any>; }; }) => {
    const value = e.target.value;
    setInputSendValue(value);
    setInputReceiveValue(value * rate);
  };

  const handleReceiveInputChange = (e: { target: { value: React.SetStateAction<any>; }; }) => {
    const value = e.target.value;
    setInputReceiveValue(value);
    setInputSendValue(value / rate);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    exchangeRate();
  }, [selectedSendCountry, selectedReceiveCountry, inputSendValue]);

  return (
    <aside className="exchange-section">
      <header className="exchange-section_header">
        <span>Exchange Rate</span>
        <p>1 {selectedSendCountry?.currency_code} ≈ {rate} {selectedReceiveCountry?.currency_code}</p>
      </header>
      <div className="exchange-section_details">
        <div className="exchange-section_details_content">
          <h2>Calculate Rates</h2>
          <div className="exchange_cards">
            <div className="exchange_cards_card">
              <div>
                <span className="label">You Send</span>
                <label><input type="number" value={inputSendValue} onChange={handleSendInputChange} /></label>
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
                <label><input type="number" value={inputReceiveValue} onChange={handleReceiveInputChange} /></label>
              </div>
              <CountrySelect
                countries={receiveCountries}
                selectedCountry={selectedReceiveCountry}
                setSelectedCountry={setSelectedReceiveCountry}
              />
            </div>
            <p className="exchange-section_footer">
              Exchange Rate: 1 {selectedSendCountry?.currency_code} = {rate} {selectedReceiveCountry?.currency_code} <br />
              Transfer fees: 0.00 {selectedSendCountry?.currency_code}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

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
