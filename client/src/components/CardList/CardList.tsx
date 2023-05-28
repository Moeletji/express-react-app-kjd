import React from 'react';
import Card from '../Card/Card';
import UX from '../../assets/UX Icon.svg';
import WebDev from '../../assets/Web Dev Icon.svg';
import Blockchain from '../../assets/Blockchain.svg';
import AppDev from '../../assets/App Dev Icon.svg';

function CardList() {
  return (
    <div className="columns">
        <div className="column">
            <Card logo={WebDev} title='Web development' subTitle='We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.' />
        </div>
        <div className="column">
            <Card logo={UX} title='User experience & design' subTitle='Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.' />
        </div>
        <div className="column">
            <Card logo={AppDev} title='Mobile app development' subTitle='Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.' />
        </div>
        <div className="column">
            <Card logo={Blockchain} title='Blockchain solutions' subTitle='We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.' />
        </div>
    </div>
  )
}

export default CardList