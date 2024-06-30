import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import "./style.scss";

const Navbar = () => {
  return (
    <header className="nav">
      <div className="nav_container">
        <Image
          src={logo}
          alt="Bcash"
          className="logo"
          width="100"
          height="100"
        />

        <div className="wrapper">
          <nav>
            <Link href="/">For Businesses</Link>
            <Link href="/partners">Payout Partners</Link>
            <Link href="/about">About Us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/help">Help</Link>
          </nav>
        </div>

        <button>
          <Link href="/login">Download App</Link>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
