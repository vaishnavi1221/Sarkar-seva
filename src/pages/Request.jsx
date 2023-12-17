import React from 'react'
import '../css/request.css'
const Request = () => {
  return (
    <div>
        <div className="space5"></div>
        <div className="row">
            <h2 className='request-head'>REQUEST MAIL</h2>
        </div>
       
       <div className="container">
       <hr />
        <div className="request-box">
        <div className="space5"></div>
        <div className="row">
     
            <div className="col-md-2"></div>
            <div className="col-md-1">
                <label className='request-label'>From</label>
            </div>
            <div className="col-md-8">
                <input className='request-input' type="text"  />
            </div>
            <div className="col-md-1"></div>
        </div>

        <div className="space3"></div>
        <div className="row">
     
            <div className="col-md-2"></div>
            <div className="col-md-1">
                <label className='request-label'>To</label>
            </div>
            <div className="col-md-8">
                <input className='request-input' type="text"  />
            </div>
            <div className="col-md-1"></div>
        </div>

        <div className="space3"></div>
        <div className="row">
     
            <div className="col-md-2"></div>
            <div className="col-md-1">
                <label className='request-label'>CC</label>
            </div>
            <div className="col-md-8">
                <input className='request-input' type="text"  />
            </div>
            <div className="col-md-1"></div>
        </div>
        <div className="space3"></div>
        <div className="row">
     
            <div className="col-md-2"></div>
            <div className="col-md-1">
                <label className='request-label'>DETAILS</label>
            </div>
            <div className="col-md-8">
                <input className='request-input-desc' type="para"  />
            </div>
            <div className="col-md-1"></div>
        </div>
        <div className="space10"></div>
        <div className="row">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"><button className='request-send-btn'>Send</button></div>
            <div className="col"></div>
        </div>
        <div className="space3"></div>
        </div>
       </div>
    </div>
  )
}

export default Request