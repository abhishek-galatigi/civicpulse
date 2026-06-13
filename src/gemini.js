import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(

);


const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash"
});


export async function checkSeverity(text){

try{


const result = await model.generateContent(
`
Classify this civic issue severity:

${text}

Reply only:
Low or Medium or High or Critical
`
);


return result.response.text().trim();


}

catch(error){

console.log("AI ERROR:",error);


// backup if AI fails
return "Medium";

}


}