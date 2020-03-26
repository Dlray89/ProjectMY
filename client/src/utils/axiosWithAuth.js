import axios from "axios"

//create a axios configuration that attaches an Authorization token header to the request
//this is used when ever the applicationneeds to exchange data with a protected endpoint

//this will be imported instead of import axios from "axios"

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token,
        },
        baseURL: "http://localhost:4003"
    })
}