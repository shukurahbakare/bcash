import React from "react";
import "./style.scss";
import Image from "next/image";
import woman from "@/components/assets/hero-img.png"
import qr from "@/components/assets/qr_code.png";

const QR = () => {
  return (
    <aside className="qr-section">
      <div className="qr-section_image">
        <Image src={woman} alt="Our happy user" />
      </div>
      <div className="qr-section_details">
        <Image src={qr} alt="qr code" />
        <p>
          Scan to download app. <br />
          Available on Appstore and Playstore.
        </p>
      </div>
    </aside>
  );
};

export default QR;
