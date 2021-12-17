import axios from "axios";

const api = {
    baseUrl: 'http://api.openweathermap.org/data/2.5/',
    apiKey: '&appid=71541b7bf709e92fe50740b60e19f670'
}

//api.openweathermap.org/data/2.5/weather?q=Aarhus,8000,dk&appid=71541b7bf709e92fe50740b60e19f670

// Hent nyheder
export const weatherData = () => {

    let endpoint = 'weather?'
    let xtra = 'q=Viborg,8800,dkdk&units=metric'

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