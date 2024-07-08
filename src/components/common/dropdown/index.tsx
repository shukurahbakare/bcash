// import "./styles.css";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./style.scss";

export const CountrySelect = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.countries);
        setCountries(data.countries );
        setSelectedCountry(data.userSelectValue);
      });
  }, []);
  return (
    <Select
      options={countries}
      value={selectedCountry}
      onChange={(selectedOption: any) => setSelectedCountry(selectedOption)}
    />
  );
};