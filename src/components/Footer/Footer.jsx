import Image from "next/image";
import React from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className=" py-4 bg-midnight ">
      <div className=" flex justify-around   gap-3 flex-wrap items-center py-4">
        <div className=" text-white md:w-3/12 border-b-2 py-2 border-white md:border-none text-center md:text-left flex-grow w-full flex flex-col gap-2">
          <p>Links</p>
          <Link href='/' ><ArrowRightIcon/>Personalized Healthcare</Link>
          <Link href='/' ><ArrowRightIcon/>Mental Health Support</Link>
          <Link href='/' ><ArrowRightIcon/>Remote Patient Monitoring</Link>
          <Link href='/' ><ArrowRightIcon/>Wellness Promotion</Link>
          <Link href='/' ><ArrowRightIcon/>Health Equity</Link>
        </div>
        
        <div className="md:w-5/12 flex-grow w-full flex border-b-2 py-2 border-white md:border-none flex-col gap-3 justify-center items-center">
          <div className=" h-[50px] w-[50px] relative  "><Image src={'/logo.png'} fill alt='logo'/></div>
          <p className="text-white font-montserrat text-2xl font-semibold">AI Care, Your Wellness Companion. </p>
          <p className="text-white text-sm text-center  font-century-gothic  font-normal leading-[130%] tracking-[0.64px]">Elevate your well-being with AI Care - where cutting-edge technology meets personalized healthcare. Your dedicated wellness companion, revolutionizing the future of health with precision and compassion, at your service.</p>
          <p className=" text-white">copyright@2024</p>
        </div>
        <div className=" w-full flex-grow md:w-3/12">
          <div className=" text-white text-center font-bold">Follow Us</div>
          <p className="flex justify-center pt-2 gap-6">
            <Link href="https://www.instagram.com/triflate/">
              <InstagramIcon className="text-white hover:text-semi-blue hover:animate-bounce " />
            </Link>
            <Link href="https://github.com/sachin27verma">
              <GitHubIcon className="text-white hover:text-semi-blue hover:animate-bounce " />
            </Link>
            <Link href="https://www.linkedin.com/in/sachin-kumar-79125122a/">
              <LinkedInIcon className="text-white hover:text-semi-blue hover:animate-bounce" />
            </Link>
            <Link href="https://twitter.com/triflate_">
              <TwitterIcon className="text-white hover:text-semi-blue hover:animate-bounce" />
            </Link>
            <Link href="www">
              <WhatsAppIcon className="text-white hover:text-semi-blue hover:animate-bounce " />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
