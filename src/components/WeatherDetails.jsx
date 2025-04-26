export default function WeatherDetails({humidity, windSpeed}) {
    // const dataCuaca = dataWeather
    return (
        <div className='weather-details'>
            <div>
                <p>Humidity</p>
                <p>{humidity} %</p>
            </div>
            <div>
                <p>Wind Speed</p>
                <p>{windSpeed} mph</p>
            </div>
        </div>
    )
}