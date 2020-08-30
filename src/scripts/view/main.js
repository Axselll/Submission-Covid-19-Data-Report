import DataSource from "../data/data-source.js";
import "../component/search-bar.js";
import "../component/result.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const resultElement = document.querySelector("result-img");

  const onButtonSearchClicked = () => {
    DataSource.searchCountry(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = (results) => {
    resultElement.country = results;
  };

  const fallbackResult = (message) => {
    resultElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
