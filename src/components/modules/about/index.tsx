import React from 'react'
import Image from 'next/image';
import aboutScan from "@/components/assets/about-scan.png"
import "./style.scss";
import BnbCauridor from '@/components/assets/bnbbycauridor.png'


const About = () => {
  return (
    <section >
        <div className="hero">
    <div className="hero_container">
            <h1 className="hero_container_header">About BNB cash App</h1>
            
        </div>
        </div>

        <div className="bnb">
            <div className="visit">
                <p>
                BnB Transfer Corp is a division of Cauridor, a multi-national fintech company headquartered in Canada. BnB provides international money transfer and payment services to individuals in multiple countries around the world with a focus on sending and receiving money transfers to, from and within Africa. 
                </p>
                <button>Visit Cauridor.com</button>
            </div>
            <div className="logo">
                <Image src={BnbCauridor} alt='BnB by Cauridor logo'/>
            </div>

        </div>
        <section className="about">
      <div className="about_container">
        <section className="about_container_modules">
        <div>
            <Image src={aboutScan} alt="Scan Qr Code" />
          </div>
          <div>
            <h1>We are transforming the digital payments and money transfer market in Africa</h1>
            <p>
            We are on a mission to create a digitally interconnected economy where customers are able to access a broad range of money transfer and financial services in Africa.
            </p>
            
          </div>

          
        </section>
      </div>
    </section>
      
    </section>
  )
}

export default About;