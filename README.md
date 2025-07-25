# 🌤️ Weather App — Vue 3 + TypeScript

A sleek and responsive weather application built with **Vue 3**, **TypeScript**, and **Vuetify**, integrated with [weatherapi.com](https://www.weatherapi.com/) to provide real-time and forecast weather data.

---

## ✨ Features

- 🔍 **Weather display** for selected cities (default: **Gliwice** and **Hamburg**)
- ➕ **Add new cities** via input field
- ❌ **Remove individual city cards**
- 🔁 **Refetch weather data** manually per city
- 🌡️ **Toggle temperature units**: **Celsius ↔ Fahrenheit**
- 📅 **6-day forecast** for each city
- ⚠️ **Error handling** for failed data fetches (with retry support)
- ✅ **Input validation**: prevents duplicate cities from being added

---

## 🛠 Technologies Used

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vuetify](https://vuetifyjs.com/)
- [WeatherAPI](https://www.weatherapi.com/) — external weather data provider

---

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/PatrykJarzynka/NubiWeather.git
   cd weather-app
   
2. **Install dependencies:**
    
    ```bash
   npm install

3. **Create a .env.local file with your API key:**<br/>
    *You can obtain your API key from https://www.weatherapi.com/*

   ```bash
   VITE_WEATHER_API_KEY=your_api_key_here

2. **Run the app locally:**

    ```bash
   npm run dev

## ✅ Validation & UX
- Trying to add a city that is already on the list will show a validation error.

- If weather data fetching fails, an error message and retry button are displayed.

## 🔄 Refresh & Removal
- ❌ A button to remove the city

- 🔄A manual refetch button to refresh data

## License
MIT