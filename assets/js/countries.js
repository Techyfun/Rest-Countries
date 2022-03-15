const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = (countries) => {
const countriesHTML = countries.map((country) => getCountryHTML(country));
const container = document.getElementById('allcountries');
container.innerHTML = countriesHTML.join(' ');
}
const getCountryHTML = (country) =>{
    return`
    <div class="singlecountry">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}"/>
    </div>
    `
}
loadCountries();