import React, { useState } from "react"
const Authcontext=React.createContext({
    token:'',
    islogined:false,
    login:(token)=>{},
    logout:()=>{}

})

export const Authcontextprovider=(props)=>{
    const intialtoken=localStorage.getItem('token');
    const [token,settoken]=useState(intialtoken);
    const userlogined=!!token;

    const userLogin=(token)=>{
        settoken(token);
        localStorage.setItem('token',token);
    }

    const userLogout=()=>{
        settoken(null);
        localStorage.removeItem('token');
    }

 const cardcontext={
    token:token,
    islogined:userlogined,
    login:userLogin,
    logout:userLogout
 }

    return(
        <Authcontext.Provider value={cardcontext}>
            {props.children}
        </Authcontext.Provider>
    )
}
export default Authcontext;