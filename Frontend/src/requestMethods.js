import axios from "axios"


const BASE_URL = "http://localhost:3001/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjliZTEzMWRhNGM3YTNlZWNhN2YxMyIsImlhdCI6MTY1MTA5OTQzMSwiZXhwIjoxNjUxMzU4NjMxfQ.rLA0FFB-Ne0lu8D-WN-V1rVZ4ksKy35WaJvDbhMej88"

export const publicRequest = axios.create({
    baseURL:BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})