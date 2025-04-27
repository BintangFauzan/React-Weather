export default function ForecastDetails({forecastData}) {
    const dataForecast = forecastData;

    return (
        <div className='forecast'>
            <h2 className='forecast-header'>5-Days Forecast</h2>
            <div className='forecast-days'>
                {dataForecast.map((day,index) => (
                    <div key={index} className='forecast-day'>
                        <p>
                            {new Date(day.date_epoch * 1000).toLocaleDateString('en-US', {
                                weekday: 'short',
                            })}
                        </p>
                        <img src={day.day.condition.icon} alt=""/>
                    </div>
                ))}
            </div>
        </div>
    )
}