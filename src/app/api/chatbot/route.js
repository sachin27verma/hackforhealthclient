import { NextResponse } from "next/server";
import OpenAI from "openai";
import { OpenAIStream,StreamingTextResponse } from 'ai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

export const runtime = 'edge';

export async function POST(req, res) {
    const { content } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content }],
    max_tokens:100,
    // stream:true,
  });
//   console.log(completion.choices)
  console.log(completion.choices[0].message);
  const theResponse = completion.choices[0].message;
//   const stream=OpenAIStream(completion)
//   // console.log(stream);
//   return new StreamingTextResponse(stream)
// console.log(completion.choices[0].message);
//   const theResponse = completion.choices[0].message;

  return NextResponse.json({ output: theResponse }, { status: 200 });
}