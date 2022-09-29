const axios = require('axios').default

export default function useApi() {
  const baseApiUrl = 'https://api.adoptez1artisan.com/'

  axios.defaults.baseURL = baseApiUrl

  const token = localStorage.getItem('token')
  if (token) {
    console.log('>> TOKEN MEVCUT ', token)

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  return axios
}

// import React from 'react'
// const axios = require('axios').default

// const useApi = () => {
//   const baseApiUrl = 'https://api.adoptez1artisan.com/'

//   axios.defaults.baseURL = baseApiUrl

//   const token = localStorage.getItem('token')

//   if (token) {
//     console.log('token mevcut', token)

//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//   }

//   return axios
// }

// export default useApi

// import React from 'react'
// import App from '../App'

// const axios = require('axios').default

// export default function useApi() {
//   const baseApiUrl = 'https://api.adoptez1artisan.com/'

//   axios.defaults.baseURL = baseApiUrl

//   const token = localStorage.getItem('token')

//   if (token) {
//     console.log('token mevcut', token)

//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//   }
//   return axios
// }
