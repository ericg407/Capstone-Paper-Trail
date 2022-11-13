import '../css/style.css';
import './components/header.js';
import './components/button.js';
import './components/search-result.js';

import { getData } from './components/getData.js';
import { searchCandName } from './components/getLegislators.js';

const candidateSearchBtn = document.getElementById('hero-search_btn');

candidateSearchBtn.addEventListener('click', (evt) => {
  evt.preventDefault();

  var searchNameInput = document.getElementById('hero-search__name').value;

  var cid = searchCandName(searchNameInput);

  getData(cid);
});
