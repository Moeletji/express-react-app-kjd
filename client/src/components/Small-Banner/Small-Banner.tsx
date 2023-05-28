import React from 'react';
import Rectangle from '../../assets/Rectangle 1.svg';

function SmallBanner(props: {card: string, title: string, subTitle: string}) {
  return (            
    <section className={`hero ${props.card}`}>
        <div className="hero-body">
            <img src={Rectangle} alt='Rectangle' />
            <p className="title has-text-white">
            {props.title}
            </p>
            <p className="subtitle has-text-white">
            {props.subTitle}
            </p>
        </div>
    </section>
  )
}

export default SmallBanner;