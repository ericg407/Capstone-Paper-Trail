import '../css/style.css';
import './components/header.js';
import './components/button.js';



// const request = new XMLHttpRequest();
// request.open("GET", "https://www.opensecrets.org/api/?method=candSummary&cid=N00007360&cycle=2022&apikey=3656e5336f1239be4dcc23527aa19e6a");
// request.send();
// request.onload = () => {
//     console.log(JSON.parse(request.response));
//     // if (request.status === 200) {
//     //     console.log(JSON.parse(request.response));
//     // } else {
//     //     console.log(request)
//     //     console.log(`error ${request.status}`)
//     // }

// }

fetch('https://www.opensecrets.org/api/?method=candSummary&cid=N00007360&cycle=2022&apikey=3656e5336f1239be4dcc23527aa19e6a')
    .then(response => {
        return response;
    }).then(json => {
        console.log(json);
    })


async function getUsers() {
    let response = await fetch('https://www.opensecrets.org/api/?method=candSummary&cid=N00007360&cycle=2022&apikey=3656e5336f1239be4dcc23527aa19e6a')
    let data = await response;
    return data;
}
getUsers().then(response => {
    console.log(response)
})

// console.log(window)