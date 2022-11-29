let comparatorHigh = (a, b) => {
  if (a.dataset.total < b.dataset.total) return 1;
  if (a.dataset.total > b.dataset.total) return -1;

  return 0;
};

let comparatorLow = (a, b) => {
  if (a.dataset.total > b.dataset.total) return 1;
  if (a.dataset.total < b.dataset.total) return -1;

  return 0;
};

export let sortDataHigh = () => {
  let totals = document.querySelectorAll('.result-grid__item');
  console.log(totals);

  let totalsArray = [];
  totals.forEach((t) => {
    console.log(t.dataset.total);

    totalsArray.push(t.dataset.total);
  });
  console.log(totalsArray);

  let sorted = totalsArray.sort(comparatorHigh);
  sorted.forEach((e) => {
    document.querySelector('#result-grid__inner').appendChild(e);
  });
};

export let sortDataLow = () => {
  let totals = document.querySelectorAll('.result-grid__item');
  console.log(totals);

  let totalsArray = [];
  totals.forEach((t) => {
    console.log(Number(t.dataset.total));

    totalsArray.push(Number(t.dataset.total));
  });
  console.log(totalsArray);

  let sorted = totalsArray.sort(comparatorLow);
  sorted.forEach((e) => {
    document.querySelector('#result-grid__inner').appendChild(e);
  });
};
