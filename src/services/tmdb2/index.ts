import axios from 'axios'

import * as Movies from './movies'

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY ?? ''

export const tmdbClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${TMDB_API_KEY}`,
  },
})

export const tmdb = {
  movies: {
    details: Movies.details,
  },
}
