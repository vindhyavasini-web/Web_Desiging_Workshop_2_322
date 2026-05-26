const h = React.createElement;
const { useEffect, useMemo, useState } = React;

const weatherDescriptions = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  61: "Slight rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Slight snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Rain showers",
  81: "Heavy showers",
  82: "Violent showers",
  95: "Thunderstorm"
};

const weatherImages = {
  clear: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
  cloudy: "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1600&q=80')",
  rain: "url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1600&q=80')",
  storm: "url('https://images.unsplash.com/photo-1500674425229-f692875b0ab7?auto=format&fit=crop&w=1600&q=80')",
  snow: "url('https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1600&q=80')",
  fog: "url('https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?auto=format&fit=crop&w=1600&q=80')"
};

const defaultPlace = {
  name: "Chennai",
  country: "India",
  latitude: 13.0878,
  longitude: 80.2785
};

function weatherKind(code) {
  if ([0, 1].includes(code)) return "clear";
  if ([2, 3].includes(code)) return "cloudy";
  if ([45, 48].includes(code)) return "fog";
  if ([71, 73, 75].includes(code)) return "snow";
  if (code === 95) return "storm";
  if (code >= 51) return "rain";
  return "cloudy";
}

function convertTemp(value, unit) {
  if (value === undefined || value === null) return "--";
  if (unit === "F") return Math.round((value * 9) / 5 + 32);
  return Math.round(value);
}

function formatDate(value, options) {
  return new Intl.DateTimeFormat("en", options).format(new Date(value));
}

