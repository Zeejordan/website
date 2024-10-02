import React from 'react'
import ProvidingServices from './ProvidingServices'

function Services() {

    const headings = ["WorldWide Tours" , "Hotel Reservations" ,"Travel Guides" , "Event Management","IELTS" , "Tours And Travels" , "Visa" , "Immigration"];
    return (
        <>
            {/* <!-- Services Start --> */}
            <div className="container-fluid bg-light service py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
                        <h5 className="section-title px-3">Services</h5>
                        <h1 className="mb-0">Our Services</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                {headings.map((element)=>{
                                    return(
                                        <ProvidingServices title={element}/>
                                    )
                                })}
                            </div>
                        </div>
                        {/* <div className="col-lg-6">
                            <div className="row g-4">
                            <ProvidingServices heading={}/>
                            </div>
                        </div> */}
                        <div className="col-12">
                            <div className="text-center">
                                <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">Service More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Services End --> */}
        </>
    )
}

export default Services