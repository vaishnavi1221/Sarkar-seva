import React from 'react'
import '../css/villageinfo.css'

const Villageinfo = () => {
  return (
    <div>
        <div className="space5"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className='village-info-head'> USULAMBATI PEOPLE DATA</h1>
                </div>

              
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <input className='village-info-field' type="text" placeholder='Filter' />
                </div>
            </div>
            <hr />
            <div className="space5"></div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    
                    {/* SINGLE NOTIFICATION */}
                    <div class="accordion" id="accordionExample">
                    <div className="space1"></div>
                    <div id="one-notification" class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <div className="row">
                        <button id="notification-btn"class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <div className="col-md-4">
                        <input className='radio-type' type="radio"/> RAMESH
                        </div>
                        <div className="col-md-4"><input className='radio-type-1' name='1' type="radio"/> PRESENT</div>
                        <div className="col-md-4"><input className='radio-type-2' name='1' type="radio"/> ABSENT</div>
                        </button>
                        </div>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            {/* VILLAGE INFO CONTENT */}
                           <div className="row">
                            <div className="col">
                                <p className='village-info-para'>Name : chinrasu</p>
                                <p className='village-info-para'>Martial Status : single</p>
                                <p className='village-info-para'>Type of worker : Farming</p>
                            </div>
                            <div className="col"> <p className='village-info-para'>Age : 35</p>
                            <p className='village-info-para'>Phone number : 9790778113</p>
                            <p className='village-info-para'>Location : chennai</p>
                            </div>
                            <div className="col"> <p className='village-info-para'>Gender : Male</p>
                            <p className='village-info-para'>Pincode : 600-125</p>
                            <p className='village-info-para'>100-day work : Yes</p>
                            </div>
                           </div>
                            {/* VILLAGE INFO CONTENT */}
                        </div>
                        </div>
                    </div>
                    <div className="space1"></div>
                    <div id="one-notification" class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <div className="row">
                        <button id="notification-btn" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <div className="col-md-4">
                        <input className='radio-type' type="radio"/> RAMESH
                        </div>
                        <div className="col-md-4"><input className='radio-type-1' name='2' type="radio"/> PRESENT</div>
                        <div className="col-md-4"><input className='radio-type-2' name='2' type="radio"/> ABSENT</div>
                        </button>
                        </div>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                                                        {/* VILLAGE INFO CONTENT */}
                           <div className="row">
                            <div className="col">
                                <p className='village-info-para'>Name : chinrasu</p>
                                <p className='village-info-para'>Martial Status : single</p>
                                <p className='village-info-para'>Type of worker : Farming</p>
                            </div>
                            <div className="col"> <p className='village-info-para'>Age : 35</p>
                            <p className='village-info-para'>Phone number : 9790778113</p>
                            <p className='village-info-para'>Location : chennai</p>
                            </div>
                            <div className="col"> <p className='village-info-para'>Gender : Male</p>
                            <p className='village-info-para'>Pincode : 600-125</p>
                            <p className='village-info-para'>100-day work : Yes</p>
                            </div>
                           </div>
                            {/* VILLAGE INFO CONTENT */}
                        </div>
                        </div>
                    </div>
                    <div className="space1"></div>
                    <div id="one-notification" class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <div className="row">
                        <button id="notification-btn" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="True" aria-controls="collapseThree">
                        <div className="col-md-4">
                        <input className='radio-type' type="radio"/> RAMESH
                        </div>
                        <div className="col-md-4"><input className='radio-type-1' name='3' type="radio"/> PRESENT</div>
                        <div className="col-md-4"><input className='radio-type-2' name='3' type="radio"/> ABSENT</div>
                        </button>
                        </div>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                                                        {/* VILLAGE INFO CONTENT */}
                           <div className="row">
                            <div className="col">
                                <p className='village-info-para'>Name : chinrasu</p>
                                <p className='village-info-para'>Martial Status : single</p>
                                <p className='village-info-para'>Type of worker : Farming</p>
                            </div>
                            <div className="col"> <p className='village-info-para'>Age : 35</p>
                            <p className='village-info-para'>Phone number : 9790778113</p>
                            <p className='village-info-para'>Location : chennai</p>
                            </div>
                            <div className="col"> <p className='village-info-para'>Gender : Male</p>
                            <p className='village-info-para'>Pincode : 600-125</p>
                            <p className='village-info-para'>100-day work : Yes</p>
                            </div>
                           </div>
                            {/* VILLAGE INFO CONTENT */}
                        </div>
                        </div>
                    </div>
                    <div className="space1"></div>
                    
                    <div id="one-notification" class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <div className="row">
                        <button id="notification-btn"class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="True" aria-controls="collapseFour">
                        <div className="col-md-4">
                        <input className='radio-type' type="radio"/> RAMESH
                        </div>
                        <div className="col-md-4"><input className='radio-type-1' name='4' type="radio"/> PRESENT</div>
                        <div className="col-md-4"><input className='radio-type-2' name='4' type="radio"/> ABSENT</div>
                        </button>
                        </div>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                                                        {/* VILLAGE INFO CONTENT */}
                           <div className="row">
                            <div className="col">
                                <p className='village-info-para'>Name : chinrasu</p>
                                <p className='village-info-para'>Martial Status : single</p>
                                <p className='village-info-para'>Type of worker : Farming</p>
                            </div>
                            <div className="col"> <p className='village-info-para'>Age : 35</p>
                            <p className='village-info-para'>Phone number : 9790778113</p>
                            <p className='village-info-para'>Location : chennai</p>
                            </div>
                            <div className="col"> <p className='village-info-para'>Gender : Male</p>
                            <p className='village-info-para'>Pincode : 600-125</p>
                            <p className='village-info-para'>100-day work : Yes</p>
                            </div>
                           </div>
                            {/* VILLAGE INFO CONTENT */}
                        </div>
                        </div>
                    </div>
                    <div className="space1"></div>
                    <div id="one-notification" class="accordion-item">
                        <h2 class="accordion-header" id="headingFive">
                            <div className="row">
                        <button id="notification-btn"class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="True" aria-controls="collapseFive">
                        <div className="col-md-4">
                        <input className='radio-type' type="radio"/> RAMESH
                        </div>
                        <div className="col-md-4"><input className='radio-type-1' name='5' type="radio"/> PRESENT</div>
                        <div className="col-md-4"><input className='radio-type-2' name='5' type="radio"/> ABSENT</div>
                        </button>
                        </div>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                                                        {/* VILLAGE INFO CONTENT */}
                           <div className="row">
                            <div className="col">
                                <p className='village-info-para'>Name : chinrasu</p>
                                <p className='village-info-para'>Martial Status : single</p>
                                <p className='village-info-para'>Type of worker : Farming</p>
                            </div>
                            <div className="col"> <p className='village-info-para'>Age : 35</p>
                            <p className='village-info-para'>Phone number : 9790778113</p>
                            <p className='village-info-para'>Location : chennai</p>
                            </div>
                            <div className="col"> <p className='village-info-para'>Gender : Male</p>
                            <p className='village-info-para'>Pincode : 600-125</p>
                            <p className='village-info-para'>100-day work : Yes</p>
                            </div>
                           </div>
                            {/* VILLAGE INFO CONTENT */}
                        </div>
                        </div>
                    </div>
                        <div className="space1"></div>    
                    <div id="one-notification" class="accordion-item">
                        <h2 class="accordion-header" id="headingSix">
                        <div className="row">
                        <button id="notification-btn" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="True" aria-controls="collapseSix">
                       
                        <div className="col-md-4">
                        <input className='radio-type' type="radio"/> RAMESH
                        </div>
                        <div className="col-md-4"><input className='radio-type-1' name='6' type="radio"/> PRESENT</div>
                        <div className="col-md-4"><input className='radio-type-2' name='6' type="radio"/> ABSENT</div>
                      
                        </button>
                        </div>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                                                        {/* VILLAGE INFO CONTENT */}
                           <div className="row">
                            <div className="col">
                                <p className='village-info-para'>Name : chinrasu</p>
                                <p className='village-info-para'>Martial Status : single</p>
                                <p className='village-info-para'>Type of worker : Farming</p>
                            </div>
                            <div className="col"> <p className='village-info-para'>Age : 35</p>
                            <p className='village-info-para'>Phone number : 9790778113</p>
                            <p className='village-info-para'>Location : chennai</p>
                            </div>
                            <div className="col"> <p className='village-info-para'>Gender : Male</p>
                            <p className='village-info-para'>Pincode : 600-125</p>
                            <p className='village-info-para'>100-day work : Yes</p>
                            </div>
                           </div>
                            {/* VILLAGE INFO CONTENT */}
                        </div>
                        </div>
                    </div>
                    </div>
                            {/* SINGLE NOTIFICATION */}



                </div>
                <div className="col-md-1"></div>
            </div>
            <div className="space5"></div>
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"><button className='btn-village-edit'>Edit <i id="edit-icon" class="fa-solid fa-pen-to-square"></i></button></div>
            </div>
            <div className="space5"></div>
        </div>

    </div>
  )
}

export default Villageinfo