function App() {
  const [place, setPlace] = useState(defaultPlace);
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState(localStorage.getItem("weatherUnit") || "C");
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("weatherFavorites") || "[]"));
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWeather(place);
  }, [place]);

  useEffect(() => {
    localStorage.setItem("weatherFavorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("weatherUnit", unit);
  }, [unit]);

  async function loadWeather(nextPlace) {
    setLoading(true);
    setStatus("");

    try {
      const params = new URLSearchParams({
        latitude: nextPlace.latitude,
        longitude: nextPlace.longitude,
        timezone: "auto",
        current: "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,pressure_msl",
        hourly: "temperature_2m,weather_code,precipitation_probability",
        daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset"
      });
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
      if (!response.ok) throw new Error("Weather request failed");
      setWeather(await response.json());
    } catch (error) {
      setStatus("Could not load weather. Check internet connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  async function searchPlace(event) {
    event.preventDefault();
    const search = query.trim();
    if (!search) return;

    setStatus("Searching city...");
    try {
      const params = new URLSearchParams({
        name: search,
        count: "1",
        language: "en",
        format: "json"
      });
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?${params}`);
      if (!response.ok) throw new Error("City search failed");
      const data = await response.json();
      if (!data.results || !data.results.length) {
        setStatus("No city found. Try another name.");
        return;
      }
      const result = data.results[0];
      setPlace({
        name: result.name,
        country: result.country,
        latitude: result.latitude,
        longitude: result.longitude
      });
    } catch (error) {
      setStatus("Search failed. Please try again.");
    }
  }

  function useCurrentLocation() {
    if (!navigator.geolocation) {
      setStatus("Location is not supported in this browser.");
      return;
    }

    setStatus("Requesting location permission...");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPlace({
          name: "Current Location",
          country: "Nearby",
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      () => setStatus("Location permission denied or unavailable.")
    );
  }

  function saveFavorite() {
    const exists = favorites.some((item) => item.name === place.name && item.country === place.country);
    if (exists) {
      setStatus("This place is already saved.");
      return;
    }
    setFavorites([place].concat(favorites).slice(0, 5));
    setStatus(`${place.name} saved.`);
  }

  const current = weather && weather.current;
  const kind = weatherKind((current && current.weather_code) || 2);
  const description = weatherDescriptions[(current && current.weather_code)] || "Changing conditions";

  const hourly = useMemo(() => {
    if (!weather || !weather.hourly) return [];
    return weather.hourly.time.slice(0, 12).map((time, index) => ({
      time,
      temp: weather.hourly.temperature_2m[index],
      code: weather.hourly.weather_code[index],
      rain: weather.hourly.precipitation_probability[index]
    }));
  }, [weather]);

  const daily = useMemo(() => {
    if (!weather || !weather.daily) return [];
    return weather.daily.time.map((time, index) => ({
      time,
      max: weather.daily.temperature_2m_max[index],
      min: weather.daily.temperature_2m_min[index],
      code: weather.daily.weather_code[index],
      rain: weather.daily.precipitation_probability_max[index],
      sunrise: weather.daily.sunrise[index],
      sunset: weather.daily.sunset[index]
    }));
  }, [weather]);

  if (loading && !weather) {
    return h("div", { className: "loader" }, "Loading live weather...");
  }

  return h("div", { className: "app" },
    h("div", { className: "shell" },
      h("aside", { className: "sidebar" },
        h("div", { className: "brand" },
          h("div", null,
            h("h1", null, "Weather"),
            h("span", null, "Live forecast dashboard")
          ),
          h("div", { className: "weather-mark" }, "WX")
        ),
        h("form", { className: "search-form", onSubmit: searchPlace },
          h("input", {
            value: query,
            onChange: (event) => setQuery(event.target.value),
            placeholder: "Search city",
            "aria-label": "Search city"
          }),
          h("button", { className: "primary-button", type: "submit" }, "Search")
        ),
        h("div", { className: "controls" },
          h("button", { className: "ghost-button", type: "button", onClick: useCurrentLocation }, "My Location"),
          h("select", { className: "unit-select", value: unit, onChange: (event) => setUnit(event.target.value) },
            h("option", { value: "C" }, "Celsius"),
            h("option", { value: "F" }, "Fahrenheit")
          )
        ),
        h("button", { className: "primary-button", type: "button", onClick: saveFavorite }, "Save Place"),
        h("p", { className: "status" }, status),
        h("div", { className: "places" },
          h("h2", null, "Saved Places"),
          favorites.length
            ? favorites.map((item) => h("button", {
                className: "place-button",
                key: `${item.name}-${item.country}`,
                onClick: () => setPlace(item)
              },
              h("span", null, item.name),
              h("small", null, item.country)
            ))
            : h("p", { className: "empty" }, "Saved cities will appear here.")
        )
      ),
      h("main", { className: "main-panel" },
        h("section", { className: "hero", style: { "--weather-image": weatherImages[kind] } },
          h("div", { className: "location" },
            h("h2", null, place.name),
            h("p", null, `${place.country} - ${formatDate(new Date(), { weekday: "long", month: "short", day: "numeric" })}`)
          ),
          current && h("div", { className: "temp" },
            h("strong", null, convertTemp(current.temperature_2m, unit)),
            h("span", null, `deg ${unit}`)
          ),
          h("div", { className: "summary" },
            h("h3", null, description),
            h("p", null, `Feels like ${current ? convertTemp(current.apparent_temperature, unit) : "--"} deg ${unit}. Wind is ${current ? current.wind_speed_10m : "--"} km/h.`)
          )
        ),
        h("section", { className: "metric-grid" },
          h("div", { className: "metric" }, h("span", null, "Humidity"), h("strong", null, `${current ? current.relative_humidity_2m : "--"}%`)),
          h("div", { className: "metric" }, h("span", null, "Pressure"), h("strong", null, `${current ? current.pressure_msl : "--"} hPa`)),
          h("div", { className: "metric" }, h("span", null, "Wind"), h("strong", null, `${current ? current.wind_speed_10m : "--"} km/h`)),
          h("div", { className: "metric" }, h("span", null, "Condition"), h("strong", null, description))
        ),
        h("div", { className: "content" },
          h("section", { className: "panel" },
            h("h2", { className: "section-title" }, "Next 12 Hours"),
            h("div", { className: "hourly" },
              hourly.map((item) => h("article", { className: "hour-card", key: item.time },
                h("span", null, formatDate(item.time, { hour: "numeric" })),
                h("strong", null, `${convertTemp(item.temp, unit)} deg`),
                h("span", { className: "condition-pill" }, weatherDescriptions[item.code] || "Mixed"),
                h("span", null, `${item.rain}% rain`)
              ))
            )
          ),
          h("section", { className: "panel" },
            h("h2", { className: "section-title" }, "7 Day Forecast"),
            h("div", { className: "forecast-grid" },
              daily.map((item) => h("article", { className: "forecast-card", key: item.time },
                h("h3", null, formatDate(item.time, { weekday: "short", month: "short", day: "numeric" })),
                h("span", { className: "condition-pill" }, weatherDescriptions[item.code] || "Mixed"),
                h("strong", null, `${convertTemp(item.max, unit)} deg`),
                h("div", { className: "range" }, h("span", null, "Low"), h("b", null, `${convertTemp(item.min, unit)} deg`)),
                h("div", { className: "range" }, h("span", null, "Rain"), h("b", null, `${item.rain}%`)),
                h("div", { className: "range" }, h("span", null, "Sunrise"), h("b", null, formatDate(item.sunrise, { hour: "numeric", minute: "2-digit" }))),
                h("div", { className: "range" }, h("span", null, "Sunset"), h("b", null, formatDate(item.sunset, { hour: "numeric", minute: "2-digit" })))
              ))
            )
          )
        )
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
