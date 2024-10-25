import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key: 'AIzaSyBVAyOGwHjrbYAU8YeV_rflGkuMi4LZhys',
    cx: '879c1c3f65dae49ee'
}

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload }
    })
    return data
};
