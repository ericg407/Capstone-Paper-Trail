import '../css/style.css';
import './components/header.js';
import './components/button.js';
import './components/search-result.js';

import { getData } from './utility/getData.js';
import { searchCandName } from './utility/getLegislators.js';

const candidateSearchBtn = document.getElementById('hero-search_btn');

candidateSearchBtn.addEventListener('click', (evt) => {
  evt.preventDefault();

  var searchNameInput = document.getElementById('hero-search__name');

  var cid = searchCandName(searchNameInput.value);

  getData(cid);

  searchNameInput.value = '';
  searchNameInput.focus();
});
