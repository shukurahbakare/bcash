import React from 'react';
import "./style.scss";
import Image from "next/image";
import uba from "../../assets/uba.png";
import ria from "../../assets/ria.png";
import wave from "../../assets/wave.png";
import partner from "../../assets/partner.png";
import moneygram from "../../assets/moneygram.png";
import westernunion from "../../assets/westernunion.png";

const PartnersSections = () => {
    const partners = [
        {
          icon: uba,
          name: "UBA",
        },
        {
          icon: ria,
          name: "Ria",
        },
        {
          icon: wave,
          name: "Wave Money",
        },
        {
          icon: partner,
          name: "Partner Image",
        },
        {
          icon: moneygram,
          name: "MoneyGram",
        },
        {
          icon: westernunion,
          name: "Western Union",
        }
      ];
  return (
    <div>PartnersSections</div>
  )
}

export default PartnersSections