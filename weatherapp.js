const cityform = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details')


const updateui = report => {

    const temp = report.data.Temperature.Metric.Value;
    const name = report.name;
    const weather = report.data.WeatherText;

    console.log(temp, name, weather);
    details.innerHTML = `
        <h5 class="my-3">${name}</h5>
        <div class="my-3">${weather}</div>
        <div class="display-4 my-4">
            <span>${temp}</span>
            <span>&deg;C</span> 
        </div>
    `;

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
}

const updatecity = async (city) => {

    const report = await getcity(city);
    
    return report;
}

cityform.addEventListener('submit', e => {

    e.preventDefault();

    const city = e.target.city.value.trim();
    cityform.reset(); 

    updatecity(city)
    .then(report => updateui(report))
    .catch(error => console.log(error));

});