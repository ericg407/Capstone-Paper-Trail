import '../css/style.css';
import './components/header.js';
import './components/button.js';
import './components/search-result.js';
import './components/addressForm.js';

import { getData } from './api.js';

import { getAddress } from "./getVoteLocation.js";

const searchBtn = document.getElementsByClassName('page-btn hero-search__btn')[0];


searchBtn.addEventListener('click', function() {

  if (addressForm.hidden === false) {
    getAddress();
  }
  // getData();
});


const addressForm = document.getElementsByTagName("custom-address-form")[0];
const goVoteButton = document.getElementsByClassName("menu-list__btn-text")[0];
goVoteButton.addEventListener("click",function(){
  if (addressForm.hidden === true) {
    addressForm.hidden = false;
    addressForm.disabled = false;
  } else {
    addressForm.hidden = true;
    addressForm.disabled = true;
  }
});






