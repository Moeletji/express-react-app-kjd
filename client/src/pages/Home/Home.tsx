import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import CardList from '../../components/CardList/CardList'
import SmallerBannerList from '../../components/Small-Banner-List/Smaller-Banner-List'
import IconList from '../../components/IconList/IconList'
import { getBannerData } from '../../services/bannerService'
import Rectangle from '../../assets/Rectangle 1.svg';

function Home() {
    const [bannerData, setBannerData] = useState<any>([]);
    
    useEffect(()=> {
        getBannerList().then((response:any) => setBannerData(response));
    },[])

    const getBannerList = async () => {
        const response = await getBannerData();
        return response?.data;
    } 
  return (
    <>
        <Navbar />
        <Banner />
        <br />
        <h5 className='title is-5'>
            <img src={Rectangle}  alt='Rectangle'  /> What we do
        </h5>
        <br />
        <h1 className='title is-1'>
            We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces
        </h1>
        <br />
        <CardList />
        <br />
        <h5 className='title is-5'>
            <img src={Rectangle} alt='Rectangle'  /> Case studies
        </h5>
        <br />
        <SmallerBannerList bannerList={bannerData}/>
        <br />
        <h5 className='title is-5'>
            <img src={Rectangle} alt='Rectangle'  /> You'll be in good company
        </h5>
        <br />
        <h1 className='title is-1'>
            Trusted by leading brands
        </h1>
        <br />
        <IconList />
        <br />
        <Footer />
    </>
  )
}

export default Home