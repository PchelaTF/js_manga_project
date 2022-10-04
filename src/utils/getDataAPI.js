import axios from 'axios';

class GetDataAPI {
    async getData(url) {

        try {
            const response = await axios.get(url);

            return response.data;
            
        } catch (error) {
            console.log(error.message);

            return false;
        }
    }
}

export const getDataAPI = new GetDataAPI();