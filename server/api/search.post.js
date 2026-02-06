// server/api/search.post.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const userQuery = body?.query;

  if (!userQuery) {
    throw createError({
      statusCode: 400,
      statusMessage: "Query is required",
    });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "models/gemini-2.5-flash",
    });

    const prompt = `
You are a Bible assistant.

- If the input is a Situation (e.g., "I feel lonely"):
  Provide 2–3 comforting Bible verses.

- If the input is a Phrase (e.g., "money is the root"):
  Find the exact verse reference and full verse text.

User Input: "${userQuery}"

Format:
Verse Reference
Verse Text
    `.trim();

    const result = await model.generateContent(prompt);
    const response = result.response;

    return { result: response.text() };
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch verses",
    });
  }
});
