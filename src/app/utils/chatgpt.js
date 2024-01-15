import * as openai from 'openai';
const apiKey = process.env.API_KEY;

const openaiInstance = new openai.OpenAI({ apiKey });
export { openaiInstance as openai };
