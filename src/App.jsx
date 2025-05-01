import SearchBar from './components/SeacrhBar.jsx'
import WeatherDetails from "./components/WeatherDetails.jsx";
import ForecastDetails from "./components/ForecastDetails.jsx";
import './index.css'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [saveInputCityName, setSaveInputCityName] = useState('');
    const [dataWeather, setDataWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function handleSaveInputCityName(newCityName) {
        setSaveInputCityName(newCityName); //Cara yang benar untuk menyimpan hanya 1 inputan ps. jangan lupa
    }
    console.log(saveInputCityName);

    useEffect(() => {
        if (saveInputCityName === "") return; //Validasi input kosong
        // Make GET request to fetch data
        axios
            .get("http://api.weatherapi.com/v1/forecast.json?key=a25d2e5eb1bc42e88c5110816252504&q="+ saveInputCityName + "&days=5&aqi=no&alerts=no")
            .then((response) => {
                setDataWeather(response.data); //Simpan data cuaca
                setLoading(false); //Mengatur loading ke false
                console.log(response.data);

            })
            .catch((err) => {
                setError(err.message); //Tangani pesan error
                setLoading(false); //Mengatur loading
                console.log(err);
            });
    }, [saveInputCityName]); //useEffect akan jalan ketika input berubah

    console.log(dataWeather)

    if (loading) return <div>Loading........</div> //Jika loading(true) tampilkan pesan
    if (dataWeather === null) return <SearchBar onSaveCityName={handleSaveInputCityName}/>
    if(error) return <div className='text-center'>Error: {error}</div>; //Jika error(true) tampilkan pesan

    console.log("foreCast = "  + dataWeather.forecast.forecastday);

    return (
        <>
            <SearchBar onSaveCityName={handleSaveInputCityName} cityName={dataWeather.location.name}/>
            <WeatherDetails humidity={Math.round(dataWeather.current.humidity)} windSpeed={Math.round(dataWeather.current.wind_mph)} />
            <ForecastDetails forecastData={dataWeather.forecast.forecastday} />
        </>
    )
}

export default App
