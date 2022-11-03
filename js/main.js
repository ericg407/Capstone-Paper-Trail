import '../css/style.css';
import './components/header.js';
import './components/button.js';
import './components/search-result.js';
import { doc } from 'prettier';



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
// search_btn2.addEventListener('click', getData());


async function getData() {
    const response = await fetch(URL);
    const data = await response.json();
    const dataFormat = data.response.summary['@attributes'];
    const {
        cand_name,
        cid,
        cycle,
        state,
        party,
        chamber,
        first_elected,
        next_election,
        total,
        spent,
        cash_on_hand,
        debt,
        origin,
        source,
        last_updated
    } = dataFormat;

    // creates elements to store the data
    const resultGrid = document.getElementById("result-grid");
    const cImage = document.createElement("img");
    const cFName = document.createElement("p");
    const cLName = document.createElement("p");
    const canID = document.createElement("p");
    const cCycle = document.createElement("p");
    const cState = document.createElement("p");
    const cParty = document.createElement("p");
    const cFirst_elected = document.createElement("p");
    const cChamber = document.createElement("p");
    const cNext_election = document.createElement("p");
    const cTotal = document.createElement("p");
    const cSpent = document.createElement("p");
    const cCash_on_hand = document.createElement("p");
    const cDebt = document.createElement("p");
    const cOrigin = document.createElement("p");
    const cSource = document.createElement("p");
    const cLast_updated = document.createElement("p");


    // assigns the values from the API to the elements created
    cFName.textContent = `First Name: ${dataFormat.cand_name}`;
    cLName.textContent = `Last Name: ${dataFormat.cand_name}`;
    canID.textContent = `Canidate ID#: ${dataFormat.cid}`;
    cImage.src = `https://cdn1.opensecrets.org/congress-members/photos/${cID}.jpg`;
    cCycle.textContent = `Year: ${dataFormat.cycle}`;
    cState.textContent = `State: ${dataFormat.state}`;
    cParty.textContent = `Party: ${dataFormat.party}`;
    cChamber.textContent = `Chamber: ${dataFormat.chamber}`;
    cFirst_elected.textContent = `First Elected: ${dataFormat.first_elected}`;
    cNext_election.textContent = `Next Election: ${dataFormat.next_election}`;
    cTotal.textContent = `Total: ${dataFormat.total}`;
    cSpent.textContent = `Spend: ${dataFormat.spent}`;
    cCash_on_hand.textContent = `Cash on Hand: ${dataFormat.cash_on_hand}`;
    cDebt.textContent = `Debt: ${dataFormat.debt}`;
    cOrigin.textContent = `Origin: ${dataFormat.origin}`;
    cSource.textContent = `Source: ${dataFormat.source}`;
    cLast_updated.textContent = `Last Updated: ${dataFormat.last_updated}`;


    //add the values to the resultGrid
    resultGrid.append(cFName);
    resultGrid.append(cLName);
    resultGrid.append(canID);
    resultGrid.append(cImage);
    resultGrid.append(cCycle);
    resultGrid.append(cState);
    resultGrid.append(cParty);
    resultGrid.append(cChamber);
    resultGrid.append(cFirst_elected);
    resultGrid.append(cNext_election);
    resultGrid.append(cTotal);
    resultGrid.append(cSpent);
    resultGrid.append(cCash_on_hand);
    resultGrid.append(cDebt);
    resultGrid.append(cOrigin);
    resultGrid.append(cSource);
    resultGrid.append(cLast_updated);


    // console.log(dataFormat.cid);
    // console.log(dataFormat.cand_name);
    // console.log(dataFormat.cash_on_hand);
    // console.log(dataFormat.chamber);
    // console.log(dataFormat.party);
    // console.log(dataFormat.state);
    // console.log(dataFormat.total);
    // console.log(dataFormat.origin);
    // console.log(dataFormat.first_elected);
    // console.log(dataFormat.source);

    return dataFormat;
};



getData()
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log('error with getData response!');
        console.error(error);
    });
