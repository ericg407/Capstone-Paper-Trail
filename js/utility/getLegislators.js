import { getData } from "./getData";
import { getDataOnLoad } from "./getDataOnLoad";

const apiKey =
    import.meta.env.VITE_API_KEY; // API Key Hidden

let legisArray = []; // inintialize array to store the list of Legislators
var stateID = document.getElementById('country-state'); //get state from combo box

export const getLegislators = async() => {
    var stateIDValue = document.getElementById('country-state').value;
    console.log('stateIDValue outside IF', stateIDValue);
    const legisURL = `https://www.opensecrets.org/api/?method=getLegislators&id=${stateIDValue}&apikey=${apiKey}&output=json`;
    const legisResponse = await (await fetch(legisURL)).json();
    const legisData = legisResponse.response.legislator;

    for (let i = 0; i < legisData.length; i++) {
        legisArray[i] = legisData[i]['@attributes'];
    }
    console.log(legisArray);

    return legisArray;
};


//prints out the list of Legislator names from the Array 
export function printArrayNames() {
    // getLegislators();

    var legisArrayCID;

    for (let i = 0; i < legisArray.length; i++) {
        legisArrayCID = legisArray[i].cid;
        getDataOnLoad(legisArrayCID);
        console.log('legisArrayCID is: ', legisArrayCID);
    }

}

//reloads after a selction is made on the drop donwlist box
stateID.addEventListener("change", function() {
    console.log('stateID Event Listner Change', stateID);
    // console.log('stateID', stateID);
    getLegislators();
    cleargetData();


    // getLegislators();
    // var legisArrayCID;

    // for (let i = 0; i < legisArray.length; i++) {
    //     legisArrayCID = legisArray[i].cid;
    //     getDataOnLoad(legisArrayCID);
    //     console.log('legisArrayCID is: ', legisArrayCID);
    // }

});

//clears the results from the page
export function cleargetData() {
    const resultGrid = document.getElementById('result-grid');
    resultGrid.innerHTML = ``;
}

// searches for the candidates names from the legislator array
export const searchCandName = (input) => {
    function findName(legisArray) {
        let searchedName = input;

        return legisArray.firstlast === searchedName;
    }

    let candIndex = legisArray.findIndex(findName);

    if (candIndex != -1) {
        console.log('FirstLast Name Index Found', candIndex);

        return legisArray[candIndex].cid;
    } else {
        console.log('FirstLast Name Index NOT Found');
        alert('Name not found, please search for another Member of Congress');

        return null;
    }
};



//get location of the user by IP address for the users state in the US
export const getLocation = async() => {
    const locationURL = 'http://ip-api.com/json';

    const locationResponse = await (await fetch(locationURL)).json();
    // console.log('locationResponse', locationResponse);
    const locationUserData = locationResponse.region;
    console.log('locationUserData', locationUserData);
    const locationUserStatus = locationResponse.status;
    console.log('locationUserStatus', locationUserStatus);

    var stateIDLocation = '';

    if (locationUserStatus === 'success') {
        stateIDLocation = getLocation.locationUserData;
        console.log('stateIDLocation  True', stateIDLocation);
        return stateIDLocation;
    }

    if (locationUserStatus != 'success') {

        stateIDLocation = document.getElementById('country-state').value;
        console.log('stateIDLocation  False', stateIDLocation);
        return null;
    }

};

getLocation();