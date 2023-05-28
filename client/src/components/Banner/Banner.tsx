import React from 'react'
import Confidence from '../../assets/confidence.jpeg';

function Banner() {
  return (
    <div>
        <section className="hero is-large has-background banner">
            <div className="hero-body">
                <p className="title has-text-white">
                Live with Confidence
                </p>
                <br />
                <p className="subtitle has-text-white">
                José Mourinho brings confidence to pan-African Sanlam campaign.
                </p>
                <br />
                <button className='button is-rounded bannerButton'>
                    View project
                </button>
            </div>
        </section>
    </div>
  )
}

export default Banner