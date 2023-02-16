import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react';
function Login() {
    const [loginemail, setloginemail] = useState('');
    const [password, setloginpass] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const showdata = () => {
 let a={
    fname:location.state.fname ,
    lname:location.state.lname ,
    email:location.state.email 
 }
        if (location.state.email == loginemail && location.state.password == password) {

            navigate("/data",{
                state:a
            })
        }
        else {
            alert("Please Enter Incorrect Passward or Email")
        }
    }

    return (
        <div>

            <div className='container mt-5  '>
                <div className=' row  '>
                    <div className='col-lg-12 md-12 col-sm-12 mt-5 '>
                        <div className='login py-5 px-5 mx-auto'>
                            <h1 className='text-center fw-bolder mt-2'>Log In</h1>
                            <h4 className="my-3">Email :</h4>
                            <input onChange={e => setloginemail(e.target.value)} type=" Email,number " placeholder=" Email or Phone Number" /><br />
                            <h4 className="my-3">Password :</h4>
                            <input onChange={e => setloginpass(e.target.value)} type="password" placeholder="  Pasword" required="required" class="mb-3" /><br />
                            <button class="btn ml-5 btn-primary mb-3" onClick={showdata} >Log in</button>
                            {/* <button class=" btn  btn-primary mx-4 px-5 " onClick={()=>navigate("/sign")}>Sign Up</button><br /> */}
                            <br />
                            <button onClick={() => navigate("/")} class="btn  btn-primary">Create New Account</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
