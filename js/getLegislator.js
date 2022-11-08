// import '../css/style.css';
// import './components/header.js';
// import './components/button.js';
// import { doc } from 'prettier';
// require('dotenv').config();

const apiKey = import.meta.env.VITE_API_KEY; //process.env.API_KEY; //API Key hidden  3656e5336f1239be4dcc23527aa19e6a

// ****** user search input ******

// const cName = document.getElementById('Search-btn');
// let searchIndexUserIndexLName = '';
// let userIndexFLName;
// let userIndexLName;
// let cID = 'N00041843'; //searchIndexUserIndexLName; //'N00035278'; // candidate or legislator CID to reference data
// const year = '2022'; // cycle or the time period
// var searchNameIn = document.getElementById('searchName').value;
// let searchInputCFLName = ''; //'Andy Kim';
// let searchInputCLName = 'Kim'; //searchNameIn; //'Malinowski';

// ******API URL from where data is retrieved  ******
// const legislatorURL = `http://www.opensecrets.org/api/?method=getLegislators&id=NJ&apikey=${apiKey}&output=json`;
// const URL = `https://www.opensecrets.org/api/?method=candSummary&cid=${cID}&cycle=2022&apikey=${apiKey}&output=json`;
//const URL = 'https://www.opensecrets.org/api/?method=candSummary&cid=N00007360&cycle=2022&apikey=3656e5336f1239be4dcc23527aa19e6a&output=json';
// const sourceURL = `https://www.opensecrets.org/members-of-congress/summary?cid=${cID}&cycle=${year}&output=json`;
// const cImageURL = `https://cdn1.opensecrets.org/congress-members/photos/${cID}.jpg`;

// getLegislators();

//****** search button on HTML to call the funtion ******
// document.getElementById('search-btn').addEventListener('click', (e) => {
//   searchNameIn = document.getElementById('searchName').value;
//   console.log(searchNameIn);
//   var cID = searchCName();
//   console.log('cID', cID);

//   // getLegislators();
//   getData(cID); //pulls up canidate data
// });

// let legArray = []; // Array containing all the members of the legislator

// ****** Fetch the list of legislators from the API list for the 117th Congressional legislators ******
export async function getLegislators() {
  let legArray = [];
  // ******API URL from where data is retrieved  ******
  const legislatorURL = `http://www.opensecrets.org/api/?method=getLegislators&id=NJ&apikey=${apiKey}&output=json`;
  const response = await fetch(legislatorURL);
  const data = await response.json();
  const dataFormatOld = data.response.legislator;
  // console.log(dataFormatOld);

  // ****** reads through the house of legislator and stores values in Array ******
  for (let index = 0; index < dataFormatOld.length; index++) {
    legArray[index] = dataFormatOld[index]['@attributes'];
    // console.log(legArray);
  }
  console.log(legArray);
  // searchCName() // call search function to find the legislator
  return data;
}

// ****** finds the value for FirstLastName of the legislator ******
function findFirstLastName(element) {
  console.log(element);
  console.log('FirstLastName element value');
  searchInputCFLName = searchNameIn;
  console.log(searchInputCFLName);
  console.log(searchNameIn);
  return element.firstlast === searchInputCFLName;
}

// ****** finds the value for LastName of the Legislator ******
// function findLastName(element) {
//     // console.log(element)
//     // console.log("LastName element")
//     return element.lastname === searchInputCLName

// }

//******finds the Leigslators name******
export function searchCName() {
  // use filter function to get similar names -- indexof to get specific name
  // filter((element) => { /* … */ })

  // passes the value from the search in the arrary. This should be replaced with Arror function
  // userIndexFLName = legArray.findIndex(findFirstLastName); //element => findFirstLastName(element)
  userIndexFLName = legArray.findIndex(findFirstLastName); //element => findFirstLastName(element)
  // const userIndexFLNameIncludes = legArray.includes(findFirstLastName);
  // userIndexLName = legArray.findIndex(findLastName); //element => findLastName(element)

  // const userIndex = legArray.findIndex(findFirstLastName)
  console.log('userIndexFLName');
  console.log(userIndexFLName);
  // console.log("userIndexFLNameIncludes");
  // console.log(userIndexFLNameIncludes);
  // console.log(userIndexLName);

  // ****** returns information from the search on the legislator ******
  if (userIndexFLName != -1) {
    console.log('FirstLastName Index found!');
    console.log(userIndexFLName);
    console.log(legArray[userIndexFLName]);
    console.log(legArray[userIndexFLName].cid);
    console.log(legArray[userIndexFLName].firstlast);
    return legArray[userIndexFLName].cid;
  } else {
    console.log('FirstLastName Index NOT found');
    return null;
  }

  // if (userIndexLName != -1) {
  //     console.log('LastName Index found!')
  //     console.log(userIndexLName);
  //     console.log(legArray[userIndexLName]);
  //     console.log(legArray[userIndexLName].cid);
  //     console.log(legArray[userIndexLName].lastname);
  //     searchIndexUserIndexLName = legArray[userIndexLName].cid;

  // } else {
  //     console.log('LastName Index NOT found')
  // }
}
// cID = legArray[userIndexLName].cid;

