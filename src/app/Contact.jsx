"use client";
import Image from "next/image";
import React, { useState } from "react";
// import { db } from "../../firebase/Firebase";
// import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

export default function Contactme() {
//   const [form, setForm] = useState({ name: "", email: "", description: "" });

//   const notify = (message, type) => toast(message, { type });

//   const isValidEmail = (email) => {
//     const pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     return pattern.test(email);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (form.description !== "" && form.name !== "" && form.email !== "") {
//         if (isValidEmail(form.email)) {
//           await addDoc(collection(db, "Message from visited user"), {
//             name: form.name,
//             email: form.email,
//             description: form.description,
//           });
//           notify("🎉 Your message has been sent successfully!", "success");
//           setForm({ name: "", email: "", description: "" });
//         } else {
//           setForm({...form,email:''})
//           notify(" 😕 Dear , Please provide a valid Email", "error");
//         }
//       } else {
//         notify("😒 Please fill all the fields", "error");
//       }
//     } catch (error) {
//       console.error("Error adding document: ", error);
//       notify("An error occurred. Please try again later.", "error");
//     }
//   };

  return (
    <>
    <div className=" bg-midnight py-5 ">
      <div id="contact" className=" mb-4 shadow-2xl bg-semi-blue rounded-lg mx-2  w-6/6 md:w-4/6 md:mx-auto p-3 drop-shadow-2xl  py-4 ">
        <div className=" text-3xl text-center font-bold  text-midnight">
        Have something to tell about us?
        </div>
        <div className="my-4 mt-1   mx-2 md:mx-auto relative">
          {/* <p className="text-center tracking-widest leading-9">
            Unlocking Success Together<br></br>Let's Connect for Exciting Collaborations!
          </p>
          <p className="flex justify-center pt-2 gap-6">
            <Link href="https://www.instagram.com/triflate/">
              <InstagramIcon className="text-white hover:text-[#FFD700] hover:animate-bounce " />
            </Link>
            <Link href="https://github.com/sachin27verma">
              <GitHubIcon className="text-white hover:text-[#FFD700] hover:animate-bounce " />
            </Link>
            <Link href="https://www.linkedin.com/in/sachin-kumar-79125122a/">
              <LinkedInIcon className="text-white hover:text-[#FFD700] hover:animate-bounce" />
            </Link>
            <Link href="https://twitter.com/triflate_">
              <TwitterIcon className="text-white hover:text-[#FFD700] hover:animate-bounce" />
            </Link>
            <Link href="www">
              <WhatsAppIcon className="text-white hover:text-[#FFD700] hover:animate-bounce " />
            </Link>
          </p>

          <div className="flex justify-between items-center mt-4">
            <hr className="inline-block w-[45%] float-left"></hr>
            <p className="text-center inline-block">OR</p>
            <hr className="inline-block w-[45%] float-right"></hr>
          </div> */}

          <div className="mx-auto flex-row justify-center items-center  pt-4">
            <form className="flex w-5/6 mx-auto flex-col gap-2 text-black">
              <label className="text-midnight pl-2 font-medium">
                Name<sup className="text-red-600"> *</sup>
              </label>
              <input
                type="text"
                className="bg-gray-200 h-[50px] focus:border-midnight focus:border-2 focus:outline-none  border-semi-blue  rounded-lg pl-4"
                required
                placeholder="Enter Your Name..."
                // onChange={(e) => setForm({ ...form, name: e.target.value })}
                // value={form.name}
              ></input>
              <label className="text-midnight pl-2 font-medium">
                Email<sup className="text-red-600"> *</sup>
              </label>
              <input
                type="email"
                // pattern={isValidEmail.pattern}
                required
                className="bg-gray-200 h-[50px] transition-transform delay-150 focus:border-midnight focus:border-2 focus:outline-none  border-semi-blue  rounded-lg pl-4"
                placeholder="Email..."
                // onChange={(e) => setForm({ ...form, email: e.target.value })}
                // value={form.email}
              ></input>
              <label className="text-midnight pl-2 font-medium">
                Description<sup className="text-red-600"> *</sup>
              </label>
              <textarea
                id="message"
                rows="4"
                className=" focus:border-midnight focus:border-2 focus:outline-none  border-semi-blue  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
                // onChange={(e) => setForm({ ...form, description: e.target.value })}
                // value={form.description}
              ></textarea>
              
            </form>
            <div className=" w-5/6 mx-auto flex justify-start items-center   py-2 text-semi-blue rounded-full text-center font-bold ">
            <button
                // onClick={handleSubmit}
               className=" bg-midnight px-3 py-1 rounded-2xl" 
              >
                
                Submit
              </button>
              <ToastContainer />
              </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
