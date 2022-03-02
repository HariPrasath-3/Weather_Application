const key = 'toaFvtUwjTcEU4kcLZ2oLLNEjXEkEco0';

const getweather = async (id, name) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `?apikey=${key}`;

    const response = await fetch(base + `${id}` + query);
    const data = await response.json();

    return { data: data[0], name };
}

const getcity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    // console.log(data[0].EnglishName);
    return getweather(data[0].Key,data[0].EnglishName);
}

// getcity('dindigul')
//     .then(data => {console.log(data.WeatherText)})
//     .catch(error => console.log(error));