async function spanishLanguage() {
  const data = await fetch('https://restcountries.eu/rest/v2/lang/es');
  const countries = await data.json();
  console.log(countries.filter((val) => val.region === 'Europe'));
}
spanishLanguage();
