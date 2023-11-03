import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo",
  headers: {
    "X-RapidAPI-Key": "501258d250msh3fd59566f680709p11599cjsn61f34e23d7d3",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
  params: {
    minPopulation: "50000",
    namePrefix: "lon",
    limit: "10",
    sort: "-population",
  },
});

class CitiesClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }
  getCity = (input) => {
    return axiosInstance.get(this.endpoint, input).then((res) => res.data);
  };
}

export default CitiesClient;
