import React,{useState} from 'react';


export default function Registeration() {
    const myStyle = {
        color: "dodgerblue",
        
    }
    const [userRegisteration, setuserRegisteration] = useState({
        fullname:"",
        age:"",
        adharno:"",
        mobileNo:""

    })
    const [records, setRecords] = useState([]);
    const handleInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setuserRegisteration({...userRegisteration,[name]:value})

    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        const newRecords={...userRegisteration , id: new Date().getTime().toString()}
        console.log(records)
        setRecords([...records,newRecords])
        console.log(records)

        setuserRegisteration({fullname:"", age:"",adharno:"",mobileNo:""});

    }
    return (
        <>
            <div className="container" >

                <form action="" onSubmit={handleSubmit}>
                    <div className="my-3" style={myStyle}>
                        <label htmlFor="fullname">Full Name :</label>
                        <input type="text" autoComplete="off"
                            value={userRegisteration.fullname}
                            onChange={handleInput}
                            name="fullname" id="username"></input>
                    </div>
                    <div className="my-3" style={myStyle}>
                        <label  htmlFor="age">Age : </label>
                        <input style={{marginLeft:"45px"}} type="number" autoComplete="off"
                            value={userRegisteration.age}
                            onChange={handleInput}
                            name="age" id="age"></input>
                    </div>
                    <div className="my-3" style={myStyle}>
                        <label htmlFor="adhaarno">Adhaar No :</label>
                        <input type="number" autoComplete="off"
                            value={userRegisteration.adharno}
                            onChange={handleInput}
                            name="adharno" id="adharno"></input>
                    </div>
                    <div className="my-3" style={myStyle}>
                        <label htmlFor="mobileNo">Mobile No :</label>
                        <input type="number" autoComplete="off"
                            value={userRegisteration.mobileNo}
                            onChange={handleInput}
                            name="mobileNo" id="Mobile No"></input>
                    </div>
                    <button className="btn btn-success" type="submit">Submmit</button>

                </form>
                <br />

                <div>
                    {
                        records.map((curElem) =>{
                            return(
                                <div className="container" style={{display:"flex",border:"2px solid black"}}>

                                    <div>  <p style={{padding:"10px",marginLeft:"20px"}}>{curElem.id}</p></div>

                                    <div>  <p style={{padding:"10px",marginLeft:"20px"}}>{curElem.fullname}</p></div>
                                    <div>  <p style={{padding:"10px",marginLeft:"50px"}}>{curElem.age}</p></div>
                                    <div>  <p style={{padding:"10px",marginLeft:"50px"}}>{curElem.adharno}</p></div>
                                    <div>  <p style={{padding:"10px",marginLeft:"50px"}}>{curElem.mobileNo}</p></div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
