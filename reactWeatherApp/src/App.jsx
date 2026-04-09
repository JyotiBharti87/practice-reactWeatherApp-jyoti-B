import { useState } from "react";
import CityList from "./CityList";
import CityForcast from "./CityForecast";
import "./App.css";
function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const cities = ["NewYork", "London", "Tokyo", "Dubai", "Mumbai"];
  return (
    <div className="app">
      <h1>React Weather App</h1>
      <CityList cities={cities} onCityClick={setSelectedCity} />
      <CityForcast city={selectedCity} clearCity={() => setSelectedCity("")} />
    </div>
  );
}
export default App;
