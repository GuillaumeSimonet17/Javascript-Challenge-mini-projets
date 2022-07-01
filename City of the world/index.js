// https://restcountries.com/v3.1/all

const cards = document.querySelector(".cards");
let countries = [];

async function fetchData() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countries = data))
  }



function displayCards() {

  cards.innerHTML = countries
    .filter((country) =>
    (country.capital ? country.capital[0] : country.translations.fra.common)

        .toLowerCase()
        .includes(searchInput.value.toLowerCase())
    )
    .map(
      (country) =>
        `
    <div class="card">
        <p>${country.capital},  ${country.translations.fra.common}</p>
    </div>
  `
    )
    .join("");
}

searchInput.addEventListener("input", displayCards);
fetchData();
