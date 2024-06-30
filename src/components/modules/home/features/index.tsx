import React from "react";
import Image from "next/image";
import "./style.scss";
import rocket from "@/components/assets/icons/IconRocket.svg";
import support from "@/components/assets/icons/IconSupport.svg";
import sheild from "@/components/assets/icons/IconSheild.svg";

const features: {
  name: string;
  desc: string;
  icon: any;
}[] = [
  {
    icon: rocket,
    name: "Easy to Sign Up",
    desc: "Link your debit card, verify your identity and be sending in minutes.",
  },
  {
    icon: support,
    name: "24/7 Support",
    desc: "We are available to chat 24/7 if you need any help.",
  },
  {
    icon: rocket,
    name: "Fast & Convenient",
    desc: "Skip the line and send money from your phone to your loved ones in seconds.",
  },
  {
    icon: sheild,
    name: "Trusted and Legitimate",
    desc: "Trusted by over 1 million users, BNB Cash App is operated by BNB Transfer.",
  },
];
const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="features_container">
        <div className="features_container_content">
          {/* <div className="features_container_content_card"> */}
          {features.map((feature, index) => (
            <div className="features_container_content_card" key={index}>
              <div className="features_container_content_card_icon">
                <Image src={feature.icon} alt="icon" />
              </div>
              <div className="features_container_content_card_title">
                {feature.name}
              </div>
              <div className="features_container_content_card_desc">
                {feature.desc}
              </div>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
