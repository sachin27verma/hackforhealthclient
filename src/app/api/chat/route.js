import { NextResponse } from "next/server";
import OpenAI from "openai";
import { OpenAIStream,StreamingTextResponse } from 'ai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export async function POST(req, res) {

    const { content } = await req.json();
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content }],
    model: "gpt-3.5-turbo",
    max_tokens:100,
    stream:true,
  });

  const stream=OpenAIStream(chatCompletion)
  // console.log(stream);
  return new StreamingTextResponse(stream)

  // console.log(chatCompletion);
  // return NextResponse.json({ content: chatCompletion });

}
