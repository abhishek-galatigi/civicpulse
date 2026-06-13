import { Link } from "react-router-dom";


function Navbar(){

return(

<div
style={{

height:"70px",
padding:"0 60px",
display:"flex",
alignItems:"center",
justifyContent:"space-between",
background:"rgba(255,255,255,0.05)",
backdropFilter:"blur(15px)",
borderBottom:"1px solid rgba(255,255,255,0.1)"

}}

>


<h2
style={{

fontSize:"26px",
background:
"linear-gradient(to right,#38bdf8,#a855f7)",
WebkitBackgroundClip:"text",
color:"transparent"

}}

>

🌆 CivicPulse

</h2>



<div
style={{

display:"flex",
gap:"30px",
fontWeight:"500"

}}

>

<Link to="/">Home</Link>

<Link to="/report">Report</Link>

<Link to="/admin">Admin</Link>

<Link to="/analytics">Analytics</Link>


</div>

</div>


)

}


export default Navbar;