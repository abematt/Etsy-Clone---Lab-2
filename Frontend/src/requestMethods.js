import axios from "axios"

const BASE_URL = "http://localhost:3001/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjFmMTZkNzQ4ZjMwN2ZlM2U3YWI2OCIsImlhdCI6MTY1MDg2NzU0NCwiZXhwIjoxNjUxMTI2NzQ0fQ.XwUhZbHRfmyT_TYpVXKje2jiGfQM-6Nm9eSBFXIZz0E"

export const publicRequest = axios.create({
    baseURL:BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})