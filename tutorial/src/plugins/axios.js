import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTRlNmQwYTE0YjcyNTAzMmM5NjcwMzE0MDBhNTIwMiIsInN1YiI6IjY0ZmYxNWNiZmZjOWRlMGVlMDBjYzU4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U43TWeE9F0sTWXB7dIb4Tb8LT-6qHxAA8VO7Qlbtw9c`
  }
})

export default api