import '../css/style.css';
import './components/header.js';
import './components/button.js';
import './components/search-result.js';

import { getData } from './api.js';

const candidateSearchBtn = document.getElementById('search_btn');

candidateSearchBtn.addEventListener('click', (evt) => {
  evt.preventDefault();

  getData();
});
