import '../css/style.css';
import './components/header.js';
import './components/button.js';
import './components/search-result.js';

import { getData } from './api.js';
import { getLegislators, searchCName } from './getLegislator.js';

getLegislators();

const candidateSearchBtn = document.getElementById('hero-search_btn');

candidateSearchBtn.addEventListener('click', (evt) => {
  evt.preventDefault();

  var searchNameInput = document.getElementById('hero-search__name').value;
  console.log(searchNameInput);

  var cid = searchCName();

  getData(cid);
});
