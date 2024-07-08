"use client";

import React from "react";
import "./style.scss";
import { CountrySelect } from "@/components/common/dropdown";

const Exchange = () => {
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
              <CountrySelect />
            </div>
            <div className="exchange_cards_card">
              <div>
                <span className="label">Receiver Gets</span>
                <label>$ <input type="number" /></label>
              </div>
              <CountrySelect />
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

export default Exchange;
