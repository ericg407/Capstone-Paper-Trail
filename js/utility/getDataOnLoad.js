const apiKey =
    import.meta.env.VITE_API_KEY; //API Key hidden

export const getDataOnLoad = async(candCID) => {
    const summaryURL = `https://www.opensecrets.org/api/?method=candSummary&cid=${candCID}&cycle=2022&apikey=${apiKey}&output=json`;

    const summaryResponse = await (await fetch(summaryURL)).json();
    // const summaryData = await summaryResponse.json();
    const summaryDataFormat = summaryResponse.response.summary['@attributes'];
    // summaryDataFormat output: cand_name, cid, cycle, state, party, chamber, first_elected, next_election, spent, cash_on_hand, debt, origin, source, last_updated, total

    const contribURL = `https://www.opensecrets.org/api/?method=candContrib&cid=${candCID}&cycle=2022&apikey=${apiKey}&output=json`;

    const contribResponse = await fetch(contribURL);
    const contribData = await contribResponse.json();
    // const contribDataFormat = contribData.response.contributors.contributor;
    // contribDataFormat output: org_name, total, pacs, indivs

    const resultGrid = document.getElementById('result-grid');
    const resultItem = document.createElement('div');
    resultItem.classList.add('result-grid__item');

    const cImageURL = `https://cdn1.opensecrets.org/congress-members/photos/${summaryDataFormat.cid}.jpg`;

    resultItem.innerHTML = `
    <search-result
      result-img="${cImageURL}"
      result-name="${summaryDataFormat.cand_name}"
      result-position="${summaryDataFormat.chamber}"
      result-state="${summaryDataFormat.state}"
      result-party="${summaryDataFormat.party}"
    ></search-result>
  `;

    resultGrid.append(resultItem);
};