import React from 'react'
import '../css/addworkerform.css'
const Addworkerform = () => {
  return (
    <div>
       <div className="container">
            <div className="row">
                <div className="col-md-6 ">
                <div className="space10"></div>
                <div className="space-recruiter"></div>
                <div className="row">
                    <div className="col">
                    <i id="form-icon-1" class="fa-solid fa-message"></i>
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
               
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col"><i id="form-icon-2" class="fa-solid fa-anchor"></i></div>
                    <div className="col"></div>
                
                </div>
                <div className="row">
                    <div className="col"><i id="form-icon-3" class="fa-brands fa-twitter"></i></div>
                    <div className="col"></div>
                    <div className="col"></div>
                
                </div>
                <div className="spacehalf"></div>
                </div>
                <div className="col-md-6">
                <div className="space5"></div>
                    <div className="owner-form">
                    <div className="space5"></div>
                    <h2 className='owner-head'>WORKER FORM</h2>
                    <div className="space10"></div>
                    <div className="roll-on">
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">NAME</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='Logasubramani' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                          </div>  
                         

                          <div className="space5"></div>
                          <div className="row">
                              <div className="col-md-3"></div>
                              <div className="col-md-3">
                                  <label class="label-name">DOB</label>
                              </div>
                              <div className="col-md-3"><input class="label-box" type="date" placeholder='' maxLength={30} /> </div>
                              <div className="col-md-3"></div>
                          </div> 

                     


                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">BLOOD GROUP</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='0+VE' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                          </div> 


                          <div className="space5"></div>
                          <div className="row">
                              <div className="col-md-3"></div>
                              <div className="col-md-3">
                                  <label class="label-name">GENDER</label>
                              </div>
                              <div className="col-md-3"><input class="label-box" type="text" placeholder='FEMALE' maxLength={30} /> </div>
                              <div className="col-md-3"></div>
                          </div> 



                          <div className="space5"></div>
                          <div className="row">
                              <div className="col-md-3"></div>
                              <div className="col-md-3">
                                  <label class="label-name">PRESENT IN 100 DAYS SCHEME</label>
                              </div>
                              <div className="col-md-3"><input class="label-box" type="text" placeholder='0+VE' maxLength={30} /> </div>
                              <div className="col-md-3"></div>
                          </div> 

                          <div className="space5"></div>
                          <div className="row">
                              <div className="col-md-3"></div>
                              <div className="col-md-3">
                                  <label class="label-name">PHYSICALLY CHALLENGED</label>
                              </div>
                              <div className="col-md-3"><input class="label-box" type="text" placeholder='YES/NO' maxLength={30} /> </div>
                              <div className="col-md-3"></div>
                          </div>

                          <div className="space5"></div>
                          <div className="row">
                              <div className="col-md-3"></div>
                              <div className="col-md-3">
                                  <label class="label-name">MARITAL STATUS</label>
                              </div>
                              <div className="col-md-3"><input class="label-box" type="text" placeholder='SINGLE/MARRIED' maxLength={30} /> </div>
                              <div className="col-md-3"></div>
                          </div>

                          <div className="space5"></div>
                          <div className="row">
                              <div className="col-md-3"></div>
                              <div className="col-md-3">
                                  <label class="label-name">AADHAR NUMBER</label>
                              </div>
                              <div className="col-md-3"><input class="label-box" type="text" placeholder='6750 4355 8907' maxLength={30} /> </div>
                              <div className="col-md-3"></div>
                          </div>

                          <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">TYPE OF WORKER </label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='FARMING' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div> 

                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name"> VILLAGE </label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="number" placeholder='DHARMAPURI' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div> 

                          <div className="space5"></div>
                          <div className="row">
                              <div className="col-md-3"></div>
                              <div className="col-md-3">
                                  <label class="label-name">ADDRESS</label>
                              </div>
                              <div className="col-md-3"><input class="label-box" type="text" placeholder='NO 1 SUNDARAM NAGAR MADAHAVARM' maxLength={30} /> </div>
                              <div className="col-md-3"></div>
                          </div> 


                          <div className="space5"></div>
                          <div className="row">
                              <div className="col-md-3"></div>
                              <div className="col-md-3">
                                  <label class="label-name">MIGRATION</label>
                              </div>
                              <div className="col-md-3"><input class="label-box" type="text" placeholder='YES/NO' maxLength={30} /> </div>
                              <div className="col-md-3"></div>
                          </div>

                          <div className="space5"></div>
                    
                          <div className="space5"></div>
                          <div className="row">
                              <div className="col-md-3"></div>
                              <div className="col-md-3">
                                  <label class="label-name">MODE OF DELIVERY</label>
                              </div>
                              <div className="col-md-3"><input class="label-box" type="number" placeholder='SMS/POST' maxLength={30} /> </div>
                              <div className="col-md-3"></div>
                          </div> 

                          <div className="space5"></div>
                          <div className="row">
                              <div className="col-md-3"></div>
                              <div className="col-md-3">
                                  <label class="label-name">PHONE NUMBER</label>
                              </div>
                              <div className="col-md-3"><input class="label-box" type="text" placeholder='9790778113' maxLength={30} /> </div>
                              <div className="col-md-3"></div>
                          </div>


                          <div className="space5"></div>
                          <div className="row">
                              <div className="col-md-3"></div>
                              <div className="col-md-3">
                                  <label class="label-name">BANK NAME</label>
                              </div>
                              <div className="col-md-3"><input class="label-box" type="text" placeholder='AXIS BANK' maxLength={30} /> </div>
                              <div className="col-md-3"></div>
                          </div> 

                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">BANK ACCOUNT NUMBER</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="text" placeholder='567756789078456' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                    </div> 

                    <div className="space5"></div>
                    <div className="row"> 
                    <div className="col-md-3"></div>
                    <div className="col-md-3">                  
                    <label class="label-name">BANK IFSC CODE</label> 
                    </div> 
                    <div className="col-md-3"><input class="label-box"type="number" placeholder='DFYT76546890' maxLength={30}/> </div> 
                    <div className="col-md-3"></div>
                          </div> 

                                               

                          <div className="space5"></div>
                          <div className="row">
                              <div className="col-md-3"></div>
                              <div className="col-md-3">
                                  <label class="label-name">BANK BRANCH</label>
                              </div>
                              <div className="col-md-3"><input class="label-box" type="number" placeholder='PERAMBUR' maxLength={30} /> </div>
                              <div className="col-md-3"></div>
                          </div> 

                    <div className="space10"></div>
                    <div className="row">
                        <div className="col"></div>
                      
                        <div className="col"><button className='owner-form-submit'>Submit</button></div>
                    <div className="col"></div>
                    </div>
                    </div>
                    </div>  
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addworkerform