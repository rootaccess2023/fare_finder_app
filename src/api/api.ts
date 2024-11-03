import axios from "axios";

// Base URL
const api = axios.create({
    baseURL: "http://localhost:3000",
})


// Fetching stations
export const fetchStations = async (line: 'lrt1' | 'lrt2' | 'mrt3') => {
    const response = await api.get(`/${line}`)
    return response.data;
}

// Fetching fare
export const fetchFare = async (line: string, startStation: number, endStation: number) => {
    const response = await api.get(`/${line}/fare`, {
        params: {
          start_station: startStation,
          end_station: endStation,
        },
      });
    return response.data;
}