import '../css/style.css';
import './components/header.js';
import './components/button.js';
import './components/search-result.js';
import './components/search-result-profile';

import { getData } from './utility/getData.js';
import { searchCandName, getLegislators, printArrayNames, cleargetData } from './utility/getLegislators.js';



const candidateSearchBtn = document.getElementById('hero-search_btn');
getLegislators();
candidateSearchBtn.addEventListener('click', (evt) => {
    // evt.preventDefault();

    cleargetData(); // clear screen
    // getLegislators(); // load legislators
    printArrayNames(); // print names in the Array with Legislators 


    // var searchNameInput = document.getElementById('hero-search__name');
    // var cid = searchCandName(searchNameInput.value);

    // getData(cid);

    // searchNameInput.value = '';
    // searchNameInput.focus();

});