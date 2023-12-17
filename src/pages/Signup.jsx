import React from 'react'
import '../css/Signup.css'
import Imagesign from '../assests/images/sign.jpeg'

const Signup = () => {
  return (
    <div className='back-color'>
              <div className="container">
          <div className="space5"></div>
          <div className="row">
            <div className="col">
              <img className='login-image-1' src={Imagesign} alt="" />
            </div>
            <div className="col">
              <div className="space10"></div>
                <div className="form">
                  <form>
                    <h3 className='login-head'>SIGNUP</h3>
                   
                    <p className='tagline'>Welcome to SarkarSeva</p>
          
                    {/* SINGLE FIELD */}
                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">NAME</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='Logasubramani' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div>               
                    {/* SINGLE FIELD */}


                    {/* SINGLE FIELD */}
                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">USERNAME</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='loga_007' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div>               
                    {/* SINGLE FIELD */}
                    {/* SINGLE FIELD */}
                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">DOB</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="date" placeholder='loga_007' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div>               
                    {/* SINGLE FIELD */}
                    {/* SINGLE FIELD */}
                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">State</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='tamilnadu' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div>               
                    {/* SINGLE FIELD */}
                    {/* SINGLE FIELD */}
                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">district</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='chennai' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div>               
                    {/* SINGLE FIELD */}

                    {/* SINGLE FIELD */}
                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">PASSWORD</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='link@357' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div>               
                    {/* SINGLE FIELD */}
                    <div className="space5"></div>
                    {/*buttons and login */}
                    <div className="row">
                      <div className="col-4"></div>
                      <div className="col-4">
                        <button className='login-button'> LOGIN </button>
                      </div>
                      <div className="col-4"></div>
                    </div>
                    <div className="space5"></div>
                    <div className="row">
                        <div className="signup-tagline">
                        Already have an account?<a href="/login">Login</a>
                        </div>
                    </div>

                    {/*buttons and login */}
                    <div className="space5"></div>
                  
                  </form>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Signup