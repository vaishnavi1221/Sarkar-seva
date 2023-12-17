import React from 'react'
import '../css/404page.css'

const Errorpage = () => {
  return (
    <div>
        <div className="error-container">
          <h1 className="error-title">
            <span>4</span>
            <span>0</span>
            <span>4</span>
            <span>!</span>
            
            </h1>
          <h3 className="error-sub-title">Oops! Somthing's missing</h3>
          <p className="error-descp">We're sorry. The Web address you entered is not a functioning page on our site.</p>
          <a className="back-to-home-btn" href="/">Back to home</a>
        </div>
    </div>
  )
}

export default Errorpage