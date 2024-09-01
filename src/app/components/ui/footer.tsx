"use client"
import React, { useState } from "react";
import DiscordLogo from "../../assets/DiscordLogo.png";
import InstagramLogo from "../../assets/InstagramLogo.png";
import LinkLogo from "../../assets/LinkedinLogo.png";
import TelegramLogo from "../../assets/TelegramLogo.png";
import TwitterLogo from "../../assets/TwitterLogo.png";
import WhatsUpLogo from "../../assets/WhatsappLogo.png";
import SikapuduoImage from "../../assets/Sikapuduo.png";
import WhiteArrowImage from "../../assets/arrow-white.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const CompaniesLogosArr: StaticImageData[] = [
  DiscordLogo,
  InstagramLogo,
  LinkLogo,
  TelegramLogo,
  TwitterLogo,
  WhatsUpLogo,
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [emailAccepted, setEmailAccepted] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = (): void => {
    if (validateEmail(email)) {
      setEmailError("");
      setEmail("");
      setEmailAccepted("Thank you for subscribe!")
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  return (
    <footer className="max-w-7xl m-auto px-4 pt-10">
      <div className="flex flex-wrap md:flex-col lg:flex-row md:items-start sm:items-start justify-between">
        <div className="flex gap-6 h-[24px] self-end md:self-start md:mb-5 sm:mb-5 sm:self-start mb-4">
          {CompaniesLogosArr.map((logo, index) => (
            <Image src={logo} key={index} alt="companies logos" />
          ))}
        </div>

        <div className="flex flex-col gap-6 max-w-[466px] font-medium ">
          <div className="flex gap-10 flex-wrap">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Contact us</Link>
          </div>
          <p>
            At Sikapuduo Bank, we are redefining the way you bank. With
            cutting-edge technology, innovative solutions, and a
            customer-centric approach, we are transforming the banking
            experience for the modern world.
          </p>
        </div>

        <div className="flex flex-col gap-5 mt-5 md:mt-0">
          <h4 className="font-medium">Subscribe to our newsletter</h4>

          <div className="flex flex-col gap-2">
            <div className="bg-white flex items-center rounded-full overflow-hidden px-1">
              <input
                type="text"
                placeholder="Enter email address"
                className="py-4 px-4 outline-none text-[#024751]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-[#00D47E] p-3 rounded-full"
                onClick={handleSubscribe}
              >
                <Image src={WhiteArrowImage} alt="WhiteArrowImage" />
              </button>
            </div>
            {emailError && <p className="text-red-500 text-sm ml-4">{emailError}</p>}
            {emailAccepted && <p className="text-green-500 text-sm ml-4">{emailAccepted}</p>}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Image src={SikapuduoImage} alt="sikapuduo image" />
      </div>
    </footer>
  );
};

export default Footer;
