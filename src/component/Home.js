import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container">
            <h1 style={{ color: "red", fontSize: "55px" }}>Covid Vaccine Registeration</h1>

            <h3 style={{ color: "gray" }}>Why it is Important to get Vaccinate ?</h3><br />
            <p className="my-3" style={{  color: "grey" }}>The COVID-19 vaccines produce protection against the disease, as a result of developing an immune response to the SARS-Cov-2 virus. Developing immunity through vaccination means there is a reduced risk of developing the illness and its consequences. This immunity helps you fight the virus if exposed.</p>

            <p>click Here to register for vaccine</p>
           <Link to="/register">
           <button className="btn btn-primary">
                Register
            </button>
               </Link> 

        </div>
    )
}
