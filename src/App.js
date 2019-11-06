import React from 'react';
import Axios from 'axios';
import Link from './Link';
import './index.css'
const App=()=>{
    const[input,setInput]=React.useState("")
    const[list,setlist]=React.useState([])
    React.useEffect(()=>{
        getString1()
    },[])
    const getString1=()=>{
        Axios.get("https://restcountries.eu/rest/v2/all").then(res=>{
            setlist(res.data);
        });
       }
    const getString=(e)=>{
         setInput(e.target.value)
    }
    const getCountry=(input)=>{
        Axios.get("https://restcountries.eu/rest/v2/name/"+input).then(result=>{
            setlist(result.data);
            setInput("");
        });
    }
    

return(
    <div class="next">
        <h1 style={{color:"red"}}><center>About Country</center></h1>
       <center> 
    
           <input className="alert alert-primary" type="text" placeholder="search country..."onChange={getString} value={input}></input><br></br><br></br>
        <button class="btn btn-primary btn-block" onClick={()=>
            getCountry(input)}>search</button></center>
        <Link List={list}/>
    </div>
)    
}
export default App;

