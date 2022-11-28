const apiKey = import.meta.env.VITE_API_KEY; //API Key hidden

export const getData = async (candArray) => {
  const resultGrid = document.getElementById('result-grid__inner');
  resultGrid.innerHTML = '';

  console.log(candArray);
  for (let i = 0; i < 4; i++) {
    let candCID = candArray[i].cid;

    const summaryURL = `https://www.opensecrets.org/api/?method=candSummary&cid=${candCID}&cycle=2022&apikey=${apiKey}&output=json`;

    const summaryResponse = await (await fetch(summaryURL)).json();
    const summaryData = summaryResponse.response.summary['@attributes'];
    // summaryData output: cand_name, cid, cycle, state, party, chamber, first_elected, next_election, spent, cash_on_hand, debt, origin, source, last_updated, total

    // const contribURL = `https://www.opensecrets.org/api/?method=candContrib&cid=${candCID}&cycle=2022&apikey=${apiKey}&output=json`;

    // const contribResponse = await (await fetch(contribURL)).json();
    // const contribData = contribResponse.response.contributors.contributor;
    // contribData output: org_name, total, pacs, indivs

    const resultItem = document.createElement('div');
    resultItem.classList.add('result-grid__item');

    const cLongName = summaryData.cand_name;
    const nameSplit = cLongName.split(',');
    var firstName = nameSplit[1];
    var lastName = nameSplit[0];

    const cImageURL = `https://cdn1.opensecrets.org/congress-members/photos/${summaryData.cid}.jpg`;

    resultItem.innerHTML = `
      <search-result
        result-img="${cImageURL}"
        result-name="${firstName} ${lastName}"
        result-position="${summaryData.chamber}"
        result-state="${summaryData.state}"
        result-party="${summaryData.party}"
        result-link="https://www.opensecrets.org/members-of-congress/summary?cid=${summaryData.cid}"
      ></search-result>
    `;

    resultGrid.append(resultItem);
  }
};

// contrib1="${contribDataFormat[0]['@attributes'].org_name} ($${contribDataFormat[0]['@attributes'].total})"
// contrib2="${contribDataFormat[1]['@attributes'].org_name} ($${contribDataFormat[1]['@attributes'].total})"
// contrib3="${contribDataFormat[2]['@attributes'].org_name} ($${contribDataFormat[2]['@attributes'].total})"
