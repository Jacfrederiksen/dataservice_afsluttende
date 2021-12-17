import axios from "axios";

const api = {
    baseUrl: 'https://newsapi.org/v2/',
    apiKey: '&apiKey=dad0e652cf06435ba176a326ebf8cade'
}

// Hent nyheder
export const hentNyheder = () => {

    let endpoint = 'top-headlines?'
    let xtra = 'country=us&category=science'

    let response = axios.get (api.baseUrl + endpoint + xtra + api.apiKey)
        .then(
            res => {
                console.log(res);
                return res.data
            }
        )
        .catch( fejl => {
            console.log("FEJL: ", fejl)
            return null;
        })

        return response;

}

export default hentNyheder;