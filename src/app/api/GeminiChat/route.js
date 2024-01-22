// // api/gemini.js
// import { NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { OpenAIStream,StreamingTextResponse } from 'ai';

// const API_KEY = process.env.GEMINI_API_KEY; // Access your API key from env var
// const genAI = new GoogleGenerativeAI(API_KEY);

// export async function POST(req, res) {
//   //   if (req.method === 'POST')

//   // const { prompt } = req.body;
//   const { prompt } = await req.json();
//   // const prompt="tell me a joke"

//   const generationConfig = {
//     stopSequences: ["red"],
//     maxOutputTokens: 200,
//     temperature: 0.9,
//     topP: 0.1,
//     topK: 16,
//     // stream: true,
//   };

//   try {
//     const model = genAI.getGenerativeModel({
//       model: "gemini-pro",
//       generationConfig,
//     }); // Specify model
//     const result = await model.generateContent(prompt);
//     console.log(result)
//     const stream=OpenAIStream(result)
//     // console.log(stream);
//     return new StreamingTextResponse(stream)
//     // const response =  result.response;
//     // const text = response.text();
//     // console.log(text);
//     // return NextResponse.json({ content: text });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Failed to generate text" });
//   }
//   //    else {
//   //     res.status(405).json({ error: 'Method not allowed' });
//   //   }
// }
// api/gemini.js
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream,StreamingTextResponse } from 'ai';

const API_KEY = process.env.GEMINI_API_KEY; // Access your API key from env var
const genAI = new GoogleGenerativeAI(API_KEY);

export async function POST(req, res) {
  const { content } = await req.json(); // Parse JSON body

  const generationConfig = {
    stopSequences: ["red"],
    maxOutputTokens: 500,
    temperature: 0.9,
    topP: 0.1,
    topK: 16,
    // streaming:true,
    // streaming: true, // Enable streaming
  };

  
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      generationConfig,
      
    }); // Specify model
    const response = await model.generateContentStream( content ); // Use generateText for streaming
    // console.log("rsponse",response.response.text())
    // const ans=response.response.text();
    const streamm=GoogleGenerativeAIStream(response)
    // console.log(streamm);
    return new StreamingTextResponse(streamm)
    // return  NextResponse.json({message:ans})
    // return new StreamingTextResponse(response.stream); // Return a StreamingTextResponse
 
}

