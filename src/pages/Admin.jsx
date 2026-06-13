import { useEffect, useState } from "react";

import {
collection,
getDocs,
doc,
updateDoc
} from "firebase/firestore";

import { db } from "../firebase";


function Admin(){


const [issues,setIssues]=useState([]);



async function getIssues(){


const data = await getDocs(
collection(db,"issues")
);


setIssues(

data.docs.map((item)=>({

id:item.id,

...item.data()

}))

);


}



async function resolveIssue(id){


await updateDoc(

doc(db,"issues",id),

{

status:"Resolved"

}

);


getIssues();


}



useEffect(()=>{


getIssues();


},[]);




return(


<div

style={{

padding:"50px"

}}

>


<h1

style={{

fontSize:"40px",
marginBottom:"30px"

}}

>

⚡ Authority Dashboard

</h1>



<div

style={{

display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(300px,1fr))",

gap:"25px"

}}

>


{

issues.map((issue)=>(


<div

key={issue.id}

style={{

padding:"25px",

borderRadius:"25px",

background:"rgba(255,255,255,0.08)",

backdropFilter:"blur(15px)",

border:"1px solid rgba(255,255,255,0.15)",

boxShadow:"0 20px 40px rgba(0,0,0,.3)"

}}

>



<h2

style={{

fontSize:"25px"

}}

>

🚧 {issue.title}

</h2>



<p

style={{

marginTop:"15px",

color:"#cbd5e1"

}}

>

{issue.description}

</p>



<p

style={{marginTop:"15px"}}

>

📍 {issue.location}

</p>

{

issue.image &&

<img

src={issue.image}

alt="issue"

style={{

width:"100%",

height:"200px",

objectFit:"cover",

borderRadius:"15px",

marginTop:"20px",

marginBottom:"20px"

}}

/>

}

<h3>

🤖 AI Priority : {issue.severity}

</h3>



<h3>

Status : 

<span

style={{

color:
issue.status==="Resolved"

?"#22c55e"

:"#facc15"


}}

>

{" "+issue.status}

</span>


</h3>



<button

onClick={()=>resolveIssue(issue.id)}

style={{

marginTop:"20px",

padding:"12px 25px",

borderRadius:"20px",

background:
"linear-gradient(to right,#16a34a,#22c55e)",

color:"white"

}}

>


Mark Resolved ✓


</button>



</div>



))

}



</div>


</div>

)


}



export default Admin;