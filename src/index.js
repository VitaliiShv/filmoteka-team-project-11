import './js/api';
import './js/pagination';
import axios from 'axios';
import Notiflix from 'notiflix';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
export const API_KEY = 'b77b3068ddcc2ce3ea23003328032394';
import { getTrending } from './js/getTrending.js';
import { getById } from './js/getById';

import { createMarkup } from './js/markupListMovies.js';
import './js/api';
import './js/themes';

import './js/searchByKeyWord'


import './js/modalOurTeam.js';
// import './js/local-storage/localStoragе';

