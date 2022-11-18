import '../css/style.css';
import './components/header.js';
import './components/button.js';
import './components/search-result.js';
import './components/search-result-profile';
import './components/footer.js';


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

// On click go to top of page
let buttonToTop = document.getElementsByClassName("menu-list__btn-text")[0];
buttonToTop.addEventListener("click", function(){
    window.scrollTo(0, 0);
})