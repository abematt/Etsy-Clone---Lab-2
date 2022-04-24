import axios from "axios"

const BASE_URL = "http://localhost:3001/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjFmMTZkNzQ4ZjMwN2ZlM2U3YWI2OCIsImlhdCI6MTY1MDc4MDE5MSwiZXhwIjoxNjUxMDM5MzkxfQ.y8IMS-YulJ3jHCY2BnKtexXCEc9Ww8R-r3rRtTCCimE"

export const publicRequest = axios.create({
    baseURL:BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})