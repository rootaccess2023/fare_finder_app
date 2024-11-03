import axios from "axios";

// Base URL
const api = axios.create({
    baseURL: "http://localhost:3000",
})

export const fetchStations = async (line: 'lrt1' | 'lrt2' | 'mrt3') => {
    const response = await api.get(`/${line}`)
    return response.data;
}