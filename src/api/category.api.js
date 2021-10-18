import http from '../components/utils/http'
const URL = 'categories'
const categoryApi = {
  getCategories() {
    return http.get(URL)
  }
}

export default categoryApi
