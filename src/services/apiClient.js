import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "1aeb9e10242be6f1fc15dbaebc5ca102",
  },
});

class APIClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }
  getWeather = (locationObj) => {
    return axiosInstance
      .get(this.endpoint, locationObj)
      .then((res) => res.data);
  };
}

export default APIClient;
