import React from 'react'

function Breadcrumb() {
  return (
    <>
        <nav className="breadcrumb is-centered has-dot-separator" aria-label="breadcrumbs">
            <ul>
                <li><a href="#">Services</a></li>
                <li><a href="#">Industries</a></li>
                <li><a href="#">Cases</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Breadcrumb