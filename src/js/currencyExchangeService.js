export default class CurrencyExchangeService {

  static async getCurrency() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/appid=${process.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}




// export default class WeatherService {

//   static async getWeather(city) {
//     try {
//       const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//       return response.json();
//     } catch (error) {
//       return error.message;
//     }
//   }