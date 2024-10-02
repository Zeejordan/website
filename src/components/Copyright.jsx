import React from 'react'

function Copyright() {
  return (
    <>
    {/* <!-- Copyright Start --> */}
        <div className="container-fluid copyright text-body py-4">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-end mb-md-0">
                        <i className="fas fa-copyright me-2"></i><a className="text-white" href="#">Your Site Name</a>, All right reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        {/* <!--/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. ***/}
                        {/* <!--/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, ***/}
                        {/* <!--/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". ***/}
                        Designed By <a className="text-white" href="https://htmlcodex.com">HTML Codex</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Copyright End --> */}
    </>
  )
}

export default Copyright