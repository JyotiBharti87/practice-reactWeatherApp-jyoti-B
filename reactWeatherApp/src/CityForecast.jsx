import { useEffect, useRef, useState } from "react";

const weatherData = {
  NewYork: {
    summary: "Sunny, 25°C",
    details: "Clear skies throughout the day with mild temperatures.",
  },
  London: {
    summary: "Cloudy, 18°C",
    details: "Overcast with occasional light rain in the afternoon.",
  },
  Tokyo: {
    summary: "Rainy, 22°C",
    details: "Continuous rain expected throughout the day.",
  },
};

function CityForecast({ city, clearCity }) {
  const [forecast, setForecast] = useState(null);
  const detailsRef = useRef(null);
  // useEffect runs whenever the selected city changes
  useEffect(() => {
    if (!city) {
      return;
    }
    // fetch data
    const timer = setTimeout(() => {
      if (weatherData[city]) {
        setForecast(weatherData[city]);
      } else {
        setForecast({
          summary: "City not found",
          details: "No weather data is available for this city.",
        });
      }
    }, 500);

    //cleanup previous timer
    return () => clearTimeout(timer);
  }, [city]);

  if (!city) {
    return (
      <div className="forecast">
        <h2>Forecast</h2>
        <p>Please select a city.</p>
      </div>
    );
  }

  return (
    <div className="forecast">
      <h2>Forecast for {city}</h2>

      {!forecast ? (
        <p>Loading weather data...</p>
      ) : (
        <>
          <p>
            <strong>Summary:</strong> {forecast.summary}
          </p>

          <button onClick={clearCity} className="back-btn">
            Back
          </button>

          <div ref={detailsRef} className="details-box">
            <h3>Details</h3>
            <p>{forecast.details}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default CityForecast;
