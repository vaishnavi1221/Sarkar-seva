import React from 'react'
import '../css/agriinfo.css'

const Agriinfo = () => {
  return (
    <div>
    <div className="space5"></div>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h1 className='village-info-head'> USULAMBATI LAND DATA</h1>
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
                    <p className='village-info-para'>MADHAVARAM</p>
                    </div>
                   
                    </button>
                    </div>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        {/* VILLAGE INFO CONTENT */}
                       <div className="row">
                        <div className="col">
                            <p className='village-info-para'>Place: madhavaram</p>

                        </div>
                        <div className="col"> <p className='village-info-para'>space available : 43,560</p>

                        </div>
                        <div className="col"> <p className='village-info-para'>worker needed : 100</p>

                        </div>
                       </div>
                       <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"><button className='agri-info'>Allocate</button></div>
                        <div className="col"></div>
                        
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
                    <p className='village-info-para'>MADHAVARAM</p>
                    </div>
                    </button>
                    </div>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                                                    {/* VILLAGE INFO CONTENT */}
                                                    <div className="row">
                        <div className="col">
                            <p className='village-info-para'>Place: madhavaram</p>

                        </div>
                        <div className="col"> <p className='village-info-para'>space available : 43,560</p>

                        </div>
                        <div className="col"> <p className='village-info-para'>worker needed : 100</p>

                        </div>
                       </div>
                       <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"><button className='agri-info'>Allocate</button></div>
                        <div className="col"></div>
                        
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
                    <p className='village-info-para'>MADHAVARAM</p>
                    </div>
                    </button>
                    </div>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                                                    {/* VILLAGE INFO CONTENT */}
                                                    <div className="row">
                        <div className="col">
                            <p className='village-info-para'>Place: madhavaram</p>

                        </div>
                        <div className="col"> <p className='village-info-para'>space available : 43,560</p>

                        </div>
                        <div className="col"> <p className='village-info-para'>worker needed : 100</p>

                        </div>
                       </div>
                       <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"><button className='agri-info'>Allocate</button></div>
                        <div className="col"></div>
                        
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
                    <p className='village-info-para'>MADHAVARAM</p>
                    </div>
                    </button>
                    </div>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                                                    {/* VILLAGE INFO CONTENT */}
                                                    <div className="row">
                        <div className="col">
                            <p className='village-info-para'>Place: madhavaram</p>

                        </div>
                        <div className="col"> <p className='village-info-para'>space available : 43,560</p>

                        </div>
                        <div className="col"> <p className='village-info-para'>worker needed : 100</p>

                        </div>
                       </div>
                       <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"><button className='agri-info'>Allocate</button></div>
                        <div className="col"></div>
                        
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
                    <p className='village-info-para'>MADHAVARAM</p>
                    </div>
                    </button>
                    </div>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                                                    {/* VILLAGE INFO CONTENT */}
                                                    <div className="row">
                        <div className="col">
                            <p className='village-info-para'>Place: madhavaram</p>

                        </div>
                        <div className="col"> <p className='village-info-para'>space available : 43,560</p>

                        </div>
                        <div className="col"> <p className='village-info-para'>worker needed : 100</p>

                        </div>
                       </div>
                       <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"><button className='agri-info'>Allocate</button></div>
                        <div className="col"></div>
                        
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
                    <p className='village-info-para'>MADHAVARAM</p>
                    </div>
                  
                    </button>
                    </div>
                    </h2>
                    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                                                    {/* VILLAGE INFO CONTENT */}
                                                    <div className="row">
                        <div className="col">
                            <p className='village-info-para'>Place: madhavaram</p>

                        </div>
                        <div className="col"> <p className='village-info-para'>space available : 43,560</p>

                        </div>
                        <div className="col"> <p className='village-info-para'>worker needed : 100</p>

                        </div>
                       </div>
                       <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"><button className='agri-info'>Allocate</button></div>
                        <div className="col"></div>
                        
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

export default Agriinfo