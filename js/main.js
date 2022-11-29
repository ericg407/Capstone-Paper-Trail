import '../css/style.css';
import './components/footer.js';
import './components/header.js';
import './components/button.js';
import './components/search-result.js';
import './components/state-selector.js';
import './components/us-map.js';

import { getData } from './utility/getData.js';
import { getLegislators } from './utility/getLegislators.js';
import { getState } from './components/us-map.js';
import { sortDataHigh, sortDataLow } from './utility/sortData.js';

getState(getLegislators, getData);

let resultSort = document.getElementById('result-grid__sort');

resultSort.addEventListener('change', () => {
  if (resultSort.value == 'High-To-Low') {
    sortDataHigh();
  }

  if (resultSort.value == 'Low-To-High') {
    sortDataLow();
  }
});
