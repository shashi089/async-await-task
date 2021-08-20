async function region_asia_eruope() {
  const data_asia = await fetch('https://restcountries.eu/rest/v2/region/asia');
  const asia_countries = await data_asia.json();

  const data_europe = await fetch(
    'https://restcountries.eu/rest/v2/region/europe'
  );
  const europe_countries = await data_europe.json();

  console.log(...asia_countries, ...europe_countries);
}

region_asia_eruope();
