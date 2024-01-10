import React from 'react'
import quillx from '../assets/quillx.png'

export default function Navbar() {
  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="/"><img src={quillx} alt="QuillX"/></a>
    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-dark navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-light" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu bg-dark">
            <li><a className="dropdown-item text-light" href="/">Business</a></li>
            <li><a className="dropdown-item text-light" href="/">Entertainment</a></li>
            <li><a className="dropdown-item text-light" href="/">General</a></li>
            <li><a className="dropdown-item text-light" href="/">Health</a></li>
            <li><a className="dropdown-item text-light" href="/">Science</a></li>
            <li><a className="dropdown-item text-light" href="/">Sports</a></li>
            <li><a className="dropdown-item text-light" href="/">Technology</a></li>
          </ul>
          </li>
          </ul>
          
    </div>
  </div>
</nav>
      
    </>
  )
}
