import '../css/style.css';
import './components/header.js';
import './components/button.js';
import { doc } from 'prettier';




// fetch('https://www.opensecrets.org/api/?method=candSummary&cid=N00007360&cycle=2022&apikey=3656e5336f1239be4dcc23527aa19e6a')
//     .then(response => {
//         return response;
//     }).then(json => {
//         console.log(json);
//     })

const apiKey =
    import.meta.env.VITE_API_KEY; //API Key hidden  3656e5336f1239be4dcc23527aa19e6a
// const cID = document.getElementById('searchName'); //N00007360  N00035278
const cName = document.getElementById('Search-btn');
const cID = 'N00035278';
const year = '2022'; // cycle or the time period 
const URL = `https://www.opensecrets.org/api/?method=candSummary&cid=${cID}&cycle=2022&apikey=${apiKey}&output=json`;
//const URL = 'https://www.opensecrets.org/api/?method=candSummary&cid=N00007360&cycle=2022&apikey=3656e5336f1239be4dcc23527aa19e6a&output=json';
const sourceURL = `https://www.opensecrets.org/members-of-congress/summary?cid=${cID}&cycle=${year}&output=json`;
const cImageURL = `https://cdn1.opensecrets.org/congress-members/photos/${cID}.jpg`;

// https://www.opensecrets.org/members-of-congress/summary?cid=N00035278&cycle=2022&output=json
// const search_btn2 = document.getElementById('search-btn');
// search_btn2.addEventListener('click', getData);




async function getData() {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.response.summary['@attributes'].cid);
    console.log(data.response.summary['@attributes'].cand_name);
    console.log(data.response.summary['@attributes'].source);

    return data;
};
async function getSourceData() {
    const response = await fetch(sourceURL);
    const data = await response.json();
    // console.log(data.response.summary['@attributes'].cid);
    // console.log(data.response.summary['@attributes'].cand_name);
    // console.log(data.response.summary['@attributes'].source);
    return data;
};


getData()
    .then(response => {
        console.log(response);
        console.log
    })
    .catch(error => {
        console.log('error with getData response!');
        console.error(error);
    })

getSourceData()
    .then(sourceResponse => {
        console.log(sourceResponse);
    })
    .catch(error => {
        console.log('error with sourceData response!');
        console.error(error);
    })
    // console.log(window)