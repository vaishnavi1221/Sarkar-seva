import React from 'react'
import '../css/villagesurvailance.css'
const Villagesurvailance = () => {
  return (
    <div>
        <div className="container">
            <div className="space5"></div>
            <div className="row">
                <h2 className='village-head'>VILLAGE UNDER YOUR SURVAILANCE</h2>
            </div>
            <hr />
            <div className="space5"></div>
            <div className="row">
                <div className="col-md-4">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                    <input class="village-field" type="text" placeholder='State'/>
                 
                </div>
                <div className="col"></div>
                </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                    <input class="village-field" type="text" placeholder='District'/>
                </div>
                <div className="col"></div>
                </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                    <input class="village-field" type="text" placeholder='Panchayat'/>
                </div>
                <div className="col"></div>
                </div>
                </div>
            </div>
            <div className="space5"></div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="village-main-field">
                    <div className="row">
                        <div className="col-md-6">
                        <p className='village-para'>                   
                        <a className='village-main-field-tags' href=''>usalambati</a>
                        </p>
                        </div>
                        <div className="col-md-3">
                        <p className='village-para'>                   
                        <a className='village-main-field-tags' href=''>Total:500</a>
                        </p>
                        </div>
                        <div className="col-md-3">
                        <p className='village-para'>                   
                        <a className='village-main-field-tags' href=''>Non-active : 200</a>
                        </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
            <div className="space1"></div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="village-main-field">
                    <div className="row">
                        <div className="col-md-6">
                        <p className='village-para'>                   
                        <a className='village-main-field-tags' href=''>Karur</a>
                        </p>
                        </div>
                        <div className="col-md-3">
                        <p className='village-para'>                   
                        <a className='village-main-field-tags' href=''>Total:500</a>
                        </p>
                        </div>
                        <div className="col-md-3">
                        <p className='village-para'>                   
                        <a className='village-main-field-tags' href=''>Non-active : 100</a>
                        </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
            <div className="space1"></div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="village-main-field">
                    <div className="row">
                        <div className="col-md-6">
                        <p className='village-para'>                   
                        <a className='village-main-field-tags' href=''>Madhavaram</a>
                        </p>
                        </div>
                        <div className="col-md-3">
                        <p className='village-para'>                   
                        <a className='village-main-field-tags' href=''>Total:500</a>
                        </p>
                        </div>
                        <div className="col-md-3">
                        <p className='village-para'>                   
                        <a className='village-main-field-tags' href=''>Non-active : 10</a>
                        </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
            <div className="space1"></div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="village-main-field">
                        <div className="row">
                        <div className="col-md-6">
                        <p className='village-para'>                   
                        <a className='village-main-field-tags' href=''>perambur</a>
                        </p>
                        </div>
                        <div className="col-md-3">
                        <p className='village-para'>                   
                        <a className='village-main-field-tags' href=''>Total:500</a>
                        </p>
                        </div>
                        <div className="col-md-3">
                        <p className='village-para'>                   
                        <a className='village-main-field-tags' href=''>Non-active : 400</a>
                        </p>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
            <div className="space5"></div>
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"><button className='btn-village-edit'>Edit <i id="edit-icon" class="fa-solid fa-pen-to-square"></i></button></div>
            </div>
        </div>
    </div>
  )
}

export default Villagesurvailance