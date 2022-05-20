(() => {
  // elements to display values
  const rateCountsElem = document.querySelector("#rateCounts");
  const selectedRateElem = document.querySelector("#selectedRate");

  // get url
  const url = new URL(window.location.href);

  // extract url search parameters
  const urlParams = url.search.toString().replace("?", "").split("&"); // returns array

  // convert urlParams to object
  const urlParamsObj = urlParams.reduce((obj, item) => {
    let [name, value] = item.split("=");
    obj[`${name}`] = value;
    return obj;
  }, {});

  // display received values from url
  selectedRateElem.textContent = urlParamsObj.selectedRate;
  rateCountsElem.textContent = urlParamsObj.rateCounts;
})();
