import axios from 'axios';

const BASE_URL = "https://api.scb.se/OV0104/v1";

class ApiService {
    constructor(url) {
        this.sender = axios.create({
            baseURL: url
        })
    }

    getCategoryInformation = async (id, method, body) => {
        const result = method ? await this.sender({
            method,
            url: "/doris/sv/ssd/START/" + (id || ""),
            data: body ? body : null
        }) : await this.sender.post("/doris/sv/ssd/START" + (id || ""));
        return result;
    }
}

export default new ApiService(BASE_URL);
