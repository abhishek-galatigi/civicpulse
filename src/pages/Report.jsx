import { useState } from "react";

import { collection, addDoc } from "firebase/firestore";

import { db } from "../firebase";

import { checkSeverity } from "../gemini";


function Report(){


const [title,setTitle]=useState("");
const [description,setDescription]=useState("");
const [location,setLocation]=useState("");

const [loading,setLoading]=useState(false);



async function submitIssue(){


try{

setLoading(true);


const aiSeverity =
await checkSeverity(description);



await addDoc(collection(db,"issues"),{


title,
description,
location,


status:"Pending",

severity:aiSeverity,


createdAt:new Date()


});


alert("Issue Submitted Successfully 🚀");


setTitle("");
setDescription("");
setLocation("");

setLoading(false);


}


catch(error){

console.log(error);

alert("Something went wrong");

setLoading(false);

}


}




return(

<div

style={{

minHeight:"85vh",
display:"flex",
justifyContent:"center",
alignItems:"center"

}}

>


<div

style={{

width:"450px",

padding:"40px",

borderRadius:"25px",

background:"rgba(255,255,255,0.08)",

backdropFilter:"blur(20px)",

border:"1px solid rgba(255,255,255,0.15)",

boxShadow:"0 20px 60px rgba(0,0,0,0.5)"

}}

>


<h1

style={{

fontSize:"32px",
marginBottom:"25px",
textAlign:"center"

}}

>

🚨 Report Civic Issue

</h1>



<input

placeholder="Issue Title"

value={title}

onChange={(e)=>setTitle(e.target.value)}

style={inputStyle}

/>



<textarea

placeholder="Describe the problem"

value={description}

onChange={(e)=>setDescription(e.target.value)}

style={inputStyle}

/>



<input

placeholder="Location"

value={location}

onChange={(e)=>setLocation(e.target.value)}

style={inputStyle}

/>



<button

onClick={submitIssue}

style={{

width:"100%",

padding:"15px",

borderRadius:"15px",

background:
"linear-gradient(to right,#2563eb,#9333ea)",

color:"white",

fontSize:"17px"


}}

>


{

loading ?

"Analyzing with AI 🤖..."

:

"Submit Issue 🚀"


}


</button>



</div>


</div>


)

}



const inputStyle={


width:"100%",

padding:"15px",

marginBottom:"18px",

borderRadius:"15px",

border:"1px solid rgba(255,255,255,0.2)",

background:"rgba(255,255,255,0.1)",

color:"white",

fontSize:"16px"


};



export default Report;