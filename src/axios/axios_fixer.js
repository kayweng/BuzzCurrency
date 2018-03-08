import axios from 'axios'

const fixer = axios.create({
  baseURL: 'https://api.fixer.io/'
})

export default fixer
