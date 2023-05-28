import axios from 'axios';


const getBannerBaseUrl = () => {
	if (window.location.hostname === 'localhost') {
		return `http://localhost:5000`;
	}

	return `http://localhost:5000`;
};

const bannerInstance = axios.create({
	baseURL: getBannerBaseUrl(),
});

bannerInstance.defaults.headers.common['Accept'] = 'application/json';
bannerInstance.defaults.headers.post['Content-Type'] = 'application/json';

export default bannerInstance;