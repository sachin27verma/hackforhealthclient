// 'use client'
// import React from 'react'
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
// import SendIcon from '@mui/icons-material/Send';
// import Image from 'next/image';



// const Mentalhealthcheak = () => {

//   const { data: session } = useSession();

 
  
//   return (
//     <div className='  w-full md:w-3/6 mx-auto py-3 rounded-md '>
//       <div className=' shadow-xl h-[600px]'>
//         <div className=' user w-5/6  float-start relative px-6 pt-4'>
//           <div className=' absolute h-[40px] w-[40px] top-[1px] left-[8px]  rounded-full border-2 border-white'>
//     <Image src={'/doctor.png'} alt='user' fill className=' aspect-square rounded-full' />
//           </div><div className=' px-5 bg-semi-blue text-white p-3  rounded-md'>
//             <p>Hello , How are y buddy , hwo are u many , have a nice day</p>

//           </div>

//         </div>
//         <div className=' chatbot w-5/6 flex justify-end float-end relative px-6 pt-4'>
//           <div className=' absolute h-[40px] w-[40px] -top-[5px] right-[8px]  rounded-full border-2 border-white'>
//     <Image src={'/chatbot.jpg'} alt='user' fill className=' aspect-square rounded-full object-cover' />
//           </div><div className=' px-5 bg-gray-400 p-3  rounded-md'>
//             <p>Hello , How are y buddy , hwo are u many , Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum accusantium! Cumque fugiat ut velit doloribus hic consequuntur molestiae, quam, voluptatum quidem perspiciatis magnam. Voluptatum nesciunt sed optio voluptatem ducimus! have a nice day</p>

//           </div>

//         </div>
//       </div>
//       <div className=' h-[70px] p-2 flex gap-2 border-ring-1  shadow-xl border-semi-blue'>
// <input className=' w-full h-full p-2  outline-none border-2 rounded-full border-midnight pr-2  ' placeholder=' Wanna say Something'></input>
// <button className=' -rotate-30 bg-semi-blue rounded-full px-4 flex items-center justify-center '><SendIcon/></button>
//       </div> 
//     </div>
//   )
// }

// export default Mentalhealthcheak

"use client";
import { useState } from "react";

export default function Home() {
  const [theInput, setTheInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Yo, this is ChatterBot! How can I help you today?",
    },
  ]);
  // below this

  const callGetResponse = async () => {
    setIsLoading(true);
    let temp = messages;
    temp.push({ role: "user", content: theInput });
    setMessages(temp);
    setTheInput("");
    console.log("Calling OpenAI...");

    const response = await fetch("/api/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ messages }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.content);

    setMessages((prevMessages) => [...prevMessages, output]);
    setIsLoading(false);
  };

  // const Submit = (event) => {
  //   event.preventDefault();
  //   if (event.key === "Enter") {
  //     callGetResponse();
  //   }
  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-5">
      <h1 className="text-5xl font-sans">ChatterBot</h1>

      <div className="flex  h-[35rem] w-[40rem] flex-col items-center bg-gray-600 rounded-xl">
        <div className=" h-full flex flex-col gap-2 overflow-y-auto py-8 px-3 w-full">
          {messages.map((e) => {
            return (
              <div
                key={e.content}
                className={`w-max max-w-[18rem] rounded-md px-4 py-3 h-min ${
                  e.role === "assistant"
                    ? "self-start  bg-gray-200 text-gray-800"
                    : "self-end  bg-gray-800 text-gray-50"
                } `}
              >
                {e.content}
              </div>
            );
          })}

          {isLoading ? (
            <div className="self-start  bg-gray-200 text-gray-800 w-max max-w-[18rem] rounded-md px-4 py-3 h-min">
              *thinking*
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="relative  w-[80%] bottom-4 flex justify-center">
          <textarea
            value={theInput}
            onChange={(event) => setTheInput(event.target.value)}
            className="w-[85%] h-10 px-3 py-2
          resize-none overflow-y-auto text-black bg-gray-300 rounded-l outline-none"
            // onKeyDown={Submit}
          />
          <button
            onClick={callGetResponse}
            className="w-[15%] bg-blue-500 px-4 py-2 rounded-r"
          >
            send
          </button>
        </div>
      </div>

      <div></div>
    </main>
  );
}