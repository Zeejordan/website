import React from 'react'

const ProvidingServices = ({title}) => {
    console.log(title)
    return (
        <>
            <div className="col-lg-6 col-12">
                <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                    <div className="service-content text-start">
                        <h5 className="mb-4">{title}</h5>
                        <p className="mb-0">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                        </p>
                    </div>
                    <div className="service-icon p-4">
                        <i className="fa fa-globe fa-4x text-primary"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProvidingServices