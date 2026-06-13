import { Link } from "react-router-dom";


function Home(){

return(

<div

style={{

height:"85vh",
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
textAlign:"center"

}}

>


<h1

style={{

fontSize:"70px",
fontWeight:"800",
background:
"linear-gradient(to right,#38bdf8,#a855f7)",
WebkitBackgroundClip:"text",
color:"transparent"

}}

>

CivicPulse

</h1>


<p

style={{

fontSize:"22px",
maxWidth:"650px",
marginTop:"20px",
color:"#cbd5e1"

}}

>

AI Powered Smart City Issue Reporting and Management Platform

</p>


<div
style={{

display:"flex",
gap:"20px",
marginTop:"40px"

}}

>


<Link to="/report">

<button

style={{

padding:"15px 35px",
borderRadius:"30px",
background:
"linear-gradient(to right,#2563eb,#9333ea)",
color:"white",
fontSize:"18px"

}}

>

Report Issue 🚀

</button>

</Link>



<Link to="/analytics">

<button

style={{

padding:"15px 35px",
borderRadius:"30px",
background:"rgba(255,255,255,0.1)",
color:"white",
fontSize:"18px"

}}

>

View Analytics

</button>

</Link>



</div>


</div>

)

}


export default Home;