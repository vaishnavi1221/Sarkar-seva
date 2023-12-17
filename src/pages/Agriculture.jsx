import React from 'react'
import '../css/agriculture.css'

const Agriculture = () => {
  return (
    <div>
        <div className="container">
            <div className="space5"></div>
            <div className="row">
                <h2 className='village-head'>AGRICULTURAL LAND  SURVILENCE</h2>
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
                        <div className="col">
                        <p className='village-para'>
                        <a className='village-main-field-tags' href=''>usulambati</a>
                        </p>
                        </div>
                        <div className="col">
                        <p className='agri-land-count'>freeland : 43250sqft</p>
                        </div>
                        <div className="col">
                        <p className='agri-land-count'>total workers : 189</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
                
                
            </div>
            <div className="space1"></div>
            <div className="row">
                <div className="col-md"></div>
                <div className="col-md-10">
                    <div className="village-main-field">
                        <div className="row">
                        <div className="col">
                        <p className='village-para'>
                        <a className='village-main-field-tags' href=''>usulambati</a>
                        </p>
                        </div>
                        <div className="col">
                        <p className='agri-land-count'>freeland : 43250sqft</p>
                        </div>
                        <div className="col">
                        <p className='agri-land-count'>total workers : 189</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md"></div>
            </div>
            <div className="space1"></div>
            <div className="row">
                <div className="col-md"></div>
                <div className="col-md-10">
                    <div className="village-main-field">
                        <div className="row">
                        <div className="col">
                        <p className='village-para'>
                        <a className='village-main-field-tags' href=''>usulambati</a>
                        </p>
                        </div>
                        <div className="col">
                        <p className='agri-land-count'>freeland : 43250sqft</p>
                        </div>
                        <div className="col">
                        <p className='agri-land-count'>total workers : 189</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md"></div>
            </div>
            <div className="space1"></div>
            <div className="row">
                <div className="col-md"></div>
                <div className="col-md-10">
                    <div className="village-main-field">
                        <div className="row">
                        <div className="col">
                        <p className='village-para'>
                        <a className='village-main-field-tags' href=''>usulambati</a>
                        </p>
                        </div>
                        <div className="col">
                        <p className='agri-land-count'>freeland : 43250sqft</p>
                        </div>
                        <div className="col">
                        <p className='agri-land-count'>total workers : 189</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md"></div>
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

export default Agriculture