// ****** User to get data from the API Provides summary fundraising information for specified politician ******
// async function getData(valueCID) {
//     // ******API URL from where data is retrieved  ******
//     const URL = `https://www.opensecrets.org/api/?method=candSummary&cid=${valueCID}&cycle=2022&apikey=${apiKey}&output=json`;
//     const response = await fetch(URL);
//     const data = await response.json();
//     const dataFormat = data.response.summary['@attributes'];
//     const {
//         cand_name,
//         cid,
//         cycle,
//         state,
//         party,
//         chamber,
//         first_elected,
//         next_election,
//         total,
//         spent,
//         cash_on_hand,
//         debt,
//         origin,
//         source,
//         last_updated
//     } = dataFormat;

//     // ****** creates elements to store the data ******
//     const resultGrid = document.getElementById("result-grid");
//     const cImage = document.createElement("img");
//     const cFName = document.createElement("p");
//     const cLName = document.createElement("p");
//     const canID = document.createElement("p");
//     const cCycle = document.createElement("p");
//     const cState = document.createElement("p");
//     const cParty = document.createElement("p");
//     const cFirst_elected = document.createElement("p");
//     const cChamber = document.createElement("p");
//     const cNext_election = document.createElement("p");
//     const cTotal = document.createElement("p");
//     const cSpent = document.createElement("p");
//     const cCash_on_hand = document.createElement("p");
//     const cDebt = document.createElement("p");
//     const cOrigin = document.createElement("p");
//     const cSource = document.createElement("p");
//     const cLast_updated = document.createElement("p");

//     // ****** spilts the canidats name into fist name and last name ******
//     const cLongName = dataFormat.cand_name;
//     const nameSplit = cLongName.split(',');
//     const fName = nameSplit[1];
//     const lName = nameSplit[0];

//     // assigns the values from the API to the elements created
//     cFName.textContent = `First Name: ${fName}`;
//     cLName.textContent = `Last Name: ${lName}`;
//     canID.textContent = `Canidate ID#: ${dataFormat.cid}`;
//     cImage.src = `https://cdn1.opensecrets.org/congress-members/photos/${valueCID}.jpg`;
//     cCycle.textContent = `Year: ${dataFormat.cycle}`;
//     cState.textContent = `State: ${dataFormat.state}`;
//     cParty.textContent = `Party: ${dataFormat.party}`;
//     cChamber.textContent = `Chamber: ${dataFormat.chamber}`;
//     cFirst_elected.textContent = `First Elected: ${dataFormat.first_elected}`;
//     cNext_election.textContent = `Next Election: ${dataFormat.next_election}`;
//     cTotal.textContent = `Total: ${dataFormat.total}`;
//     cSpent.textContent = `Spend: ${dataFormat.spent}`;
//     cCash_on_hand.textContent = `Cash on Hand: ${dataFormat.cash_on_hand}`;
//     cDebt.textContent = `Debt: ${dataFormat.debt}`;
//     cOrigin.textContent = `Origin: ${dataFormat.origin}`;
//     cSource.textContent = `Source: ${dataFormat.source}`;
//     cLast_updated.textContent = `Last Updated: ${dataFormat.last_updated}`;

//     // ****** add the values to the resultGrid ******
//     resultGrid.append(cImage);
//     resultGrid.append(cFName);
//     resultGrid.append(cLName);
//     resultGrid.append(canID);
//     resultGrid.append(cCycle);
//     resultGrid.append(cState);
//     resultGrid.append(cParty);
//     resultGrid.append(cChamber);
//     resultGrid.append(cFirst_elected);
//     resultGrid.append(cNext_election);
//     resultGrid.append(cTotal);
//     resultGrid.append(cSpent);
//     resultGrid.append(cCash_on_hand);
//     resultGrid.append(cDebt);
//     resultGrid.append(cOrigin);
//     resultGrid.append(cSource);
//     resultGrid.append(cLast_updated);

//     return dataFormat;
// };

// ****** call the fetch functions ******

// getLegislators()

// getData()
// .then(response => {
//     console.log(response);
// })
// .catch(error => {
//     console.log('error with getData response!');
//     console.error(error);
// })
