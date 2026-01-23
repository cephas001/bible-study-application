// import { GoogleGenerativeAI } from "@google/generative-ai";

// export default defineEventHandler(async (event) => {
//   // 1. Read the body sent from the frontend
//   const body = await readBody(event);
//   const userQuery = body.query;

//   if (!userQuery) {
//     throw createError({
//       statusCode: 400,
//       statusMessage: "Query is required",
//     });
//   }

//   try {
//     // 2. Setup Gemini
//     // Ensure you add GEMINI_API_KEY to your .env file
//     const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     // 3. The Prompt
//     const prompt = `You are a Bible assistant. The user will input a phrase or a situation.
//     - If it's a Situation (e.g., "I feel lonely"): Provide 2-3 comforting verses fitting that context.
//     - If it's a Phrase (e.g., "money is root"): Find the exact verse reference and text.

//     User Input: "${userQuery}"

//     Please format the output cleanly with the Verse Reference first, then the Text.`;

//     // 4. Generate
//     const result = await model.generateContent(prompt);
//     const response = await result.response;

//     return { result: response.text() };
//   } catch (error) {
//     console.error(error);
//     throw createError({
//       statusCode: 500,
//       statusMessage: "Failed to fetch verses",
//     });
//   }
// });
