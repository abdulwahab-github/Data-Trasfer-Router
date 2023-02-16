import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
import Login from './Login'
import { useState } from 'react';
function Sign() {
  const navigate = useNavigate();
  const [inp1, setinp1] = useState('');
  const [inp2, setinp2] = useState('');
  const [email, setemail] = useState('');
  const [password, setpass] = useState('');

  const show = (e) => {
    e.preventDefault();
    let a = {
      fname: inp1,
      lname: inp2,
      email,
      password
    }
    navigate("/login",{
      state: a
    })

  }
  return (

    <>
      <Navbar />
      <br />
      <br />
      <br />


      <div className='container sign   '>
        <div className=' row '>
          <div className='col-lg-12 md-12 col-sm-12 mt-4'>
            <div className='side mx-auto '>
              <form className='py-5 px-4 '>
                <h1 className='text-center mb-4 fw-bolder mt-2'>Sign Up</h1>
                <div class="mb-3">
                  <h4>First Name :</h4>
                  <input type="text" onChange={e => setinp1(e.target.value)} value={inp1} placeholder='First Name ' class=" form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                  <h4>Contact Number :</h4>
                  <input type="number" onChange={e => setinp2(e.target.value)} value={inp2} class="form-control" placeholder='Contact Number ' id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                  <h4>Email address :</h4>
                  <input type="email" onChange={e => setemail(e.target.value)} value={email} class="form-control" placeholder=' Email Address' id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                  <h4>Password :</h4>
                  <input  onChange={e => setpass(e.target.value)} type="password" placeholder='Password ' class="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" onClick={show} class="btn btn1 px-5  btn-primary">Submit</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Sign
