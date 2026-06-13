import { useEffect, useState } from "react";

import { collection, getDocs }
from "firebase/firestore";

import { db } from "../firebase";


function Analytics(){


const [total,setTotal]=useState(0);
const [pending,setPending]=useState(0);
const [resolved,setResolved]=useState(0);



async function loadData(){


const data = await getDocs(
collection(db,"issues")
);


let p=0;
let r=0;


data.docs.forEach((item)=>{


if(item.data().status==="Pending"){

p++;

}


if(item.data().status==="Resolved"){

r++;

}


});


setTotal(data.docs.length);

setPending(p);

setResolved(r);


}



useEffect(()=>{

loadData();

},[]);



const cards=[


{
title:"Total Reports",
value:total,
icon:"📊"
},


{
title:"Pending Issues",
value:pending,
icon:"🟡"
},


{
title:"Resolved Issues",
value:resolved,
icon:"🟢"
}


];



return(

<div

style={{

padding:"50px"

}}

>


<h1

style={{

fontSize:"42px",
marginBottom:"40px"

}}

>

📈 Smart City Analytics

</h1>



<div

style={{

display:"grid",

gridTemplateColumns:
"repeat(auto-fit,minmax(250px,1fr))",

gap:"30px"


}}

>


{

cards.map((card,index)=>(


<div

key={index}

style={{


padding:"40px",

borderRadius:"25px",

background:"rgba(255,255,255,0.08)",

backdropFilter:"blur(20px)",

border:"1px solid rgba(255,255,255,0.15)",

boxShadow:"0 20px 50px rgba(0,0,0,0.4)",

textAlign:"center"


}}


>


<h1

style={{fontSize:"50px"}}

>

{card.icon}

</h1>



<h2>

{card.title}

</h2>



<h1

style={{

fontSize:"55px",

marginTop:"20px",

background:
"linear-gradient(to right,#38bdf8,#a855f7)",

WebkitBackgroundClip:"text",

color:"transparent"


}}

>

{card.value}

</h1>



</div>


))


}


</div>



</div>


)

}


export default Analytics;