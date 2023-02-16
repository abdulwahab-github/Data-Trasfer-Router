import React from 'react'
import { useLocation } from 'react-router-dom'
function DataPage() {
  const location = useLocation();
  console.log(location)
  return (
    <>
    <div className='wellcome'>
      <h1 className=' py-5 px-5 text-center'>Wellcome to Sir {location.state.fname} </h1>
</div>


      <div className='pt-5 mt-5 mx-auto cl-black  data'>
        <h1 className='text-center pb-4'>Data Of User</h1>
        <h2 className='text-center' >Name : {location.state.fname}</h2>
        <h2 className=' text-center'>Contact: {location.state.lname}</h2>
        <h2 className=' pb-5 text-center'>Email : {location.state.email}</h2>
      </div>
    </>
  )
}

export default DataPage
