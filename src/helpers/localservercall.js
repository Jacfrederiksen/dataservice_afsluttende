import axios from "axios";

const api = {
    baseUrl: 'http://localhost:5023/'
}

export const getAboutUs = () => {

    let aboutus = "aboutus"

    let response = axios.get (api.baseUrl + aboutus)
        .then(
            res => {return res.data}
        )
        .catch( fejl => {
            console.log("FEJL: ", fejl)
            return null;
        })

        return response;
}

export const getAboutServices = () => {

    let abserv = "services?limit=2"

    let response = axios.get (api.baseUrl + abserv)
        .then(
            res => {return res.data}
        )
        .catch( fejl => {
            console.log("FEJL: ", fejl)
            return null;
        })

        return response;
}

export const getMoreServices = () => {

    let services = "services"

    let response = axios.get (api.baseUrl + services)
        .then(
            res => {return res.data}
        )
        .catch( fejl => {
            console.log("FEJL: ", fejl)
            return null;
        })

        return response;
}