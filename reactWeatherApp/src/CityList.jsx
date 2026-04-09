function cityList({ cities, onCityClick }) {
  return (
    <div className="city-List">
      <h2>Select City from the list:</h2>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <button onClick={() => onCityClick(city)}>{city}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default cityList;
