import React from 'react'

function Card(props: { logo: any, title: string, subTitle: string}) {
  return (
    <div className="card card-box">
        <div className="card-content">
            <img src={props.logo} />
            <br />
            <p className="card-header-title">
            {props.title}
            </p>
            <br />
            <p className="subtitle">
            {props.subTitle}
            </p>
        </div>
    </div>
  )
}

export default Card