

const submitBtn = document.querySelector('#submitBtn');
const cityInput = document.querySelector('#cityInput');
const city_name = document.querySelector('#city_name');
const temp = document.querySelector('#temp');
const temp_status = document.querySelector('#temp_status');
const middlelayer = document.querySelector('.middlelayer');

const getInfo = async () => {
    const cityVal = cityInput.value;
    if (cityVal === "") {
        city_name.innerText = 'Plz write the City Name Before Search'
        middlelayer.classList.add('data_hide')

    } else {
        try {
            // real Time wether Api // http://api.openweathermap.org
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=70eefff73d1dfcf0e9ca4bfb45c3c9d2`;
            //  fetch Data using This Api 
            const response = await fetch(url)  // console.log(cityInput.value + "  =>")
            // conver into json(object) 
            const data = await response.json();
            // object insert into arry 
            const arrData = [data];
            // show data in hbs file 
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`
            temp.innerText = `${arrData[0].main.temp}°c`;
            // temp_status.innerText = arrData[0].weather[0].main
            const tempMode = arrData[0].weather[0].main;
            if (tempMode === 'Smoke') {
                temp_status.innerHTML = `<i class="fas fa-smog" style="color:#fff" title="Smoke"></i>`
            } else if (tempMode === "Clouds") {
                temp_status.innerHTML = `<i class="fas fa-cloud" style="color:#f1f2f6" title="Clouds"></i>`

            } else if (tempMode === "Rain") {
                temp_status.innerHTML = `<i class="fas fa-cloud-rain"  style="color:#a4b0be" title="Rain"></i>`

            } else if (tempMode === "clear") {
                temp_status.innerHTML = `<i class="fas fa-sun"  style="color:#eccc68" title="clear"></i>`

            } else {
                temp_status.innerHTML = `<i class="fas fa-sun"  style="color:#eccc68" title="clear"></i>`
            }

            middlelayer.classList.remove('data_hide')

        } catch {
            city_name.innerText = 'Plz Enter the City Name Properly'
            middlelayer.classList.add('data_hide')

        }
    }


}
submitBtn.addEventListener('click', getInfo)
