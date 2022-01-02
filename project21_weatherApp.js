//  All declarations  

const apiKey = '767cccfe274b6ae27827f6590b053095';
const main = document.getElementById(`main`);
const addCityForm = document.getElementById(`addCityForm`);
const addCityFormSubmitBtn = document.getElementById(`addCityFormSubmitBtn`);
const CityName = document.getElementById(`CityName`);
const cityList = document.getElementById(`cityList`);
const cities = document.getElementsByClassName(`cities`);
var city = "Indore";

//  Calling showCity function 
showCity();

//  On window Load 

window.addEventListener(`load`, () => {
    getWeatherByLocation(city);
})

//  when user click on the Add city button 

addCityFormSubmitBtn.addEventListener(`click`, (e) => {
    e.preventDefault();
    let City = CityName.value;
    if (City != "") {
        console.log("fire")
        City = City.replace(City[0], City[0].toUpperCase())
        let myCities = localStorage.getItem(`myCities`);
        if (myCities == null) {
            myCitiesObj = [];
        } else {
            myCitiesObj = JSON.parse(myCities);
        }
        myCitiesObj.push(City);
        localStorage.setItem("myCities", JSON.stringify(myCitiesObj));
        console.log(localStorage);
        CityName.value = "";
        showCity();
    }
})

//  Declaration of showCity function

function showCity() {
    let myCities = localStorage.getItem(`myCities`);
    if (myCities == null) {
        myCitiesObj = [];
    } else {
        myCitiesObj = JSON.parse(myCities);
    }
    let html = "";
    myCitiesObj.forEach(function (element, index) {
        html +=
            `<li><button class="cities" id="${element}" onclick="getWeatherByLocation(this.id)">${element}</button>
        <button class="btn" id="${index}" onclick="deleteCity(this.id)">X</button></li>`
    });
    if (myCitiesObj.length != 0) {
        cityList.innerHTML = html;
    }
    else {
        cityList.innerHTML = "Indore city is set as default City, No City to show here";
    }
}

//  Declaration of deleteCity function

function deleteCity(index) {
    let myCities = localStorage.getItem(`myCities`);
    if (myCities == null) {
        myCitiesObj = [];
    } else {
        myCitiesObj = JSON.parse(myCities);
    }
    myCitiesObj.splice(index, 1);
    localStorage.setItem("myCities", JSON.stringify(myCitiesObj));
    showCity();
}

//  for of loop for All cities

for (const C of cities) {
    C.addEventListener(`click`, () => {
        city = C.innerText;
        getWeatherByLocation(city);
    })
}

//   Declaration of url

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//  Declaration of getWeatherByLocation function

async function getWeatherByLocation(citty) {
    city = citty;
    const resp = await fetch(url(city));
    const respData = await resp.json();
    addWeatherToPage(respData);
}

//  Declaration of addWeatherToPage function

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);
    const weather = document.createElement(`div`)
    weather.classList.add(`weather`);
    weather.innerHTML = `
    <h2>${city}</h2>
    <h3><img src = 'https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'/>
    ${temp}&#8451
    <img src = 'https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'/>
    </h3>
    <small>${data.weather[0].main}</small>
    `;
    
    // cleanup
    main.innerHTML = '';
    main.appendChild(weather);
};

//  Declaration of KtoC function

function KtoC(k) {
    return Math.floor(k - 273.15);
}


