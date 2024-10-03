import React from 'react'
import {Link} from "react-router-dom"

function Header({ title, thirdContent }) {
  return (
    <>
      {/* <!-- Header Start --> */}
      <div id="header" className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h1 className="text-white display-3 mb-4">{title}</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link to="/">
                <a>Home</a>
              </Link></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item active text-white">{thirdContent}</li>
          </ol>
        </div>
      </div>
      {/* <!-- Header End --> */}
    </>
  )
}

export default Header