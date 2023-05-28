import bannerInstance from './config/bannerConfig';

export const getBannerData = async () => 
    await bannerInstance.get(`api/carousel-data`);