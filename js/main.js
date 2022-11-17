import '../css/style.css';
import './components/header.js';
import './components/button.js';
import './components/search-result.js';
import './components/state-selector.js';
import './components/us-map.js';

import { getData } from './utility/getData.js';
import { getLegislators } from './utility/getLegislators.js';
import { getState } from './components/us-map.js';

// const candidateSearchBtn = document.getElementById('hero-search_btn');

// candidateSearchBtn.addEventListener('click', (evt) => {
//   evt.preventDefault();

//   var searchNameInput = document.getElementById('hero-search__name');
//   var cid = searchCandName(searchNameInput.value);

//   getData(cid);

//   searchNameInput.value = '';
//   searchNameInput.focus();
// });

// const getState = () => {
//   var usMap = document.getElementById('us-map');
//   var allStates = usMap.querySelectorAll('g');

//   usMap.addEventListener('click', (e) => {
//     var state = e.target.parentNode;

//     if (e.target.nodeName == 'path') {
//       for (let i = 0; i < allStates.length; i++) {
//         allStates[i].classList.remove('active');
//       }

//       state.classList.add('active');
//       var stateAbbr = state.id;

//       console.log(stateAbbr);

//       getLegislators(stateAbbr);
//     }
//   });
// };

// getState();

getState(getLegislators, getData);
