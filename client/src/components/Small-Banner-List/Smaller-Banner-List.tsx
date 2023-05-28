import React from 'react'
import SmallBanner from '../Small-Banner/Small-Banner';

function SmallerBannerList(props:{bannerList: any[]}) {
  return (
    <div className='columns'>
        <div className='column'>
            <SmallBanner key={props.bannerList[0]?.imageUrl} card='card1' title={props.bannerList[0]?.title} subTitle={props.bannerList[0]?.description}/>
        </div>
        <div className='column'>
            <SmallBanner key={props.bannerList[1]?.imageUrl} card='card2' title={props.bannerList[1]?.title} subTitle={props.bannerList[1]?.description}/>
        </div>
        <div className='column'>
            <SmallBanner key={props.bannerList[2]?.imageUrl} card='card3' title={props.bannerList[2]?.title} subTitle={props.bannerList[2]?.description}/>
        </div>
    </div>
  )
}

export default SmallerBannerList;