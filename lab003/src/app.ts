export class App {
  opwApiKey = "2eab94e68e577bc023a653cc6be04573";
  constructor() {
    document
      .getElementById("check")
      .addEventListener("click", () => this.checkWeather());
    this.getCityInfo("krakow");
    const config = "123";
  }
  async getCityInfo(city: string) {
    const weather = await this.getWeather(city);
    this.saveData(weather);
    this.showData();
  }
  async getWeather(city: string): Promise<any> {
    const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
    const weatherResponse = await fetch(openWeatherUrl);
    const weatherData = await weatherResponse.json();
    console.log(weatherData);
    return weatherData;
  }
  saveData(data: any) {
    localStorage.setItem("weatherData", JSON.stringify(data));
  }
  getData() {
    const data = localStorage.getItem("weatherData");
    if (data) {
      return JSON.parse(data);
    } else {
      return {};
    }
  }
  checkWeather() {
    const input = (<HTMLInputElement>document.getElementById("city")).value;
    console.log(input);
    if (input) this.getCityInfo(input);
  }

  showData() {
    const data = this.getData();
    const city = data.name;
    const temperature = (data.main.temp - 273.15).toFixed();
    const pressure = data.main.pressure;
    const humidity = data.main.humidity;
    const iconCode = data.weather[0].icon;
    const iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    console.log(temperature, pressure, humidity);
    document.getElementById("weather").innerHTML = `
    <img src='${iconUrl}'/>
    <div><label>City: </label><span>${city}</span></div>
    <div><label>Temperature: </label><span>${temperature}°C</span></div>
    <div><label>Pressure: </label><span>${pressure} hPA</span></div>
    <div><label>Humidity: </label><span>${humidity}%</span></div>
    `;
  }
}
