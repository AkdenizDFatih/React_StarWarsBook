import axios from 'axios'


const BASE_URL = 'https://swapi.constructor-learning.com/api/'

export const swapiAxios = axios.create({
    baseURL: BASE_URL
})
