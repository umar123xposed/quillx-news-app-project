import React from 'react'
// import loading from '../assets/loading.gif'

export default function Loading() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{'height':'100vh'}}>
      {/* <img src={loading} alt="" /> */}
      <span className="loader"></span>
    </div>
  )
}
