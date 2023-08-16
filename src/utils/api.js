import axios from 'axios';

export const apiCall = async () => {
    try {
        const response = await axios.get('/endpoint');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
