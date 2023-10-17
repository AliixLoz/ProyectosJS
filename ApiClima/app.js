const UrlBase = "https://api.openweathermap.org/data/2.5/weather";
const ApiKey = "96b930e41d7ee9999b10976c0962a98e";
const btnCiudad = document.querySelector('#btnCiudad');
const inputCity = document.querySelector('#city');

const fetchApi = url => fetch(url).then(response => response.json());

async function getClima(lat, lon, apikey) {
    const url = `${UrlBase}?lat=${lat}&lon=${lon}&appid=${apikey}`;
    const clima = await fetchApi(url);
    console.log(clima);
    const temperature = (clima.main.temp - 273.15).toFixed(2);
    document.querySelector('#left h2').innerHTML = clima.name;
    pintaTemp(temperature);
    pintaFondo(temperature);
}

async function getClimabyCity(city, apikey){
    const url = `${ UrlBase }?q=${ city }&appid=${ apikey }`;
    const clima = await fetchApi(url);
    console.log(clima);
    const temperature = (clima.main.temp - 273.15).toFixed(2);
    document.querySelector('#left h2').innerHTML = clima.name;
    pintaTemp(temperature);
    pintaFondo(temperature);
}

function pintaTemp(temp){
    const h3 = document.querySelector('h3');
    if(temp < 15){
        h3.innerHTML = `${ temp }°C 🩵`;
    }else if(temp < 23){
        h3.innerHTML = `${ temp }°C 💛`;
    }else {
        h3.innerHTML = `${ temp }°C ❤️‍🔥`;
    }
}

function pintaFondo(temp) {
    const fondo = document.querySelector('body');
    if (temp < 15) {
        fondo.style.background = '#92e4ea';
    } else if (temp < 22) {
        fondo.style.background = '#f6f97c';
    } else {
        fondo.style.background = '#ff5555';
    }
}


navigator.geolocation.getCurrentPosition(
    positon => {
        const lat = positon.coords.latitude;
        const lon = positon.coords.longitude;
        console.log(lat, lon);
        getClima(lat, lon, ApiKey);
    }
)

btnCiudad.addEventListener('click', () => {
    const city = inputCity.value;
    if(city){
        getClimabyCity(city, ApiKey);
    }
})




