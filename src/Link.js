import React from 'react'
const Link=({List})=>{

    return(
        <div class="App">
            <table class="table" style={{color:"LightGray"}}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Capital</th>
                <th>Region</th>
                <th>Flag</th>
            </tr>
            </thead>
            <tbody style={{color:"white"}}>
            {

            List.map((i)=>(
                    
            <tr key={i.id}>
                <td>{i.name}</td>
                <td>{i.capital}</td>
                <td>{i.region}</td>
                <td><img height="60" width="60" src={i.flag} alt="flag"></img></td>
            </tr>
                  ))}
             </tbody>
             </table>
            </div>)
    
        }

export default Link;