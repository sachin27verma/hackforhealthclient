"use client";
import { useState } from "react";
import axios from "axios";
// import Chatbot from "../../components/Chatbot";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import symptomsArray from '../utils/Data'
import RefreshIcon from '@mui/icons-material/Refresh';

const MentalHealth = () => {
  const defaultResponse = "No"; // Default value for checkboxes

  // Initialize responses array with default values
  const initialResponses = Array(102).fill(defaultResponse);
  const [responses, setResponses] = useState(initialResponses);
  const [result, setResult] = useState(null);
  const [about, setabout] = useState('');

  const handleCheckboxChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handlePrediction = async () => {
    try {
      const numericResponses = responses.map((response) =>
        response === "Yes" ? 1 : 0
      );
      // Send a POST request to the Flask server
      console.log(numericResponses);

      axios.defaults.baseURL = "https://";
      // axios.defaults.headers.post["Content-Type"] =
      //   "application/json;charset=utf-8";
      // axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

      const response = await axios.post(
        "https://hackforhealthserver.onrender.com/personal",
        numericResponses
      );
      // console.log("response", response);

      // console.log("yaha tak sahi");
      // console.log(response.data);

      // const data = await response;
      // console.log(data)
      // console.log(response?.data?.result);
      setResult(response?.data?.result);
      let content = response?.data?.result;
       content ='about' + content + 'in_30words_and_a_Links_related' 

      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ content: content || "Hello world" }),
        headers: {
          "Content-type": "application/json",
        },
      });
      setabout('')

      if(!res.ok || !res.body)
      {
        alert("Sending diseases name error")
        return;
      }

      const reader= res.body.getReader()
      // console.log(reader)
      const decoder = new TextDecoder();
      
      while(true)
      {
        const {value, done}= await reader.read()
        const Text = decoder.decode(value)
        // console.log(Text)
       setabout((prevtext)=> prevtext + Text  )
        if(done)
        {
          break;
        }
      }


    } catch (error) {
      // console.error("Error predicting  health:", error);
    }
  };

  const handleclick = ()=>{
    setabout('')
    setResult('')
    setResponses(initialResponses)
  }

  return (
    <>
      <h1 className=" text-4xl text-center font-bold my-2">
        Personasided Healthcare
      </h1>
     
      <p className=" text-center font-bold p-2">Our Model provide 99% Accurate , Please try to choose maximum no of symptoms.</p>
      <div className=" flex flex-wrap gap-3 justify-center">
        {/* Render 100 checkboxes */}
        {Array.from({ length: 102 }, (_, index) => (
          <div
            key={index}
            className=" p-2 rounded-md  flex-row justify-center items-center w-2/12  bg-semi-blue text-midnight font-bold ">
              <div className=" text-center capitalize">{symptomsArray[index]}</div>
              <div className=" flex gap-3 justify-center items-center text-white">
            <label  >
              Yes
              </label>
              <input
              className=" p-2 "
                type="checkbox"
                checked={responses[index] === "Yes"}
                onChange={() => handleCheckboxChange(index, "Yes")}
              />
            
            <label>
              No
              </label>
              <input
              className=" p-2"
                type="checkbox"
                checked={responses[index] === "No"}
                onChange={() => handleCheckboxChange(index, "No")}
              />
            </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-center items-center gap-2">

      <button
        onClick={handlePrediction}
        className="  bg-midnight p-2 font-bold flex jc items-center my-3 text-white rounded-lg px-3">
        Predict
      </button> <span><RefreshIcon className =' text-midnight cursor-pointer'  onClick={handleclick} /></span>
      </div>

      {result && (
        <div className="  md:w-4/6 w-full mx-auto shadow-xl p-3 my-3 prose ">
          <p className=" text-center font-bold text-2xl ">{result}</p>
          {/* <p onClick={handleclick}>Wanna Know about Diseases</p> */}
          <Markdown remarkPlugins={[remarkGfm]} 
          components={{
            code(props) {
              const { betakyahua, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || '');
            
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="p"
                  language={match[1]}
                  style={dark}
                >
                  {String(betakyahua).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {betakyahua}
                </code>
              );
            }
            
          }}
          >{about}</Markdown>
          
        </div>
      )}
      {/* <Chatbot/> */}
    </>
  );
};

export default MentalHealth;
