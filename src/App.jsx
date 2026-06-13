import {BrowserRouter,Routes,Route}
from "react-router-dom";


import Home from "./pages/Home";
import Report from "./pages/Report";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Analytics from "./pages/Analytics";
import Navbar from "./components/Navbar";


function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/report" element={<Report/>}/>

<Route path="/admin" element={<Admin/>}/>

<Route path="/analytics" element={<Analytics/>}/>

</Routes>


</BrowserRouter>

)

}

export default App;