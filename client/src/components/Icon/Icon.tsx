import React from 'react'

function Icon(props:{image: any}) {
  return (
    <div>
        <img className='image is-128x128' src={props.image} />
    </div>
  )
}

export default Icon;