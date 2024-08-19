import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand"  to="/"><strong>{props.title}</strong></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active"  aria-current="page" to="/"><strong>{props.home}</strong></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to="/about"><strong>{props.abouttext}</strong></Link>
          </li>
          
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <button type="button" className="btn btn-outline-warning mx-2"  onClick={props.toogle}>Yellow</button>
        <button type="button" className="btn btn-outline-danger mx-2" onClick={props.click}>Red</button>
        <button type="button" className="btn btn-outline-success mx-2" onClick={props.set}>Green</button>
        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`} >
  <input className="form-check-input"  onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Eable dark mode</label>
  
</div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title : PropTypes.string.isRequired,
abouttext: PropTypes.string.isRequired}

Navbar.defaultProps = {
    title: 'i am deavnsh',
    abouttext: 'i am goat'
}


