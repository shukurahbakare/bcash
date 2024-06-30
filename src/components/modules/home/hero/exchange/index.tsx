import React from "react";
import "./style.scss";

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
            <div>
              <span>You Send</span>
              <p>$0</p>
            </div>
            <div>
              <span>You Send</span>
              <p>₦0</p>
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
