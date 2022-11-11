import '../css/style.css';
import './components/header.js';
import './components/button.js';
import './components/addressForm.js';

function getPollingLocation(address) {
  let apiKey = 'AIzaSyC7ntKLEV7b74cH4q2fz3qiUo5umvqO9_o';
  let partialUrl = new URL('https://www.googleapis.com/civicinfo/v2/voterinfo');
  partialUrl.searchParams.append('key', apiKey);
  partialUrl.searchParams.append('address', address);
  let url = partialUrl.toString();
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let body = document.getElementsByTagName("body")[0];
      let div = document.createElement("div");
      let locationName = document.createElement("p");
      locationName.textContent = data.pollingLocations[0].address.locationName;
      let line1 = document.createElement("p");
      line1.textContent = data.pollingLocations[0].address.line1;
      let city = document.createElement("p");
      city.textContent = data.pollingLocations[0].address.city;
      let state = document.createElement("p");
      state.textContent = data.pollingLocations[0].address.state;
      let zip = document.createElement("p");
      zip.textContent = data.pollingLocations[0].address.zip;
      div.appendChild(locationName);
      div.appendChild(line1);
      div.appendChild(city);
      div.appendChild(state);
      div.appendChild(zip);
      body.appendChild(div);
    })
    .catch((error) => {
      alert("No Election Data Available!")
    });;
}

export function getAddress() {
  // Access search button on page
  let searchButton = document.getElementsByClassName(
    'page-btn hero-search__btn',
  )[0];
  //Access form on page
  let form = document.getElementsByTagName('custom-address-form')[0];
  // Create object to store form data
  let addressData = {};
  // Add eventlistner for user button click
  searchButton.addEventListener('click', function () {
    // get size of input nodelist
    let size = form.querySelectorAll('input').length;

    for (let index = 0; index < size; index++) {
      // Loop through inputs and assign input to key.
      let key = form.querySelectorAll('label')[index].htmlFor;
      let value = form.querySelectorAll('input')[index].value;
      addressData[key] = value;
    }


    // Make address a string
    let address = '';
    for (const k in addressData) {
      address += addressData[k] + ', ';
    }
    address = address.slice(0, -2);
    getPollingLocation(address);
  });
}

