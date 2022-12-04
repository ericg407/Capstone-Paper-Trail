const apiKey = import.meta.env.VITE_API_KEY; //API Key hidden

export const getData = async (candArray) => {
  const resultGrid = document.getElementById('result-grid__inner');
  resultGrid.innerHTML = '';

  for (let i = 0; i < candArray.length; i++) {
    let candCID = candArray[i].cid;

    const summaryURL = `https://www.opensecrets.org/api/?method=candSummary&cid=${candCID}&cycle=2022&apikey=${apiKey}&output=json`;
    const contribURL = `https://www.opensecrets.org/api/?method=candContrib&cid=${candCID}&cycle=2022&apikey=${apiKey}&output=json`;

    let response = await Promise.all([fetch(summaryURL), fetch(contribURL)]);
    let data = await Promise.all([response[0].json(), response[1].json()]);

    let summaryData = data[0].response.summary['@attributes'];
    // summaryData output: cand_name, cid, cycle, state, party, chamber, first_elected, next_election, spent, cash_on_hand, debt, origin, source, last_updated, total

    let contribData = data[1].response.contributors.contributor;
    // contribData output: org_name, total, pacs, indivs

    let contribTotal = () => {
      let total = 0;

      for (let t = 0; t < contribData.length; t++) {
        let contribDataTotal = Number(contribData[t]['@attributes'].total);

        total = total + contribDataTotal;
      }

      return total;
    };

    const resultItem = document.createElement('li');
    resultItem.classList.add('result-grid__item');
    resultItem.dataset.total = contribTotal();

    const cLongName = summaryData.cand_name;
    const nameSplit = cLongName.split(',');
    let firstName = nameSplit[1];
    let lastName = nameSplit[0];

    const cImageURL = `https://cdn1.opensecrets.org/congress-members/photos/${summaryData.cid}.jpg`;

    resultItem.innerHTML = `
      <search-result
        result-img="${cImageURL}"
        result-name="${firstName} ${lastName}"
        result-position="${summaryData.chamber}"
        result-state="${summaryData.state}"
        result-party="${summaryData.party}"
        result-link="https://www.opensecrets.org/members-of-congress/summary?cid=${
          summaryData.cid
        }"
        result-contrib="${contribTotal().toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}"
      ></search-result>
    `;

    resultGrid.append(resultItem);
  }
};
